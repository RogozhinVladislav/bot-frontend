import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from '@/containers/App'

import 'antd/dist/antd.css'
import './styles/index.css'

ReactDOM.render(<App />, document.querySelector('#root'))
