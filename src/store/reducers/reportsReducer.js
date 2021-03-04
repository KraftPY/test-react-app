// const testReports = [
//   {
//     "id": 1,
//     "title": "Report 1",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt est sed mi rhoncus gravida. Ut rutrum ex tellus, sed bibendum quam finibus et. Vestibulum sit amet neque nec leo dapibus molestie. Maecenas ullamcorper, leo a venenatis rhoncus, lectus urna semper mauris, quis ullamcorper tellus tellus nec sapien. Praesent non ex at neque porttitor pulvinar. Aenean hendrerit accumsan imperdiet. Aliquam et arcu quis nibh sagittis volutpat sed eget augue. Sed suscipit lectus sed eros malesuada ornare. Proin non cursus nibh. Etiam aliquam congue sem vel viverra. Vestibulum laoreet varius elementum.",
//     "tags": [
//       "Maecenas",
//       "Etiam"
//     ]
//   },
//   {
//     "id": 2,
//     "title": "Report 2",
//     "description": "Nam efficitur, sem eget interdum luctus, tellus diam pharetra purus, vel consectetur sem tellus viverra felis. Mauris aliquam finibus ante, vel ultrices dui porta vel. Phasellus interdum ipsum vitae dolor vestibulum, quis tristique massa vulputate. Curabitur posuere, eros et pellentesque sodales, diam purus finibus justo, ullamcorper euismod est urna ac quam. Nunc magna velit, placerat non tincidunt et, accumsan in quam. Etiam vehicula pretium nisi, quis tempor leo. Aliquam sollicitudin vulputate libero, a rutrum purus. Maecenas semper augue quis feugiat hendrerit. In euismod mollis sem, vel porttitor ex maximus a. Sed enim purus, bibendum in ornare vel, porta eu ipsum. Pellentesque rhoncus consequat felis at mollis. Donec at velit eget tortor mattis auctor eget quis dolor. Quisque sodales mauris velit, quis efficitur nunc posuere sed.",
//     "tags": [
//       "Maecenas",
//       "Etiam"
//     ]
//   },
//   {
//     "id": 3,
//     "title": "Report 3",
//     "description": "Donec lacinia mollis fringilla. Duis blandit mollis purus vitae pellentesque. Etiam quis sem id neque congue maximus a sit amet orci. Morbi sed egestas est. Pellentesque elementum, purus vel convallis luctus, est turpis auctor odio, et suscipit massa eros at dolor. Mauris vulputate lobortis interdum. Nullam felis magna, scelerisque ut ligula in, bibendum placerat sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean lobortis porta erat non elementum. Praesent interdum laoreet imperdiet. In justo odio, sodales et diam id, suscipit semper lacus. Morbi cursus et nulla sed commodo. In hac habitasse platea dictumst.",
//     "tags": [
//       "Etiam",
//       "Morbi"
//     ]
//   },
//   {
//     "id": 4,
//     "title": "Report 4",
//     "description": "Integer vestibulum auctor gravida. Curabitur eu nulla et arcu luctus iaculis id ut risus. Nulla vitae nulla urna. Vivamus leo est, hendrerit sit amet elit eu, facilisis accumsan est. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque in purus imperdiet, et feugiat dui dapibus. Quisque mauris lacus, pretium a felis in, eleifend pellentesque ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pharetra quam sed justo viverra facilisis. Pellentesque erat lacus, mollis at urna non, porttitor aliquet massa. Aliquam erat volutpat.",
//     "tags": [
//       "Quisque"
//     ]
//   },
//   {
//     "id": 5,
//     "title": "Report 5",
//     "description": "Nulla rutrum ipsum quam, ut blandit odio lobortis a. Phasellus eget dictum odio. Vestibulum ac arcu ac nisi porta accumsan id vel metus. Phasellus ac cursus massa, vel posuere metus. Pellentesque iaculis hendrerit arcu ac consectetur. In tristique tortor risus, sed maximus eros mattis vitae. Aliquam erat volutpat. In tempor metus elit, ut hendrerit lorem pellentesque sit amet.",
//     "tags": [
//       "Phasellus"
//     ]
//   },
//   {
//     "id": 6,
//     "title": "Report 6",
//     "description": "Duis accumsan, mi sed tristique scelerisque, tortor felis luctus nisl, non dignissim erat lectus quis velit. Nam maximus velit vitae lacus hendrerit, at efficitur urna rhoncus. Sed tincidunt lorem quis dui hendrerit, vel dictum magna sollicitudin. Quisque nec lobortis urna, in maximus massa. Nam molestie mi non tincidunt volutpat. Donec convallis ullamcorper ipsum quis laoreet. Duis pharetra magna nec felis mattis, id tincidunt massa egestas.",
//     "tags": [
//       "Quisque"
//     ]
//   },
//   {
//     "id": 7,
//     "title": "Report 7",
//     "description": "Nullam egestas nisi ac enim faucibus mollis. Nulla non nisl nec elit finibus sollicitudin nec et neque. Vestibulum sagittis malesuada neque, eu mattis velit elementum faucibus. Fusce lobortis ornare lectus, ut congue tortor scelerisque at. In hac habitasse platea dictumst. Vestibulum ipsum enim, tristique eu ex eu, vestibulum laoreet leo. Duis at augue sit amet lectus condimentum viverra. Fusce ut accumsan mi. Morbi sed lorem ut eros dictum finibus. Quisque ornare nunc in eleifend pellentesque. Donec pharetra at lorem at laoreet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vulputate neque a ipsum elementum cursus.",
//     "tags": [
//       "Morbi",
//       "Quisque"
//     ]
//   },
//   {
//     "id": 8,
//     "title": "Report 8",
//     "description": "In venenatis purus vitae nibh consectetur condimentum. Ut ipsum felis, hendrerit sit amet nisl auctor, ultrices laoreet ex. Curabitur tincidunt sapien a mi maximus, ac faucibus nisi blandit. Mauris tincidunt tincidunt accumsan. Cras ut viverra lorem. Quisque et purus aliquet, rhoncus orci at, porttitor mi. Cras aliquam vestibulum lectus, ac dapibus nunc pretium vitae. Proin tincidunt lectus sed eros dapibus dictum. Cras fringilla, nulla vel porttitor ornare, massa augue dictum risus, sit amet imperdiet urna quam et magna. Integer molestie varius dictum. Nunc malesuada bibendum eleifend.",
//     "tags": [
//       "Quisque"
//     ]
//   },
//   {
//     "id": 9,
//     "title": "Report 9",
//     "description": "Nullam vel lacinia nibh. Nunc elit arcu, euismod ut eleifend vitae, laoreet sit amet odio. Fusce sollicitudin tempor viverra. Morbi nibh eros, vehicula ac sapien eu, ultricies egestas metus. Donec ultrices, lectus eget hendrerit sollicitudin, felis mi feugiat ligula, nec ullamcorper risus justo et felis. Pellentesque arcu eros, venenatis vel magna at, lobortis finibus mi. Praesent sem ligula, auctor id nibh quis, mattis vulputate ante. Etiam ullamcorper sapien eu interdum interdum. Vivamus dolor tellus, dignissim at consectetur eu, venenatis sodales eros. Nullam ultrices ullamcorper ex, at maximus enim egestas in. Nulla placerat felis ac lectus rhoncus, eget cursus velit scelerisque. Phasellus in libero eget enim vulputate rhoncus a at justo. Vivamus mollis molestie turpis, eu commodo sem. Maecenas mattis turpis ut leo pulvinar aliquet.",
//     "tags": [
//       "Maecenas",
//       "Etiam",
//       "Morbi",
//       "Phasellus"
//     ]
//   },
//   {
//     "id": 10,
//     "title": "Report 10",
//     "description": "Quisque eros eros, dignissim ut condimentum vitae, aliquet non ipsum. Nam in rhoncus orci. Nulla eget scelerisque ante. In nec mi facilisis, mollis leo nec, varius justo. Etiam eget enim id quam interdum euismod a a massa. Integer blandit tincidunt vehicula. Nullam eleifend, est sed faucibus luctus, felis nisi consequat eros, a malesuada leo nulla in lectus. Pellentesque sit amet nisi commodo, imperdiet lorem nec, consequat justo. Proin orci nisi, consequat in porta ac, scelerisque vitae ex. Nulla pharetra, lectus et suscipit laoreet, libero nisi efficitur tellus, eu dictum lacus dolor eu nisl.",
//     "tags": [
//       "Etiam",
//       "Quisque"
//     ]
//   },
//   {
//     "id": 11,
//     "title": "Report 11",
//     "description": "Morbi sagittis lacus a sem congue, et aliquam tortor sollicitudin. Praesent in eleifend ex. Nulla sed elit mi. Nulla sagittis mauris magna, vitae dapibus dui auctor quis. Ut lacinia ullamcorper euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.",
//     "tags": [
//       "Morbi"
//     ]
//   }
// ]

const initialState = {
  reports: [],
  savedReports: JSON.parse(localStorage.getItem('savedReports')) || [],
  filteredReports: [],
  tags: [],
  current: 1
}



export const reportsReducer = ( state = initialState, { type, payload}) => {
  switch (type) {
    case 'PUT_REPORTS':
      const arrTags = []
      const newArrReports = state.reports.concat(payload.reports)
      payload.reports.forEach( el => {
        el.tags.forEach( t => arrTags.push(t))
      })
      return {
        ...state,
        reports: newArrReports,
        filteredReports: newArrReports,
        tags: [...new Set(arrTags)]
      }

    case 'CHANGE_CURRENT_PAGINATION':
      return {...state, current: payload}

    case 'FILTER_REPORTS':
      const filteredArr = payload ? state.filteredReports.filter( r => r.tags.includes(payload)) : state.reports
      return {
        ...state,
        filteredReports: filteredArr,
        current: 1
      }

    case 'SAVE_REPORT':
      // if (state.savedReports.find( rep => rep.id !== payload.id)) {
        const newSavedReports = state.savedReports.concat([payload])
        localStorage.setItem('savedReports', JSON.stringify(newSavedReports))
        return {...state, savedReports: newSavedReports}
      // }
      // return state

    default:
      return state
  }
}