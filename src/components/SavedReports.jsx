import React, { Component, Fragment } from 'react'
import ReportsList from './ReportsList/ReporstList'
import Pag from './Pagination/Pagination'
import Filter from './Filter/Filter'

class SavedReports extends Component {
  state = {
    reports: [],
    filteredReports: [],
    tags: [],
    current: 1,
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('savedReports')) || []
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

  render() {
    const { state: { tags, filteredReports, current }, changeFilter, changeCurrentPage } = this
    return (
      <Fragment>
        <Filter tags={ tags } event={ changeFilter }/>
        <ReportsList arrReports={ filteredReports } current={ current }/>
        <Pag 
          total={ filteredReports.length }
          changeCurrent={ changeCurrentPage }
          current={ current }
        />
      </Fragment>
    )
  }
}

export default SavedReports