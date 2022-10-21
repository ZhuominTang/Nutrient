import {FC}from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import LoginPage from './pages/login/login';
import AdminPage from './pages/admin/admin';
import NeedAuth from './components/needAuth/needAuth';

const App: FC = () => {

  return (
    <>
    	<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage/>}></Route>
					<Route path="/" element={<NeedAuth><AdminPage/></NeedAuth>}></Route>
				</Routes>
		</BrowserRouter>
    </>
  )
}

export default App

