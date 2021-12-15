import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './components/Routes'
import { Navbar,
         Footer
} from 'decentraland-ui'
import { store } from './modules/store'

import 'decentraland-ui/lib/styles.css'


require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <Router>
      <Routes />
    </Router>
    <Footer />
  </Provider>,
  document.getElementById('root')
)
