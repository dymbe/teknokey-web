import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    }
    this.setIsAuthenticated = this.setIsAuthenticated.bind(this)
  }

  render () {
    const sharedProps = { ...this.state, setIsAuthenticated: this.setIsAuthenticated }

    return (
      <div className='App'>
        <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <ul className='navbar-nav mr-auto'>
                <li><Link to={'/'} className='nav-link'>Home</Link></li>
                <li><Link to={'/login'} className='nav-link'>Login</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path='/' component={(routeProps) => <Home {...routeProps} {...sharedProps} />} />
              <Route path='/login' component={(routeProps) => <Login {...routeProps} {...sharedProps} />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

  setIsAuthenticated (isAuthenticated) {
    this.setState({ isAuthenticated: isAuthenticated })
  }
}

export default App
