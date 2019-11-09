import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Modal, Button } from 'antd'

import CreateCommandForm from '../CreateCommandForm'

export default function Command({ commands }) {
  const history = useHistory()
  const { id } = useParams()

  const command = commands.find(cmd => cmd._id === Number(id))

  const handleOk = e => {
    console.log(e)
    setVisible(false)
  }

  const handleCancel = e => {
    // history.push("/commands");
    history.goBack()
  }

  return (
    <Modal
      title="Basic Modal"
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
      // okButtonProps={{ disabled: true }}
      // cancelButtonProps={{ disabled: true }}
    >
      <CreateCommandForm createCommand={store.createCommand} command={command} />
    </Modal>
  )
}
