import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Modal, Button } from 'antd'

import CommandForm from '../CommandForm'

export default function Command({ commands, updateCommand }) {
  const history = useHistory()
  const { commandId } = useParams()
  const [visible, setVisible] = useState()

  const command = commands.find(cmd => cmd._id === commandId)

  const handleOk = e => {
    setVisible(false)
  }

  const handleCancel = e => {
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
      <CommandForm updateCommand={updateCommand} command={command} handleOk={handleOk} />
    </Modal>
  )
}
