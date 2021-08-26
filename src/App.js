import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ResetScroll } from './components'
import Home from './views/Home'
import Congratulations from './views/Congratulations'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <ResetScroll />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/congratulations'>
            <Congratulations />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App
