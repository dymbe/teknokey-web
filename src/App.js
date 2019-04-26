import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FacebookLogin from 'react-facebook-login'
import config from './config'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
              Learn React
          </a>
          <FacebookLogin
            appId={config.fbAppId}
            autoLoad
            fields='name,email,picture'
            onClick={(e) => console.log(e)}
            callback={(e) => console.log(e)} />
        </header>
      </div>
    )
  }
}

export default App
