import { IReport } from "../store/reports/types";

export async function getReports(): Promise<IReport[]> {
  const response = await fetch('https://my-json-server.typicode.com/FrizenVladyslav/vue-test-task/reports')
  const data = await response.json()
  if (response.ok) {
    console.log(data)
    return data
  } else {
    console.log(data)
    return []
  }
}