import React,{useState,useEffect} from 'react';
import Navbar from '../sample/Navbar';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/Auth';
import { clearErrors } from '../../actions/Errors';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
      if (error.id === 'LOGIN_FAIL') {
          setMsg(error.msg.msg);
      } else {
          setMsg(null);
      }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
        setEmail('');
        setPassword('');
        dispatch(clearErrors());
    }
}, [isAuthenticated, dispatch]);

const onChange = (e) => {
  if (e.target.name === 'email') {
      setEmail(e.target.value);
  } else if (e.target.name === 'password') {
      setPassword(e.target.value);
  }
};

const onSubmit = (e) => {
  e.preventDefault();

  const user = { email, password };
  console.log(user)
  dispatch(login(user.email, user.password));
};


  return (
    <>
    <Navbar/>
       <div className='container' >
        <div className='container' style={divStyle}>
        <div className='box' style={loginStyle}>
        <form onSubmit={onSubmit}>
        {msg && <Alert color="danger">{msg}Hello</Alert>}
          <h1>Login</h1>
          <div className="form-outline mb-4"></div>
          <div className="form-outline mb-4"></div>
          <div className="form-outline mb-4">
            <label className="form-label" >Email</label>
            <input type="email" id="email" className="form-control" placeholder='enter email' name='email' value={email}
                                onChange={onChange}  autoComplete="off" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" >Password</label>
            <input type="password" id="password" className="form-control" placeholder='enter password' name='password' value={password}
                                onChange={onChange}/>
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
