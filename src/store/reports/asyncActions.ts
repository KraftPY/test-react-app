import { getReports } from '../../api'
import { getApiReports } from './actions'
import { ThunkType } from './types'

export const getReportsFromApi = (): ThunkType => {
  return async dispatch => {
    const data = await getReports()
    dispatch(getApiReports(data))
  }
}