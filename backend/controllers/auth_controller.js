import bcrypt from 'bcryptjs';
import User from "../models/user_model.js"
import generateToken from '../utils/generateToken.js';

export const signup=async(req,res)=>{
   try{
        const {email,username,password} = req.body
        const user = await User.findOne({username})
        if(user)
        {
         return res.status(400).json({error:"username already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
         email,username,password:hashedPassword
        })
       
        if(newUser)
        {
        await newUser.save();
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