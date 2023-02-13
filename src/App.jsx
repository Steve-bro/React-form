import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './component/form'

function App() {
  console.log('App: re-rendered');

  return (
    <div className="app">
      <Form></Form>
    </div>
  )
}

export default App
