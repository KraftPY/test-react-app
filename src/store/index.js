import { compose, createStore } from 'redux'
import { Reducer } from './reducer'

const preloadedState = {
  reports: [],
  tags: [],
  current: 1,
  savedReports: JSON.parse(localStorage.getItem('savedReports')) || []
}


const store = createStore(Reducer, preloadedState, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
