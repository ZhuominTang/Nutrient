import { FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import AdminPage from './pages/admin/admin';
import NeedAuth from './components/needAuth/needAuth';
import UseAutoLogout from './components/hooks/useAutoLogout';


const App: FC = () => {
	UseAutoLogout()
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

