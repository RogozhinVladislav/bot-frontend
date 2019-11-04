import React, { useState, useEffect } from 'react'
import { List, Skeleton, Switch, Meta, Card, Icon, Avatar } from 'antd'

export default function CommandList({ commands }) {
  return (
    <List
      itemLayout="vertical"
      dataSource={commands}
      renderItem={command => (
        <List.Item
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <div>Команда: {command.trigger}</div>
          <div>Ответ: {command.answer}</div>
        </List.Item>
      )}
    />
  )
}
