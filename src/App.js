import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main className='row-between wrap'>
          <div name="typewriter"  className='typerwriter-animation'>
			<div className='header'>tuningmind.net</div>
          </div>
          <div className='column-left'>
			<a href='https://lunaminds.gitlab.io/greenfield-education//'>greenfield education</a>
			<a href='https://tuningmind.github.io/carpe_diem/'>carpe diem</a>
			<a href='https://tuningmind.github.io/electrix/'>electrix salon</a>
			<a href='https://tuningmind-tiy.github.io/wk-01-betty/'>betty's</a>
			<a href='https://tuningmind-tiy.github.io/hangman/'>hangman</a>
			<a href='https://tuningmind-tiy.github.io/tic-tac-toe/'>tic-tac-toe</a>
			<a href='https://tuningmind-tiy.github.io/blog-fish/'>blogfish</a>
			<a href='https://tuningmind.github.io/mazeball/'>mazeball</a>
		  </div>
        </main>
      </div>
    );
  }
}

export default App
