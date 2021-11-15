import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/NearApp'
import { initContract } from './utils'

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)