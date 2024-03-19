import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer'
import User from "../models/user_model.js"
import generateToken from '../utils/generateToken.js';
import userOTPverification from '../models/userOTPverfication.js'

const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user:process.env.AUTH_EMAIL,
     pass:process.env.AUTH_PASS
   },
   host: 'smtp.gmail.com',
   port: 5000,
   secure: false,
   requireTLS: true
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
        generateToken(newUser._id,res)
        res.status(201).json({
         _id:newUser._id,
         username:newUser.username
        }) 
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