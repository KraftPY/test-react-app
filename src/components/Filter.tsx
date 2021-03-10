import React, { FC, useEffect } from 'react'
import { Select, Divider, Form } from 'antd'
import { useLocation } from 'react-router-dom'

interface IFilterProps {
  tags: string[],
  eventChange(val: string): void
}

const Filter:FC<IFilterProps> = ({ tags, eventChange }) => {
  const [form] = Form.useForm()
  const { pathname } = useLocation()

  useEffect(() =>{
    form.resetFields(['select'])
  }, [ pathname ])

  return (
    <>
      <Form form={ form }>
        <Form.Item name={['select']}>
          <Select 
            style={{ width: 200, margin: '2rem 12% 0' }}
            onChange={eventChange}
            placeholder="Select a person"
            allowClear={true}
          >
            { tags.map( ( t,i ) => {
              return <Select.Option value={t} key={i}>{t}</Select.Option>
            })}
          </Select>
        </Form.Item>
      </Form>
      <Divider/>
    </>
  )
}

export default Filter