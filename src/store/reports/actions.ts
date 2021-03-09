import { 
  GET_API_REPORTS,
  GET_SAVED_REPORTS,
  IReport,
  ReportsActionTypes,
  SAVE_REPORT
} from "./types"

export function getApiReports(arrReports: IReport[]): ReportsActionTypes {
  return {
    type: GET_API_REPORTS,
    payload: arrReports
  }
}

export function getSavedReports(): ReportsActionTypes {
  return {
    type: GET_SAVED_REPORTS,
  }
}

export function saveReport(report: IReport): ReportsActionTypes {
  return {
    type: SAVE_REPORT,
    payload: report
  }
}
