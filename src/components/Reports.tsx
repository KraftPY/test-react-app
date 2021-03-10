import React, { useEffect, useState } from 'react'
import ReportsList from './ReporstList'
import Pag from './Pagination'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { concatTagsArrays } from '../services/reportService'
import { useLocation } from 'react-router-dom'
import { IReport } from '../interfaces'
import { RootState } from '../store/rootReducer'

const Reports = () => {
  const { pathname } = useLocation()
  const { reports, sReports } = useSelector((state: RootState) => state.reports)
  const arrReports = pathname === '/' ? reports : sReports
  const [ current, setCurrent ] = useState(1)
  const [ filReports, setFilReports ] = useState<IReport[]>([])
  const [ tags, setTags ] = useState<string[]>([])

  useEffect(() =>{
    setFilReports(() => arrReports)
    setTags(() => concatTagsArrays(arrReports))
    setCurrent(1)
  }, [ arrReports, pathname ])

  const changeFilter = (val: string) => {
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
    <>
      <Filter tags={ tags } eventChange={ changeFilter }/>
      <ReportsList
        arrReports={ filReports }
        current={ current }
      />
      <Pag 
        total={ filReports.length }
        changeCurrent={ (cur: number) => setCurrent(() => cur) }
        current={ current }
      />
    </>
  )

}

export default Reports