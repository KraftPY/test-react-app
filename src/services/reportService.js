export function concatTagsArrays(arrReports) {
  const arrTags = []
  arrReports.forEach( rep => arrTags.push(...rep.tags))
  return [...new Set(arrTags)]
}