import { combineReducers } from 'redux'
import { reportsReducer } from './reportsReducer'

export const rootReducer = combineReducers({
  reports: reportsReducer
})