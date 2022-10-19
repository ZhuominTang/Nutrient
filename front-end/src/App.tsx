import {FC}from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import login from './components/login/login';
import admin from './components/admin/admin';

const App: FC = () => {


  return (
    <>
    	<BrowserRouter>
				<Switch>
				    <Route path="/register" component={login}></Route>
					<Route path="/login" component={login}></Route>
					<Route path="/" component={admin}></Route>
				</Switch>
			</BrowserRouter>
    </>
  )
}

export default App

