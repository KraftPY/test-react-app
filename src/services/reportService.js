export function concatTagsArrays(arrReports) {
  const arrTags = []
  arrReports.forEach( rep => arrTags.push(...rep.tags))
  return [...new Set(arrTags)]
}

export function parseTags(strTags) {
  let parseTags = strTags.replace(/ +/g, ' ').trim().split(/,|\s/)
  return parseTags.filter( t => t !== '')
}

export function createNewId(reports, sReports) {
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