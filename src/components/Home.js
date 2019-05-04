import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  render () {
    const { isAuthenticated, location } = this.props

    if (!isAuthenticated && location.pathname !== '/login') {
      return <Redirect to='/login' />
    }

    return (
      <div>
        Du er logget inn tror jeg
      </div>
    )
  }
}

export default Home
