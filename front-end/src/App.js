import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ApplicationRun from './ApplicatonRun'

function App() {
    return (
        <>
          <BrowserRouter>           
              <Switch>

                  <Route path="/" component={ApplicationRun} />

              </Switch>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      )
}

export default App

