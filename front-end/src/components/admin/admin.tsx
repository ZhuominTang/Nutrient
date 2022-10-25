import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../api/authSlice';
import { useGetAllNutritionQuery } from '../../api/nutritionApi';

const Admin: FC = () => {
  const navigate = useNavigate();
  const authDispatch = useDispatch();

  const signOut = () => {
    authDispatch(logout({}))
    navigate("/login", { replace: true })
  }
  useGetAllNutritionQuery({})

  return (
    <>  
      <Button onClick={signOut}>Log out</Button>
    </>
  )
}

export default Admin