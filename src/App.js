import React from 'react'
import ReactDOM from 'react-dom'
import BoilingVerdict from './boilingVerdict'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return <div>
      <BoilingVerdict />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App