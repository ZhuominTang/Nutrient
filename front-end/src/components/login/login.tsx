import React,{FC, useState} from 'react';
import { NavLink } from 'react-router-dom';
import imgURL from '../../assets/images/logo-neg.png';
import LoginForm from './loginform/loginForm';
import RegisterForm from './registerform/registerForm';
import './login.scss';




const Login: FC = () => {

	const [isLogin,setIsLogin] = useState(true);
	
	const loginHandler = () =>{
		setIsLogin(true);
	}
	const registerHandler = () =>{
		setIsLogin(false);
	}

  return (
 

<div className="login">
				<header className="login-header">
                    <div className='logo'>
					<img src={imgURL} alt="logo"></img>
					<h1>Shaping the Future of Medicine</h1>
                    </div>
				</header>
				<div className="login-content">
				{isLogin?<h2>User Login</h2>:<h2>User Sign up</h2>}
				{isLogin?<LoginForm/> :<RegisterForm/>}
                    
				<div className='loginState'>
					<div className='loginEntrance' onClick={loginHandler} >
						Log in</div>
					<div className='registerEntrance' onClick={registerHandler} >
						Sign up</div>
					</div>
				</div>
			</div>
  )
}

export default Login
