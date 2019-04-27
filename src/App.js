import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FacebookLogin from 'react-facebook-login'

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
            appId={process.env.REACT_APP_FB_APP_ID}
            autoLoad
            fields='name,email,picture'
            onClick={() => console.log(process.env.REACT_APP_FB_APP_ID)}
            callback={(e) => console.log(e)} />
        </header>
      </div>
    )
  }
}

export default App
