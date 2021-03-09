import { IReport } from "../store/reports/types"

export function concatTagsArrays(arrReports: IReport[]): string[] {
  const arrTags: string[] = []
  arrReports.forEach( rep => arrTags.push(...rep.tags))
  return Array.from(new Set(arrTags))
}

export function parseTags(strTags: string): string[] {
  let parseTags = strTags.replace(/ +/g, ' ').trim().split(/,|\s/)
  return parseTags.filter( t => t !== '')
}

export function createNewId(reports: IReport[], sReports: IReport[]): number {
  let id = 0
  let isNewId = false
  do {
    id++
    // eslint-disable-next-line
    isNewId = !sReports.find( r => r.id === id)
    // eslint-disable-next-line
    isNewId = !reports.find( r => r.id === id)
  } while (!isNewId)
  return id
}