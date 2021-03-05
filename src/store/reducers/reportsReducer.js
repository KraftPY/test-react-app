import { concatTagsArrays } from "../../services/reportService"

const initialState = {
  reports: [],
  sReports: [],
  filteredReports: [],
  sFilteredReports: [],
  tags: [],
  sTags: [],
}

export const reportsReducer = ( state = initialState, { type, payload}) => {
  switch (type) {
    case 'GET_API_REPORTS':
      const reports = state.reports.concat(payload.reports)
      const tags = concatTagsArrays(reports)
      return { ...state,  reports,  filteredReports: reports,  tags }

    case 'GET_SAVED_REPORTS':
      const sReports = JSON.parse(localStorage.getItem('savedReports')) || []
      const sTags = concatTagsArrays(sReports)
      return { ...state,  sReports,  sFilteredReports: sReports,  sTags }

    case 'SAVE_REPORT':
      if (state.sReports.find( rep => rep.id !== payload.id)) {
        const newSavedReports = state.sReports.concat([payload])
        localStorage.setItem('savedReports', JSON.stringify(newSavedReports))
        return {...state, sReports: newSavedReports}
      }
      return state

    default:
      return state
  }
}