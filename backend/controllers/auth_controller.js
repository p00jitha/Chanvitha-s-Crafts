import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import User from "../models/user_model.js";
import generateToken from '../utils/generateToken.js';
import userOTPverification from '../models/userOTPverfication.js';

dotenv.config();

 const transporter = nodemailer.createTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
     user: process.env.AUTH_EMAIL,
     pass: process.env.AUTH_PASS,
   }, 
 });
 
export const signup=async(req,res)=>{
   try{
        const {email,username,password} = req.body 
        const user = await User.findOne({email})
        if(user)
        {
         return res.status(400).json({error:"user already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
         email,username,
         password:hashedPassword,
         verified:false,
        })
       
        if(newUser)
        {
        await newUser.save()
        .then((result)=>{
         sendOTPverification(result,res);
        })
        //generateToken(newUser._id,res)
       
        }
        else
        {
         res.status(400).json({error:"Invalid user data"})
        }
   } 
   catch(err)
   {
      res.status(500).json({error:"Internal server error"})
      console.log(err)
   }
}

export const login= async(req,res)=>{
    try{
          const {username,password} = req.body;
          const user = await User.findOne({username})
          if(user)
          {
            const isPasswordcorrect = await bcrypt.compare(password,user.password)
            if(!isPasswordcorrect)
            {
               res.status(400).json({error:"Invalid Password"})
            }
            generateToken(user._id,res)
           res.status(201).json({
            _id:user._id,
         username:user.username
           }) 
          }
          else
          {
            res.status(400).json({error:"Invalid Username"})
          }
    }
    catch(err)
   {
      res.status(500).json({error:"Internal server error"})
      console.log(err)
   }
 }

 export const logout=async(req,res)=>{
    try{
       res.cookie("jwt","",{maxAge:0});
       res.status(200).json({message:"logged out successfully"})
    }
    catch(err)
    {
      console.log(err)
      res.status(500).json({error:"error in logout"})
    }
 }

 const sendOTPverification = async({_id,email},res)=>{
   try{
      const otp = `${Math.floor(10000+Math.random()*9000)}`;
      const mailOptions = {
         from:process.env.AUTH_EMAIL,
         to:email,
         subject:"verify your email",
         html:`<p>Enter <b>${otp} in the app to verify your email address</b></p>
         <p>This code expires in 1hr</p>`
      }
      const hashedOTP = await bcrypt.hash(otp,10)
      const newOTPverification = await new userOTPverification({
         userId:_id,
         otp:hashedOTP,
         createdAt:Date.now(),
         expiresAt:Date.now()+3600000,
      })
      await newOTPverification.save();
      await transporter.sendMail(mailOptions);
      res.json({
         status:"pending",
         message:"verification otp email sent",
         data:{
            userId:_id,
            email
         }
      })
   }
   catch(err)
   {
      console.log(err)
   }
 }

 export const otpverification = async(req,res)=>{
   try{
      let {userId,otp} = req.body;
      if(!userId || !otp)
      {
         res.status(400).json({error:"Enter OTP"})
      }
      else
      {
         const UserVerificationRecords = await userOTPverification.find({userId});
         if(UserVerificationRecords.length<=0)
         {
            res.status(400).json({error:"Acc record doesn't exist or has been verified already.Please Signup"})
         }
         else
         {
            const {expiresAt} = UserVerificationRecords[0];
            const hashedOTP = UserVerificationRecords[0].otp;
            if(expiresAt<Date.now())
            {
               await userOTPverification.deleteMany({userId});
               res.status(400).json({error:"Code has expired. Please Signup again."})
            }
            else
            {
               const validOTP = await bcrypt.compare(otp,hashedOTP)
               if(!validOTP)
               {
                  res.status(400).json({error:"Invalid code passed. Check your inbox."})
               }
               else
               {
                  await User.updateOne({_id:userId},{verified:true});
                  await userOTPverification.deleteMany({userId});
                  res.json({
                     status:"verified",
                     message:"user email verified successfully",
                  })
               }
            }
         }
      }
   }catch(err)
   {
      res.status(400).json({error:"error"})
      console.log(err)
   }
 }

 export const resendOTP = async(req,res)=>{
   try{
      let {userId,email} = req.body;
      if(!userId || !email)
      {
         res.status(500).json({error:"Empty user details are not allowed"})
      }
      else
      {
         await userOTPverification.deleteMany({userId});
         sendOTPverification({_id:userId,email},res);
      }
   }
   catch(error)
   {
      res.json({
         status:"FAILED",
         message:error.message
      });
   }
 }