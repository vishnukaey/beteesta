import Login from './pages/login'
import Signup from './pages/signup'
import Home from './Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Signup />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
