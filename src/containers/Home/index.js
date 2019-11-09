import React from 'react'
import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Content, Footer, Sider } = Layout

import Header from '@/components/header'

import Commands from '../Commands'
import Interactions from '../Interactions'

import styles from './styles'

export default function Home() {
  let { path, url } = useRouteMatch()
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div css={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header />
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
    </Layout>
  )
}
