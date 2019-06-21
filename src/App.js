import React, {Component} from 'react'
import './App.css'
const url = "https://capitol-lueneburg.de/restaurant-fruehstueck-cocktails/"

class App extends Component {

  state = {
    name: '',
    counter: 0
  }

  componentDidMount = () => {
    this.setState({name: ''})
  }

  componentDidUpdate = async () => {
    const word = 'Happy Birthday Morl!\n Mein Geschenk: Frühstücken :)\n Und wo?...'
    const list = word.split('')

    if (word.length > this.state.counter) {
      const index = this.state.counter
      if (list[index - 1] === '!' || list[index - 1] === ')' || list[index - 1] === '?') {
        await setTimeout(() => {
          this.setState({name: this.state.name + list[index], counter: this.state.counter + 1})
        }, 1200);
      } else {
        await setTimeout(() => {
          this.setState({name: this.state.name + list[index], counter: this.state.counter + 1})
        }, 150);
      }
      
    } else {
      await setTimeout(() => {
        
      }, 1000);
      window.open(url,"_self")
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
