import React,{FC} from 'react';
import imgURL from '../../assets/images/logo-neg.png';
import './login.scss';



const Login: FC = () => {


  return (
 

<div className="login">
				<header className="login-header">
                    <div className='logo'>
					<img src={imgURL} alt="logo"></img>
					<h1>Nutrition Information Management system</h1>
                    </div>
				</header>
				<section className="login-content">
					
					<h2>User Login</h2>
				
				</section>
			</div>
  


  )
}

export default Login
