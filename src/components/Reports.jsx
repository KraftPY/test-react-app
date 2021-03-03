import React, { Component, Fragment } from 'react'
import ReportsList from '../components/ReportsList/ReporstList'
// import Pag from '../components/Pagination/Pagination'
// import Filter from '../components/Filter/Filter'
// import { connect } from 'react-redux'
// import { getReportsFromApi } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

// const selectState = state => state


const Reports = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(state)

  const saveReport = (ev) => {
    console.log(ev)
  }

  const getReports = () =>{
    dispatch({ type: 'REPORTS_FROM_API' })
  }

  return (
      <Fragment>
        <Button onClick={ getReports }>Get reports</Button>
        {/* <Filter tags={ tags } event={ changeFilter }/> */}
        <ReportsList
          arrReports={ state.reports }
          current={ 1 }
          saveRep={ saveReport }
        />
        {/* <Pag 
          total={ filteredReports.length }
          changeCurrent={ changeCurrentPage }
          current={ current }
        /> */}
      </Fragment>
    )

}

// class Reports extends Component {
//   // state = {
//   //   reports: [],
//   //   filteredReports: [],
//   //   tags: [],
//   //   current: 1,
//   // }



//   componentDidMount() {
//     // const data = await getReports()
//     // const tagsTemp = this.getTags(data)
//     // this.setState({
//     //   reports: data,
//     //   filteredReports: data,
//     //   tags: tagsTemp,
//     // })
    
    
//     // this.props.getReportsFromApi()
//   }

//   getTags(arr) {
//     const arrTags = []
//       arr.forEach( el => {
//         el.tags.forEach( t => arrTags.push(t))
//       })
//       return [...new Set(arrTags)]
//   }

//   changeFilter = val => {
//     const reports = this.state.reports
//     const filteredReports = val ? reports.filter( r => r.tags.includes(val)) : reports
//     this.setState({ 
//       current: 1,
//       filteredReports
//     })
//   }

//   changeCurrentPage = current => {
//     this.setState({ current })
//   }

//   saveReport = report => {
//     let saveReports = JSON.parse(localStorage.getItem('savedReports')) || []
//     if (!saveReports.find( r => r.id === report.id)) {
//       saveReports.push(report)
//       localStorage.setItem('savedReports', JSON.stringify(saveReports))
//     }
//   }

//   render() {
//     console.log(this.props);
//     // const { state: { tags, filteredReports, current }, changeFilter, changeCurrentPage, saveReport } = this
    // return (
    //   <Fragment>
    //     {/* <Filter tags={ tags } event={ changeFilter }/> */}
    //     <ReportsList
    //       arrReports={ this.props.reports }
    //       current={ 1 }
    //       saveRep={ this.saveReport }
    //     />
    //     {/* <Pag 
    //       total={ filteredReports.length }
    //       changeCurrent={ changeCurrentPage }
    //       current={ current }
    //     /> */}
    //   </Fragment>
    // )
//   }
// }

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     reports: state.reports,
//     tags: state.tags,
//     current: state.current,
//   }
// }

// const mapDispathToProps = {
//   getReportsFromApi
// }

// export default connect(mapStateToProps, mapDispathToProps)(Reports)

export default Reports