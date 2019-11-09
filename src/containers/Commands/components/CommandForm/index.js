import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd'

function CommandForm({ form, createCommand, updateCommand, command }) {
  const { getFieldDecorator, validateFields } = form

  const submit = () => {
    validateFields((err, values) => {
      if (!err) {
        if (command) {
          updateCommand({
            commandId: command._id,
            command: values,
          })
        } else {
          createCommand(values)
        }
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    submit();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('trigger', {
          initialValue: command && command.trigger,
          rules: [
            {
              required: true,
              message: 'Пожалуйста, введите команду',
            },
          ],
        })(<Input size="large" placeholder="Триггер" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('answer', {
          initialValue: command && command.answer,
          rules: [
            {
              required: true,
              message: 'Пожалуйста, введите ответ',
            },
          ],
        })(<Input size="large" placeholder="Ответ" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedCommandForm = Form.create({ name: 'CommandForm' })(CommandForm)

export default WrappedCommandForm
