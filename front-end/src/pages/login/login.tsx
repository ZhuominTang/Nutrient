import React,{FC} from 'react';
import imgURL from '../../assets/images/logo-neg.png';
import './login.scss';



const Login: FC = () => {


  return (
 

<div className="login">
				<header className="login-header">
                    <div className='logo'>
					<img src={imgURL} alt="logo"></img>
					<h1>Shaping the Future of Medicine</h1>
                    </div>
				</header>
				<section className="login-content">
					<h2>User Login</h2>
                    <div>form</div>
				</section>
			</div>
  )
}

export default Login
