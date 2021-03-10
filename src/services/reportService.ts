import { IReport } from "../store/reports/types"

export function concatTagsArrays(arrReports: IReport[]): string[] {
  const arrTags: string[] = []
  arrReports.forEach( rep => arrTags.push(...rep.tags))
  return Array.from(new Set(arrTags))
}

export function parseTags(strTags: string): string[] {
  let parseTags: string[] = strTags.replace(/ +/g, ' ').trim().split(/,|\s/)
  return parseTags.filter( t => t !== '')
}

export function createNewId(reports: IReport[], sReports: IReport[]): number {
  let id: number = 0
  let isNewId: boolean = true

  const checkID = (): boolean => !!(sReports.find( r => r.id === id) || reports.find( r => r.id === id))

  do {
    id++
    isNewId = checkID()
  } while (isNewId)
  return id
}