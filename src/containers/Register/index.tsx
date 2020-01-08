import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox, Typography, Tooltip } from 'antd'
const { Title } = Typography
import { FormComponentProps } from 'antd/lib/form'
import { useStores, useMessage } from '@/hooks'
import styles from './styles'
import { Link } from 'react-router-dom'

interface IRegisterProps extends FormComponentProps {}

const _Register = observer(({ form }: IRegisterProps) => {
  const history = useHistory()
  const { authStore } = useStores()
  const { loading, error, successMessage } = authStore
  const { getFieldDecorator, validateFields } = form
  const [confirmDirty, setConfirmDirty] = useState<Boolean>(false)
  const showMessage = useMessage()

  useEffect(() => {
    showMessage('error', error)
  }, [error])

  useEffect(() => {
    showMessage('success', successMessage)
  }, [successMessage])

  const submit = () => {
    validateFields(async (err, values): Promise<any> => {
      if (!err) {
        const { confirm, ...restValues } = values
        authStore.register({ values: restValues, onSuccess: () => {
          history.push("/login");
        } })
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<any>): void => {
    e.preventDefault()
    submit()
  }

  const validateToNextPassword = (rule:any, value:string, callback:Function) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  const handleConfirmBlur = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget
    setConfirmDirty(confirmDirty || !!value)
  }

  const compareToFirstPassword = (rule:any, value:string, callback:Function) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Введённые пароли не совпадают!')
    } else {
      callback()
    }
  }

  return (
    <div css={styles.page}>
      <Title level={2}>Регистрация</Title>
      <Form onSubmit={handleSubmit} css={styles.form}>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Невалидный E-mail!',
              },
              {
                required: true,
                message: 'Пожалуйста, укажите E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Пароль" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Подтверждение пароля" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Пожалуйста, подтвердите Ваш пароль!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={e => handleConfirmBlur(e)} />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Имя пользователя&nbsp;
              <Tooltip title="Имя пользователя в системе">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Пожалуйста, введите имя пользователя!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Запомнить</Checkbox>)}
          <Button type="primary" htmlType="submit" css={styles.submitButton} disabled={loading}>
            Зарегистрироваться
          </Button>
          <div>
            Или <Link to="login">войти!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
})

export const Register = Form.create({ name: 'Register' })(_Register)
