import { concatTagsArrays } from "../../services/reportService"
import { 
  GET_API_REPORTS,
  GET_SAVED_REPORTS,
  IReport,
  ReportsActionTypes,
  ReportsState,
  SAVE_REPORT
} from "./types"

const initialState: ReportsState = {
  reports: [],
  sReports: [],
  filteredReports: [],
  sFilteredReports: [],
  tags: [],
  sTags: [],
}

const reportsReducer = ( 
  state = initialState,
  action: ReportsActionTypes
): ReportsState => {
  switch (action.type) {
    case GET_API_REPORTS:
      const reports = state.reports.concat(action.payload)
      const tags = concatTagsArrays(reports)
      return { ...state,  reports,  filteredReports: reports,  tags }

    case GET_SAVED_REPORTS:
      const sReports = JSON.parse(localStorage.getItem('savedReports') || '[]') as IReport[]
      const sTags = concatTagsArrays(sReports)
      return { ...state,  sReports,  sFilteredReports: sReports,  sTags }

    case SAVE_REPORT:
      if (!state.sReports.find( rep => rep.id === action.payload.id)) {
        const newSavedReports = state.sReports.concat([action.payload])
        localStorage.setItem('savedReports', JSON.stringify(newSavedReports))
        return {...state, sReports: newSavedReports}
      }
      return state

    default:
      return state
  }
}

export default reportsReducer