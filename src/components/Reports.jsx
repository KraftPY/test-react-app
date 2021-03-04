import React, { Fragment } from 'react'
import ReportsList from '../components/ReportsList/ReporstList'
import Pag from '../components/Pagination/Pagination'
import Filter from '../components/Filter/Filter'
import { useSelector, useDispatch } from 'react-redux'


function Reports() {
  const { filteredReports, tags, current } = useSelector(state => state.reports)
  const dispatch = useDispatch()

  const saveReport = (report) => {
    dispatch({ type: 'SAVE_REPORT', payload: report })
  }

  const changeFilter = (val) => {
    dispatch({ type: 'FILTER_REPORTS', payload: { isSaved: false, val } })
  }

  const changeCurrent = (current) => {
    dispatch({ type: 'CHANGE_CURRENT_PAGINATION', payload: current })
  }

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
          changeCurrent={ changeCurrent }
          current={ current }
        />
      </Fragment>
    )

}

export default Reports