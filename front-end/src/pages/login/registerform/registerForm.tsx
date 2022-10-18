import React, { useRef,useState }  from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registerForm.scss';
import { useRegisterUserMutation } from '../../../api/userApi';
import { User } from '../../../model/user';

const RegisterForm = () => {
    const username = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [validated, setValidated] = useState(false);

    const [registerUser,{isSuccess:isRegisterSuccess}] = useRegisterUserMutation();
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      const user : User = {
        username: username.current?username.current.value:"",
        email: username.current?username.current.value:"",
        password: username.current?username.current.value:"",
    };
  
      setValidated(true);
      registerUser(user)
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
      <Button className="submitButton" variant="primary" type="submit" >
        Register
      </Button>
    </Form>
  )
}
export default RegisterForm;
