import React, { useState,useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import './loginForm.scss';
import { useLoginUserMutation } from '../../../api/userApi';
import { RequestError } from '../../../model/error';
import { User } from '../../../model/user';
import { useDispatch } from 'react-redux';
import { login } from '../../../api/authSlice';
import { useLocation } from 'react-router';






const LoginForm = () => {
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [loginUser,{error}] = useLoginUserMutation() ;
  const authDispatch = useDispatch();
  const location = useLocation()
  const from = location.state?.preLocation?.pathname || "/"
  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User  = {
      username: username.current?username.current.value:"",
      password: password.current?password.current.value:"",
  };   
  loginUser(user).then(res => {
    if('data' in res){
      
      authDispatch(login({
          token:res.data.jwt,
          user:res.data.user,
      })) 
      navigate(from,{replace:true})
    }
    
  })
};


  return (
<Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Username or Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Username or Email" required  ref={username} />       
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required  ref={password} />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <p>{ error  && (error as RequestError).data?.message}</p>
      <Button className="submitButton" variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm