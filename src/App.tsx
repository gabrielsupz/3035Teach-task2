import React from 'react'
import logo from './logo.svg'
import './styles/App.css'
import { Table } from './components/Table'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Table task="firstTask" />
      <Table task="secondTask" />
    </div>
  )
}

export default App
