import React from 'react';
import Navbar from '../sample/Navbar';
import {Link} from 'react-router-dom'
const LoginModal = () => {
    const divStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        color:'#C70039'
      }
      const loginStyle={
        width:'450px',
        height:'450px',
        display:'flex',
        flexDirection:'column',
        padding:'30px 25px 30px 25px',
        boxShadow:'5px 5px 5px 5px #C70039'
      }

  return (
    <>
    <Navbar/>
       <div className='container' >
        <div className='container' style={divStyle}>
        <div className='box' style={loginStyle}>
        <form >
          <h1>Login</h1>
          <div className="form-outline mb-4"></div>
          <div className="form-outline mb-4"></div>
          <div className="form-outline mb-4">
            <label className="form-label" >Email</label>
            <input type="email" id="email" className="form-control" placeholder='enter email' name='email'   autoComplete="off" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" >Password</label>
            <input type="password" id="password" className="form-control" placeholder='enter password' name='password' />
          </div>
          <button type="submit" className="btn btn-danger btn-block mb-4">Login</button>
          <div className="row mb-4">
            <div className="row">
              <p>Don't have an account?
            <Link to='/signup' style={{ color: '#C70039' }}>
                SignUp
             </Link></p>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
    </>
  )
}


export default LoginModal;
