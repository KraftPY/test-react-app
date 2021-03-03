import React from 'react'
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 5,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
};
/* eslint-enable no-template-curly-in-string */

function CreateReport() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{ marginTop: '4%', border: '1px solid red'}}
      labelAlign="left"
    >
      <Form.Item
        style={{border: '1px solid green'}}
        name={['report', 'title']}
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
        style={{border: '1px solid green'}}
        name={['report', 'tags']}
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
        style={{border: '1px solid green'}}
        name={['report', 'description']}
        label="Description"
        justify="center"
        rules={[
          {
            required: true,
          },
        ]}>
        
        <Input.TextArea />
      </Form.Item>
      <Form.Item style={{border: '1px solid green', padding: 0}} justify="end">
        <Button type="primary" htmlType="submit" style={{border: '1px solid blue', margin: 0}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateReport