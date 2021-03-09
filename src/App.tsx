import React from 'react'
import AppRouter from './router'
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
      <Navbar />
      <AppRouter />
    </div>
  )
}
  
export default App
