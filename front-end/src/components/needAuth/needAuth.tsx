import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate } from 'react-router-dom';

const NeedAuth = (props:any) => {
    const auth = useSelector((state: RootState) => state.auth)

    return auth.isLogged?props.children:<Navigate to={"/login"} replace/>

}
export default NeedAuth 