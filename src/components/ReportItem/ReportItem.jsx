import React from 'react'
import './ReportItem.css'
import { Button, Card, Row, Modal } from 'antd'

export default function ReportItem({ report, saveRep }) {
  const openDetails = (report) => {
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
        <Button type="primary" disabled={ saveRep === null } onClick={ () => saveRep(report) }>Save</Button>
      </Row>
    </Card>
  )
}
