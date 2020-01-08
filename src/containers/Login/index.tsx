import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, Typography  } from 'antd'
const { Title } = Typography;
import { FormComponentProps } from 'antd/lib/form'

import { useStores } from '@/hooks'
import { AuthContext } from '@/contexts/auth-context'

import styles from './styles'

interface ILoginProps extends FormComponentProps {}

function _Login({ form }: ILoginProps) {
  const { authStore } = useStores()
  const auth = useContext(AuthContext)
  const { loading } = authStore;
  const { getFieldDecorator, validateFields } = form

  const submit = () => {
    validateFields(async (err, values): Promise<any> => {
      if (!err) {
        authStore.login({values, authLogin: auth.login })
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<any>): void => {
    e.preventDefault()
    submit()
  }

  return (
    <div css={styles.page}>
      <Title level={2}>Авторизация</Title>
      <Form onSubmit={handleSubmit} css={styles.form}>
        <Form.Item>
          {getFieldDecorator('email', {
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
            Или <Link to="/register">зарегистрироваться!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export const Login = Form.create({ name: 'Login' })(_Login)
