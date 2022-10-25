import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import { logout } from '../api/authSlice';
const UseAutoLogout = () =>{
    const auth = useSelector((state: RootState) => state.auth)
	const authDispatch = useDispatch();
	useEffect(() => {
		const timeout = auth.expirationTime - Date.now()
		if (timeout < 1000 * 60) {
			authDispatch(logout({}))
			return;
		}
		const timer = setTimeout(() => {
			authDispatch(logout({}))
		}, timeout)

		return () => {
			clearTimeout(timer)
		}
	}, [auth])
}
export default UseAutoLogout