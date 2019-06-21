import React from 'react'
import './App.css'
import { delay } from 'q';
const url = "https://capitol-lueneburg.de/restaurant-fruehstueck-cocktails/"

class App extends React.Component {

  state = {
    name: ''
  }

  componentDidMount = async () => {
    const word = 'Happy Birthday Morl!\n Mein Geschenk: Frühstücken :)\n Und wo?...'
    const list = word.split('')

    for (let i = 0; i < word.length; i++) {
      if (list[i - 1] === '!' || list[i - 1] === ')' || list[i - 1] === '?') {
        await delay(1200)
        this.setState({name: this.state.name + list[i]})
       
      } else {
        await delay(150)
        this.setState({name: this.state.name + list[i]})
      }
      
    }
    await window.open(url,"_self")
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
