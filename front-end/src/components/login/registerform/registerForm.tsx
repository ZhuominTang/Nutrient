import React, { useRef,useState,useEffect }  from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registerForm.scss';
import { useRegisterUserMutation } from '../../../api/userApi';
import { User } from '../../../model/user';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { RequestError } from '../../../model/error';


const RegisterForm = () => {

    const username = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [validated, setValidated] = useState(false);

    const [registerUser,{error}] = useRegisterUserMutation();
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const user: User  = {
        username: username.current?username.current.value:"",
        email: email.current?email.current.value:"",
        password: password.current?password.current.value:"",
    };   
     registerUser(user).then(res =>
      console.log(res)
     )
  };
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter Email" required ref={email}/>       
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            ref={username}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Password"
        required
        ref={password}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text> 
      <p>{ error  && (error as RequestError).data?.message}</p>
      <Button className="submitButton" variant="primary" type="submit" >
        Register
      </Button>
    </Form>
  )
}
export default RegisterForm;
