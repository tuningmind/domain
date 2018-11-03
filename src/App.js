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
            <a href=''>slcc</a>
            <a href=''>web work</a>
			<a href='https://tuningmind-tiy.github.io/blog-fish/'>blogfish</a>
		  </div>
        </main>
      </div>
    );
  }
}

export default App
