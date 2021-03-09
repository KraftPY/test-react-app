export interface IReport {
  id: number,
  title: string,
  tags: string[],
  description: string
}

export interface ReportsState {
  reports: IReport[],
  sReports: IReport[],
  filteredReports: IReport[],
  sFilteredReports: IReport[],
  tags: string[],
  sTags: string[],
}


export const GET_API_REPORTS = 'GET_API_REPORTS'
export const GET_SAVED_REPORTS = 'GET_SAVED_REPORTS'
export const SAVE_REPORT = 'SAVE_REPORT'

interface GetApiReportsAction {
  type: typeof GET_API_REPORTS
  payload: IReport[]
}

interface GetSavedReportsAction {
  type: typeof GET_SAVED_REPORTS
}

interface SaveReportAction {
  type: typeof SAVE_REPORT
  payload: IReport
}


export type ReportsActionTypes = GetApiReportsAction | GetSavedReportsAction | SaveReportAction