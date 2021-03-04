import React, { Fragment } from 'react'
import ReportsList from '../components/ReportsList/ReporstList'
import Pag from '../components/Pagination/Pagination'
import Filter from '../components/Filter/Filter'
// import { getReportsFromApi } from '../store/asyncActions'
import { useSelector, useDispatch } from 'react-redux'
// import { Button } from 'antd'


const Reports = () => {
  const state = useSelector(state => state.reports)
  const dispatch = useDispatch()

  const saveReport = (report) => {
    dispatch({ type: 'SAVE_REPORT', payload: report })
  }

  // const getReports = () => {
  //   dispatch(getReportsFromApi())
  // }

  const changeFilter = (val) => {
    dispatch({ type: 'FILTER_REPORTS', payload: val })
  }

  const changeCurrent = (current) => {
    dispatch({ type: 'CHANGE_CURRENT_PAGINATION', payload: current })
  }

  return (
      <Fragment>
        {/* <Button onClick={ getReports }>Get reports</Button> */}
        <Filter tags={ state.tags } event={ changeFilter }/>
        <ReportsList
          arrReports={ state.filteredReports }
          current={ state.current }
          saveRep={ saveReport }
        />
        <Pag 
          total={ state.filteredReports.length }
          changeCurrent={ changeCurrent }
          current={ state.current }
        />
      </Fragment>
    )

}

export default Reports