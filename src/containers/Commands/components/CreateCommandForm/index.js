import React from 'react'
import http from '@/utils/http'
import { Form, Input, Button } from 'antd'

function CreateCommandForm({ form }) {
  const { getFieldDecorator, validateFields } = form

  const handleSubmit = async e => {
    e.preventDefault()
    validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const result = await http.post('/api/commands', values)
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('trigger')(<Input size="large" placeholder="Триггер" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('answer')(<Input size="large" placeholder="Ответ" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedCreateCommandForm = Form.create({ name: 'createCommandForm' })(CreateCommandForm)

export default WrappedCreateCommandForm
