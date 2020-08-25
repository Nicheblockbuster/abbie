import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './views/Home'
import Congratulations from './views/Congratulations'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <ScrollToTop />
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
