import React, { useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Modal, Button } from 'antd'

import { CommandForm } from '../CommandForm'
import { CommandsContext } from '@/contexts/commands-context'

import { ICommand } from '@/typings/commands';

export function Command() {
  const history = useHistory()
  const { commandId } = useParams()
  const [visible, setVisible] = useState()
  const { commands } = useContext(CommandsContext)

  const command: ICommand | undefined = commands.find((cmd: ICommand) => cmd._id === commandId)

  const handleOk = () => {
    setVisible(false)
  }

  const handleCancel = () => {
    history.goBack()
  }

  return (
    <Modal
      title="Команда"
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
      // okButtonProps={{ disabled: true }}
      // cancelButtonProps={{ disabled: true }}
    >
      <CommandForm command={command} handleOk={handleOk} />
    </Modal>
  )
}
