import React from 'react'
import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer } = Layout

import Commands from '../Commands'
import Interactions from '../Interactions'

export default function Home() {
  let { path, url } = useRouteMatch()
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Icon type="home" />
            Главная
            <Link to="/" />
          </Menu.Item>

          <Menu.Item key="2">
            <Icon type="snippets" />
            Команды
            <Link to="/commands" />
          </Menu.Item>

          <Menu.Item key="3">
            <Icon type="interaction" />
            Взаимодействия
            <Link to="/interactions" />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Switch>
            <Route path="/commands" component={Commands} />
            <Route path="/interactions" component={Interactions} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
