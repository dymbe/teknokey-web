import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor (props) {
    super(props)
    this.logIn = this.logIn.bind(this)
    this.fbResponse = this.fbResponse.bind(this)
  }

  render () {
    const { isAuthenticated } = this.props

    if (isAuthenticated) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <button onClick={this.logIn}>Login</button>
        <FacebookLogin
          appId={process.env.REACT_APP_FB_APP_ID}
          autoLoad
          fields='name,email,picture'
          callback={this.fbResponse} />
      </div>
    )
  }

  logIn () {
    this.props.setIsAuthenticated(true)
  }

  fbResponse (res) {
    console.log(res)
    this.setState({
      isAuthenticated: true,
      user: { name: res.name, imageUrl: res.picture.data.url },
      token: res.accessToken
    })
  }
}

export default Login
