import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Navbar from './shared/components/navbar/Navbar'

function ApplicationRun() {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default ApplicationRun