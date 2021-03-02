export function getReports() {
  return fetch('https://my-json-server.typicode.com/FrizenVladyslav/vue-test-task/reports')
    .then( res => res.json())
    .then( data => data)
    .catch( err => err)
}