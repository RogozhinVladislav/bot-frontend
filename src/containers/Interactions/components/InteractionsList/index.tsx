import React, { useState, useEffect } from 'react'
import { List, Skeleton, Switch, Card, Icon, Popconfirm } from 'antd'
import { IInteraction } from '@/typings/interactions'
import { useRouteMatch, useHistory } from 'react-router-dom'

export function InteractionsList({ interactions }:any) {

  let { path, url } = useRouteMatch()
  let history = useHistory()

  return (
    <List
      itemLayout="vertical"
      dataSource={interactions}
      renderItem={(interaction: IInteraction) => (
        <List.Item
          key={interaction._id}
          actions={[
            <Icon
              type="setting"
              key="setting"
              onClick={() => {
                history.push(`${path}/${interaction._id}`)
              }}
            />,
            <Icon
              type="edit"
              key="edit"
              onClick={() => {
                history.push(`${path}/${interaction._id}`)
              }}
            />,
            <Popconfirm
              title="Удалить выбранное взаимодействие?"
              onConfirm={() => {}}
              onCancel={() => {}}
              okText="Да"
              cancelText="Нет"
            >
              <Icon type="delete" key="delete" />
            </Popconfirm>,
          ]}
        >
          <div>Команда: {interaction.trigger}</div>
          <div>Ответ: {interaction.answer}</div>
        </List.Item>
      )}
    />
  )
}
