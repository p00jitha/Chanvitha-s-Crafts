import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../sample/Navbar'

const SignupModal = () => {
    const divStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        color:'#C70039'
      }
      const loginStyle={
        width:'450px',
        height:'550px',
        display:'flex',
        flexDirection:'column',
        padding:'30px 25px 30px 25px',
        boxShadow:'5px 5px 5px 5px #C70039'
      }
  return (
    <div>
      <Navbar/>
      <div className='container' >
        <div className='container' style={divStyle}>
        <div className='box' style={loginStyle}>
        <form>
          <h1>Signup</h1>
          <div className="form-outline mb-4"></div>
          <div className="form-outline mb-4"></div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Email address</label>
            <input type="email" id="form2Example1" className="form-control" placeholder='enter email' name='email' autocomplete="off" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Username</label>
            <input type="text" id="form2Example1" className="form-control" placeholder='enter username' name='username'  autocomplete="off" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" className="form-control" placeholder='enter password' name='password' />
          </div>
          <button type="submit" className="btn btn-danger btn-block mb-4">Register</button>
          <div className="row mb-4">
            <div className="row">
              <p>Already Registered? <Link to='/login' style={{ color: '#C70039' }}>
                Login
             </Link></p>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
