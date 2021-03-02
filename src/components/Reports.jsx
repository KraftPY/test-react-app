import React, { Component, Fragment } from 'react'
import ReportsList from '../components/ReportsList/ReporstList'
import Pag from '../components/Pagination/Pagination'
import Filter from '../components/Filter/Filter'
import { getReports } from "../api"

class Reports extends Component {
  state = {
    reports: [],
    filteredReports: [],
    tags: [],
    current: 1,
  }

  async componentDidMount() {
    const data = await getReports()
    const tagsTemp = this.getTags(data)
    this.setState({
      reports: data,
      filteredReports: data,
      tags: tagsTemp,
    })
  }

  getTags(arr) {
    const arrTags = []
      arr.forEach( el => {
        el.tags.forEach( t => arrTags.push(t))
      })
      return [...new Set(arrTags)]
  }

  changeFilter = val => {
    const reports = this.state.reports
    const filteredReports = val ? reports.filter( r => r.tags.includes(val)) : reports
    this.setState({ 
      current: 1,
      filteredReports
    })
  }

  changeCurrentPage = current => {
    this.setState({ current })
  }

  saveReport = report => {
    let saveReports = JSON.parse(localStorage.getItem('savedReports')) || []
    if (!saveReports.find( r => r.id === report.id)) {
      saveReports.push(report)
      localStorage.setItem('savedReports', JSON.stringify(saveReports))
    }
  }

  render() {
    const { state: { tags, filteredReports, current }, changeFilter, changeCurrentPage, saveReport } = this
    return (
      <Fragment>
        <Filter tags={ tags } event={ changeFilter }/>
        <ReportsList
          arrReports={ filteredReports }
          current={ current }
          saveRep={ saveReport }
        />
        <Pag 
          total={ filteredReports.length }
          changeCurrent={ changeCurrentPage }
          current={ current }
        />
      </Fragment>
    )
  }
  
}

export default Reports