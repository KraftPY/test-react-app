import React from 'react'
import AppRouter from './router'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { getReportsFromApi } from './store/reports/asyncActions'
import { getSavedReports } from './store/reports/actions'

function App() {
  const dispatch = useDispatch()

  // init app
  dispatch(getReportsFromApi())
  dispatch(getSavedReports())

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  )
}
  
export default App
