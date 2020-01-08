import React, { useState, useContext } from 'react'
import { Form, Input, Button, Upload, Icon } from 'antd'
import { CommandsContext, ICommandContext } from '@/contexts/commands-context'

import { FormComponentProps } from 'antd/lib/form'
import { ICommand } from '@/typings/commands';
import { UploadFile } from 'antd/lib/upload/interface';

interface ICommandFormProps extends FormComponentProps {
  command: ICommand
}

const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg']
const allowedAudioTypes = ['audio/mp3']

function _CommandForm({ form, command }: ICommandFormProps) {
  const { getFieldDecorator, validateFields } = form
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { createCommand, updateCommand } = useContext<ICommandContext>(CommandsContext)

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
          fileList.forEach((file: any) => {
            if (allowedImageTypes.includes(file.type)) {
              formData.append('image', file.originFileObj)
            } else if (allowedAudioTypes.includes(file.type)) {
              formData.append('audio', file.originFileObj)
            }
          })
          for (const key in values) {
            formData.append(key, values[key])
          }
          createCommand(formData)
        }
      }
    })
  }

  const uploadProps = {
    onRemove: (file: UploadFile) => {
      setFileList((prevFileList: UploadFile[]) => {
        {
          const index = prevFileList.indexOf(file)
          const newFileList: UploadFile[] = prevFileList.slice()
          newFileList.splice(index, 1)
          return newFileList
        }
      })
    },
    beforeUpload: (file: UploadFile) => {
      setFileList((prevFileList: UploadFile[]) => {
        return [...prevFileList, file]
      })
      return false
    },
    fileList,
  }

  const handleSubmit = (e: React.FormEvent) => {
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



export const CommandForm: any = Form.create({ name: 'CommandForm' })(_CommandForm)
