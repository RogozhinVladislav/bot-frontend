import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox, Typography, Tooltip } from 'antd'
const { Title } = Typography
import { useStores } from '@/hooks'
import styles from './styles'

const Register = observer(({ form }) => {
  const { authStore } = useStores()
  const { loading } = authStore
  const { getFieldDecorator, validateFields } = form
  const [setConfirmDirty, confirmDirty] = useState(false)

  const submit = () => {
    validateFields((err, values) => {
      if (!err) {
        authStore.register(values)
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    submit()
  }

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value )
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

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
          })(<Input.Password onBlur={(e) => handleConfirmBlur(e)} />)}
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
            rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя!', whitespace: true }],
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
            Или <a href="">войти!</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
});

const WrappedRegister = Form.create({ name: 'Register' })(Register)

export default WrappedRegister
