import React from 'react'
import http from '@/utils/http'
import { Form, Input, Button } from 'antd'

function _CreateInteractionForm({ form }:any) {
  const { getFieldDecorator, validateFields } = form

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    validateFields(async (err:any, values:any) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const result = await http.post('/interactions', values)
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <div>$ - это указатель на пользователя для взамодействия</div>
        <div>Пример: "ляпоса $"</div>
        {getFieldDecorator('trigger')(<Input size="large" placeholder="Триггер" />)}
      </Form.Item>
      <Form.Item>
        <div>$sender - указатель на отправителя</div>
        <div>$target - указатель на пользователя-цель</div>
        <div>$random - указатель на случайного пользователя из двух</div>
        <div>Пример: "$sender дал ляпоса $target"</div>
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



export const CreateInteractionForm = Form.create({
  name: 'сreateInteractionForm',
})(_CreateInteractionForm)
