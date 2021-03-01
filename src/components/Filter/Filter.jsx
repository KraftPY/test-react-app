import React, { Fragment } from 'react'
import { Select, Divider } from 'antd'

const { Option } = Select

export default function Filter({ tags, event }) {
  return (
    <Fragment>
      <Select
        showSearch
        style={{ width: 200, margin: '2rem 12% 0' }}
        placeholder="Select a person"
        onChange={event}
        allowClear={true}
      >
        { tags.map( ( t,i ) => {
          return <Option value={t} key={i}>{t}</Option>
        })}
      </Select>
      <Divider />
    </Fragment>
  )
}