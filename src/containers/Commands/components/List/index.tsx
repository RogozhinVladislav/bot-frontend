import React, { useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { List, Icon, Popconfirm } from 'antd'
import { CommandsContext } from '@/contexts/commands-context'
import { ICommand } from '@/typings/commands'

export function CommandList() {
  let { path, url } = useRouteMatch()
  let history = useHistory()
  const { commands, deleteCommand } = useContext(CommandsContext)
  return (
    <List
      itemLayout="vertical"
      dataSource={commands}
      renderItem={(command: ICommand) => (
        <List.Item
          key={command._id}
          actions={[
            <Icon
              type="setting"
              key="setting"
              onClick={() => {
                history.push(`${path}/${command._id}`)
              }}
            />,
            <Icon
              type="edit"
              key="edit"
              onClick={() => {
                history.push(`${path}/${command._id}`)
              }}
            />,
            <Popconfirm
              title="Удалить выбранную команду?"
              onConfirm={() => deleteCommand(command._id)}
              onCancel={() => {}}
              okText="Да"
              cancelText="Нет"
            >
              <Icon type="delete" key="delete" />
            </Popconfirm>,
          ]}
        >
          <div>Команда: {command.trigger}</div>
          <div>Ответ: {command.answer}</div>
        </List.Item>
      )}
    />
  )
}
