import React, { useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Modal, Button } from 'antd'

import CommandForm from '../CommandForm'
import { CommandsContext } from '@/contexts'

export default function Command() {
  const history = useHistory()
  const { commandId } = useParams()
  const [visible, setVisible] = useState()
  const { commands, updateCommand }:any = useContext(CommandsContext)

  const command = commands.find((cmd:any) => cmd._id === commandId)

  const handleOk = (e:any) => {
    setVisible(false)
  }

  const handleCancel = (e:any) => {
    // history.push("/commands");
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
