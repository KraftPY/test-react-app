import React, { FC } from 'react'
import './ReportItem.css'
import { Button, Card, Row, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IReport } from '../../interfaces'

interface IRepItemProps {
  report: IReport
}

const ReportItem:FC<IRepItemProps> = ({ report }) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const saveReport = () => {
    dispatch({ type: 'SAVE_REPORT', payload: report })
  }

  const openDetails = (report: IReport) => {
    Modal.info({
      title: report.title,
      content: (
        <div>
          <p><strong>Tags:</strong> {report.tags.reduce((a, b) => `${a}, ${b}`)}</p>
          <p>{report.description}</p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <Card title={ report.title } hoverable style={{ width: '1px solid red' }}>
      <p style={{ height: '2.5rem' }}><strong>Tags:</strong> { report.tags.reduce((a, b) => `${a}, ${b}`) }</p>
      <div className="desc">
        { report.description }
      </div>
      <Row justify="space-around" style={{ marginTop: '1rem' }}>
        <Button type="primary" onClick={ () => openDetails(report) }>Details</Button>
        <Button type="primary" disabled={ pathname !== '/' } onClick={ saveReport }>Save</Button>
      </Row>
    </Card>
  )
}

export default ReportItem