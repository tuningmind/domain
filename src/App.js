import React, { Component } from 'react'
import './App.css'
import A_tags from './components/A-tags.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      link_clicked: link_clicked
    }

    render() {
      let link = this.props.link
      return (
        <div className='App'>
          <main className='row-between wrap'>
            <div name="typewriter"  className='typerwriter-animation'>
              <div className='header'>tuningmind.net</div>
            </div>
            <div className='column-left'>
              <A_tags {this.state.link_clicked}>
            </div>
          </main>
        </div>
      )
    }
  }
}

export default App
