import { REPORTS_FROM_API } from './types'

// const initialState = {
//   reports: [],
//   savedReports: [],
//   tags: [],
//   current: 1
// }

const testReports = [{
    "id": 1,
    "title": "Report 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt est sed mi rhoncus gravida. Ut rutrum ex tellus, sed bibendum quam finibus et. Vestibulum sit amet neque nec leo dapibus molestie. Maecenas ullamcorper, leo a venenatis rhoncus, lectus urna semper mauris, quis ullamcorper tellus tellus nec sapien. Praesent non ex at neque porttitor pulvinar. Aenean hendrerit accumsan imperdiet. Aliquam et arcu quis nibh sagittis volutpat sed eget augue. Sed suscipit lectus sed eros malesuada ornare. Proin non cursus nibh. Etiam aliquam congue sem vel viverra. Vestibulum laoreet varius elementum.",
    "tags": [
      "Maecenas",
      "Etiam"
    ]
  },
  {
    "id": 2,
    "title": "Report 2",
    "description": "Nam efficitur, sem eget interdum luctus, tellus diam pharetra purus, vel consectetur sem tellus viverra felis. Mauris aliquam finibus ante, vel ultrices dui porta vel. Phasellus interdum ipsum vitae dolor vestibulum, quis tristique massa vulputate. Curabitur posuere, eros et pellentesque sodales, diam purus finibus justo, ullamcorper euismod est urna ac quam. Nunc magna velit, placerat non tincidunt et, accumsan in quam. Etiam vehicula pretium nisi, quis tempor leo. Aliquam sollicitudin vulputate libero, a rutrum purus. Maecenas semper augue quis feugiat hendrerit. In euismod mollis sem, vel porttitor ex maximus a. Sed enim purus, bibendum in ornare vel, porta eu ipsum. Pellentesque rhoncus consequat felis at mollis. Donec at velit eget tortor mattis auctor eget quis dolor. Quisque sodales mauris velit, quis efficitur nunc posuere sed.",
    "tags": [
      "Maecenas",
      "Etiam"
    ]
  },
  {
    "id": 3,
    "title": "Report 3",
    "description": "Donec lacinia mollis fringilla. Duis blandit mollis purus vitae pellentesque. Etiam quis sem id neque congue maximus a sit amet orci. Morbi sed egestas est. Pellentesque elementum, purus vel convallis luctus, est turpis auctor odio, et suscipit massa eros at dolor. Mauris vulputate lobortis interdum. Nullam felis magna, scelerisque ut ligula in, bibendum placerat sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean lobortis porta erat non elementum. Praesent interdum laoreet imperdiet. In justo odio, sodales et diam id, suscipit semper lacus. Morbi cursus et nulla sed commodo. In hac habitasse platea dictumst.",
    "tags": [
      "Etiam",
      "Morbi"
    ]
  }]

export const Reducer = ( state , { type, payload}) => {
  switch (type) {
    case REPORTS_FROM_API:
      return {...state, reports: state.reports.concat(testReports)}
  
    default:
      return state
  }
}