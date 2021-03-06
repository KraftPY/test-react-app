import React, { Fragment, useEffect, useState } from 'react'
import ReportsList from './ReporstList'
import Pag from './Pagination'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { concatTagsArrays } from '../services/reportService'
import { useLocation } from 'react-router-dom'


function Reports() {
  const { pathname } = useLocation()
  const { reports, sReports } = useSelector(state => state.reports)
  const arrReports = pathname === '/' ? reports : sReports
  const [ current, setCurrent ] = useState(1)
  const [ filReports, setFilReports ] = useState([])
  const [ tags, setTags ] = useState([])

  useEffect(() =>{
    setFilReports(() => arrReports)
    setTags(() => concatTagsArrays(arrReports))
    setCurrent(1)
  }, [ arrReports, pathname ])

  const changeFilter = (val) => {
    setFilReports(() =>{
      if (val) {
        return arrReports.filter( r => r.tags.includes(val))
      } else {
        return arrReports
      }
    })
    setCurrent(1)
  }

  return (
    <Fragment>
      <Filter tags={ tags } eventChange={ changeFilter }/>
      <ReportsList
        arrReports={ filReports }
        current={ current }
      />
      <Pag 
        total={ filReports.length }
        changeCurrent={ (cur) => setCurrent(() => cur) }
        current={ current }
      />
    </Fragment>
  )

}

export default Reports