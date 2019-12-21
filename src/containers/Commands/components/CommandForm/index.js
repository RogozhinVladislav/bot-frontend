import React, { useState } from 'react'
import { Form, Input, Button, Upload, Icon } from 'antd'

const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg']
const allowedAudioTypes = ['audio/mp3']

function CommandForm({ form, createCommand, updateCommand, command }) {
  const { getFieldDecorator, validateFields } = form
  const [fileList, setFileList] = useState([])

  const submit = () => {
    validateFields((err, values) => {
      if (!err) {
        if (command) {
          updateCommand({
            commandId: command._id,
            command: values,
          })
        } else {
          const formData = new FormData()
          fileList.forEach(file => {
            if (allowedImageTypes.includes(file.type)) {
              formData.append('image', file)
            } else if (allowedAudioTypes.includes(file.type)) {
              formData.append('audio', file)
            }
          })
          for ( const key in values ) {
            formData.append(key, values[key]);
          }
          createCommand(formData)
        }
      }
    })
  }

  const uploadProps = {
    onRemove: file => {
      setFileList(state => {
        {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList,
          }
        }
      })
    },
    beforeUpload: file => {
      setFileList(state => {
        return [...state, file]
      })
      return false
    },
    fileList,
  }

  const handleSubmit = e => {
    e.preventDefault()
    submit()
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
        <Upload {...uploadProps}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
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
