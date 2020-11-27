import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './boilingVerdict'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return <div>
      <Calculator />
    </div>
  }
}

export default App