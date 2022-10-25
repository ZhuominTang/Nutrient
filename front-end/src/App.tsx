import { FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import AdminPage from './pages/admin/admin';
import NeedAuth from './components/needAuth/needAuth';
import UseAutoLogout from './hooks/useAutoLogout';
import SearchPage from './components/seach/searchPage';


const App: FC = () => {
	UseAutoLogout()
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/" element={<NeedAuth><AdminPage /></NeedAuth>}>
						<Route path='search' element={<SearchPage></SearchPage>}></Route>						
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

