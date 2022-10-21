import { FC, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import AdminPage from './pages/admin/admin';
import NeedAuth from './components/needAuth/needAuth';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { logout } from './api/authSlice';

const App: FC = () => {
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
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/" element={<NeedAuth><AdminPage /></NeedAuth>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

