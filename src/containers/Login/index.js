import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Typography  } from 'antd'

const { Title } = Typography;

import { useStores } from '@/hooks'

import styles from './styles'

function Login({ form }) {
  const { authStore } = useStores()
  const { loading } = authStore;
  const { getFieldDecorator, validateFields } = form

  const submit = () => {
    validateFields((err, values) => {
      if (!err) {
        authStore.login(values)
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    submit()
  }

  return (
    <div css={styles.page}>
      <Title level={2}>Авторизация</Title>
      <Form onSubmit={handleSubmit} css={styles.form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Имя пользователя"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Пожалуйста, введите пароль' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Запомнить</Checkbox>)}
          <a css={styles.forgotPassword} href="">
            Забыли пароль?
          </a>
          <Button type="primary" htmlType="submit" css={styles.submitButton} disabled={loading}>
            Войти
          </Button>
          <div>
            Или <a href="">зарегистрироваться!</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

const WrappedLogin = Form.create({ name: 'Login' })(Login)

export default WrappedLogin
