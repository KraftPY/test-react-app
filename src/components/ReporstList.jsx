import React from 'react'
import ReportItem from './ReportItem/ReportItem'
import { Col, Row } from 'antd'

export default function ReportsList({ arrReports, current }) {
  return (
    <Row justify="center" gutter={[20, 20]} style={{ margin: "0"}}>
      { arrReports.map( (el, i) => {
        if (i >= (current * 5 - 5) && i < (current * 5)) {
          return (
            <Col xs={20} sm={10} md={7} lg={7} xl={4} key={el.id}>
              <ReportItem report={ el }/>
            </Col>
          )
        }
        return false
      })}
    </Row>
  )
}