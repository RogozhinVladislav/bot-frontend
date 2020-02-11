import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd'

import { FormComponentProps } from 'antd/lib/form';
import { IInteraction } from '@/typings/interactions';
import { InteractionsContext, IInteractionContext } from '@/contexts/interactions-context';

interface ICreateInteractionFormProps extends FormComponentProps {
  interaction: IInteraction
}

function _CreateInteractionForm({ form, interaction }:ICreateInteractionFormProps) {
  const { getFieldDecorator, validateFields } = form
  const { createInteraction, updateInteraction } = useContext<IInteractionContext>(InteractionsContext)

  const submit = () => {
    validateFields((err, values) => {
      debugger
      if (!err) {
        if (interaction) {

        } else {
          createInteraction(values)
        }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <div>$ - это указатель на пользователя для взамодействия, в этом месте нужно будет указать никнейм пользователя с помощью @</div>
        <div>Пример фразы: "ляпоса $"</div>
        {getFieldDecorator('trigger')(<Input size="large" placeholder="Фраза триггер" />)}
      </Form.Item>
      <Form.Item>
        <div>$sender - указатель на отправителя (подставится никнейм отправителя)</div>
        <div>$target - указатель на пользователя-цель (подставится никнейм пользователя, на которого направлено действие)</div>
        <div>$random - указатель на случайного пользователя из двух (случайным образом будет выбран пользователь из отправителя, либо из цели)</div>
        <div>Пример: "$sender дал ляпоса $target"</div>
        {getFieldDecorator('answer')(<Input size="large" placeholder="Ответная фраза" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

_CreateInteractionForm.displayName = 'CreateInteractionForm'

export const CreateInteractionForm = Form.create({
  name: 'сreateInteractionForm',
})(_CreateInteractionForm)
