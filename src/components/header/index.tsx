import React, { Fragment } from 'react'
import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom'
import { PageHeader, Menu, Avatar } from 'antd'

const { SubMenu } = Menu

export const Header: React.FunctionComponent = () => {
  let { path, url } = useRouteMatch()
  return (
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
      }}
      onBack={() => window.history.back()}
      title="Title123"
      subTitle="This is a subtitle"
      extra={[<Avatar key={1} size="large" icon="user"></Avatar>]}
    ></PageHeader>
  )
}
