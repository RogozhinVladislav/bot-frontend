import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from '@/containers/App'
import mainStore from './stores/mainStore'
import CommandsStore from './stores/CommandsStore'

const stores = {
  mainStore,
  CommandsStore,
  CommandsStore: mainStore.CommandsStore,
}

import 'antd/dist/antd.css'
import './styles/index.css'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.querySelector('#root'),
)
