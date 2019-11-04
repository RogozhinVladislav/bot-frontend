import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'antd'

export default function Command() {
  let history = useHistory()

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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}
