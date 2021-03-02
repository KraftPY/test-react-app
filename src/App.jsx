import React from 'react'
import Reports from './components/Reports'
import CreateReport from './components/CreateReport'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ Reports }/>
          <Route exact path="/saved-reports" component={ Reports }/>
          <Route exact path="/create-report" component={ CreateReport }/>
        </Switch>
      </div>
    )
  }
  
export default App
