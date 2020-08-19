import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Congratulations from './views/Congratulations'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/congratulations'>
          <Congratulations />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
