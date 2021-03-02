import React, { Component, Fragment } from 'react'
import ReportsList from '../components/ReportsList/ReporstList'
import Pag from '../components/Pagination/Pagination'
import Filter from '../components/Filter/Filter'

class MainLayout extends Component {
  state = {
    reports: [],
    filteredReports: [],
    tags: [],
    current: 1
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/FrizenVladyslav/vue-test-task/reports')
      .then( res => res.json())
      .then( data => {
        const tagsTemp = this.getTags(data)
        this.setState({
          reports: data,
          filteredReports: data,
          tags: tagsTemp
        })
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
    if (val) {
      this.setState( state => ({
        filteredReports: state.reports.filter( r => r.tags.includes(val))
      }))
    } else {
      this.setState( state => ({
        filteredReports: state.reports
      }))
    }
    this.setState({ current: 1 })
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

export default MainLayout