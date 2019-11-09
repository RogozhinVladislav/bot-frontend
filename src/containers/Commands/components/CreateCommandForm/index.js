import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd'

function CreateCommandForm({ form, createCommand, command }) {
  const { getFieldDecorator, validateFields } = form

  const handleSubmit = async e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        createCommand(values)
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
