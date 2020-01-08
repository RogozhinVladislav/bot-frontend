import React, { useState, useEffect } from 'react'
import { List, Skeleton, Switch, Card, Icon } from 'antd'

export default function CommandList({ commands }:any) {
  return (
    <List
      itemLayout="vertical"
      dataSource={commands}
      renderItem={(command:any) => (
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
