import React from 'react'
import Reports from './components/Reports'
import SavedReports from './components/SavedReports'
import CreateReport from './components/CreateReport'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { getReportsFromApi } from './store/asyncActions'

function App() {
  const dispatch = useDispatch()

  // init app
  dispatch(getReportsFromApi())
  dispatch({ type: 'GET_SAVED_REPORTS'})

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ Reports }/>
        <Route exact path="/saved-reports" component={ SavedReports }/>
        <Route exact path="/create-report" component={ CreateReport }/>
      </Switch>
    </div>
  )
}
  
export default App
