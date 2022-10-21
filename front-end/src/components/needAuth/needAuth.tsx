import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NeedAuth = (props:any) => {
    const auth = useSelector((state: RootState) => state.auth)
    const location = useLocation()
    return auth.isLogged?props.children:<Navigate to={"/login"} 
    replace
    state={{preLocation:location}}/>

}
export default NeedAuth 