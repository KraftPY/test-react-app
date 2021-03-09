import React from 'react'
import Reports from '../components/Reports'
import CreateReport from '../components/CreateReport'
import { Switch, Route } from 'react-router-dom'

const routes = [
  {
    path: '/',
    component: Reports
  },
  {
    path: '/saved-reports',
    component: Reports
  },
  {
    path: '/create-report',
    component: CreateReport
  },
]

export default function appRouter() {
  return (
    <Switch>
      { routes.map( r => <Route exact path={ r.path } component={ r.component } key={ r.path }/>) }
    </Switch>
  )
}