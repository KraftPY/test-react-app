import React from 'react'
import { Form, Input, Button, Typography  } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { createNewId, parseTags } from '../services/reportService'
import { RootState } from '../store/rootReducer'
import { IReport } from '../store/reports/types'

const { Title } = Typography
const layout = {
  labelCol: {
    xl: 2,
    md: 3,
  },
  wrapperCol: {
    xl: 5,
    md: 7,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
};


/* eslint-enable no-template-curly-in-string */

const CreateReport = () => {
  const { reports, sReports } = useSelector((state: RootState) => state.reports)
  const dispatch = useDispatch();
  const [form] = Form.useForm()

  const onFinish = ({ title, tags, description }: any) => {
    const newReport: IReport = { 
      id: createNewId(reports, sReports),
      title,
      tags: parseTags(tags),
      description
    }

    dispatch({ type: 'SAVE_REPORT', payload: newReport })
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      labelAlign="left"
      style={{ textAlign: 'center' }}
      form={form}
      size="middle"
    >
      <Title level={3} style={{ margin: '2% 0' }}>Create report</Title>
      <Form.Item
        name={['title']}
        label="Title"
        style={{ justifyContent: 'center' }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['tags']}
        label="Tags"
        style={{ justifyContent: 'center' }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name={[ 'description']}
        label="Description"
        style={{ justifyContent: 'center' }}
        rules={[
          {
            required: true,
          },
        ]}>
        
        <Input.TextArea />
      </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
    </Form>
  );
};

export default CreateReport