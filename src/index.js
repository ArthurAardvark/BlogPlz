import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.module.css'
import Image02 from './teleporthq/pages/image02'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route exact component={Image02} path="/" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
