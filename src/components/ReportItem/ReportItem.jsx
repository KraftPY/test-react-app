import React from 'react'
import './ReportItem.css'
import { Button, Card, Row } from 'antd'

export default function ReportItem({ report }) {
  return (
    <Card title={ report.title } hoverable style={{width: '1px solid red'}}>
      <p style={{ height: '2.5rem' }}><strong>Tags:</strong> { report.tags.reduce((a, b) => `${a}, ${b}`) }</p>
      <div className="desc">
        { report.description }
      </div>
      <Row justify="space-around" style={{marginTop: '1rem'}}>
        <Button type="primary">Details</Button>
        <Button type="primary">Save</Button>
      </Row>
    </Card>
  )
}
