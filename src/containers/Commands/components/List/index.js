import React, { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { List, Skeleton, Switch, Meta, Card, Icon, Avatar } from 'antd'

export default function CommandList({ commands }) {
  let { path, url } = useRouteMatch()
  let history = useHistory()
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
          onClick={() => {
            history.push(`${path}/${command._id}`)
          }}
        >
          <div>Команда: {command.trigger}</div>
          <div>Ответ: {command.answer}</div>
        </List.Item>
      )}
    />
  )
}
