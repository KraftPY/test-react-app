import { concatTagsArrays } from "../../services/reportService"

const initialState = {
  reports: [],
  sReports: [],
  filteredReports: [],
  sFilteredReports: [],
  tags: [],
  sTags: [],
  current: 1
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

    case 'CHANGE_CURRENT_PAGINATION':
      return {...state, current: payload}

    case 'FILTER_REPORTS':
      const { isSaved, val } = payload
      const keyNameRep = isSaved ? 'sReports' : 'reports'
      const keyNameFilter = isSaved ? 'sFilteredReports' : 'filteredReports'
      const filteredArr = val ? state[keyNameFilter].filter( r => r.tags.includes(val)) : state[keyNameRep]
      return {
        ...state,
        [keyNameFilter]: filteredArr,
        current: 1
      }

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