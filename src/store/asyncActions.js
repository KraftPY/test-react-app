import { getReports } from '../api'

export function getReportsFromApi() {
  return (dispatch) => {
    getReports().then( res => {
      dispatch({
        type: 'PUT_REPORTS',
        payload: {
          reports: res
        }
      })
    })
  }
}