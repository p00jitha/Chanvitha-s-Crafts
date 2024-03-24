import express from 'express';
import {signup,login,logout,otpverification,resendOTP} from '../controllers/auth_controller.js'
const router = express.Router()

router.post('/login',login)

router.post('/signup',signup)

router.post('/logout',logout)

router.post('/verifyotp',otpverification)

router.post('/resendotp',resendOTP)

export default router;