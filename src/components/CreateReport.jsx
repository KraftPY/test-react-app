import React from 'react'
import { Form, Input, Button, Typography  } from 'antd'

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

function CreateReport() {
  const [form] = Form.useForm()

  const onFinish = ({ title, tags, description }) => {
    let parseTags = tags.replace(/ +/g, ' ').trim().split(/,|\s/)
    parseTags = parseTags.filter( t => t !== '')
    let saveReports = JSON.parse(localStorage.getItem('savedReports')) || []
    let id = 11
    let isNewId = false
    do {
      id++
      isNewId = !saveReports.find( r => r.id === id)
    } while (!isNewId)

    saveReports.push({ id, title, tags: parseTags, description})
    localStorage.setItem('savedReports', JSON.stringify(saveReports))
    
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      labelAlign="left"
      align="center"
      form={form}
    >
      <Title level={3} style={{ margin: '2% 0' }}>Create report</Title>
      <Form.Item
        name={['title']}
        label="Title"
        justify="center"
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
        justify="center"
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
        justify="center"
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