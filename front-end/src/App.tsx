import {FC}from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import loginPage from './pages/login/login';
import adminPage from './pages/admin/admin';

const App: FC = () => {


  return (
    <>
    	<BrowserRouter>
				<Switch>
					<Route path="/login" component={loginPage}></Route>
					<Route path="/" component={adminPage}></Route>
				</Switch>
		</BrowserRouter>
    </>
  )
}

export default App

