import React, {Component} from 'react'
import './App.css'
const url = "https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles"

class App extends Component {

  state = {
    name: '',
    counter: 0
  }

  componentDidMount = () => {
    this.setState({name: ''})
  }

  componentDidUpdate = async () => {
    const word = 'Hello World hello world.'
    const list = word.split('')

    if (word.length > this.state.counter) {
      await setTimeout(() => {
        const index = this.state.counter
        this.setState({name: this.state.name + list[index], counter: this.state.counter + 1})
      }, 300);
      
    } else {
      await setTimeout(() => {
        
      }, 1000);
      //window.open(url,"_self")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="image"></div>
          <h1>
          {this.state.name}
          </h1>
        </header>
      </div>
    )
  }
}

export default App
