import { getReports } from '../api'

export function getReportsFromApi() {
  return (dispatch) => {
    getReports().then( res => {
      dispatch({
        type: 'GET_API_REPORTS',
        payload: {
          reports: res
        }
      })
    })
  }
}