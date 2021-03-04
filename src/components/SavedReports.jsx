import React, { Fragment } from 'react'
import ReportsList from './ReportsList/ReporstList'
import Pag from './Pagination/Pagination'
import Filter from './Filter/Filter'
import { useSelector, useDispatch } from 'react-redux'

function SavedReports() {
  const { sFilteredReports, sTags, current } = useSelector(state => state.reports)
  const dispatch = useDispatch()

  const changeFilter = (val) => {
    dispatch({ type: 'FILTER_REPORTS', payload: {isSaved: true, val} })
  }

  const changeCurrent = (current) => {
    dispatch({ type: 'CHANGE_CURRENT_PAGINATION', payload: current })
  }

  return (
    <Fragment>
      <Filter tags={ sTags } event={ changeFilter }/>
      <ReportsList arrReports={ sFilteredReports } current={ current }/>
      <Pag 
        total={ sFilteredReports.length }
        changeCurrent={ changeCurrent }
        current={ current }
      />
    </Fragment>
  )
}

export default SavedReports