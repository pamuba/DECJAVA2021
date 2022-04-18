import React, { Component } from 'react'

class Controlled extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username : '',
       topics:'angular'
    }
  }
  handleUserName = (event) => {
        this.setState({
            username : event.target.value
        }) 
  }
  handleTopic = (event) => {
        this.setState({
            topics : event.target.value
        }) 
  }
  handleSubmit = (event) => {
       alert(`${this.state.username} ${this.state.topics}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>Username</label>
              <input type="text" value={this.state.username} onChange={this.handleUserName}/>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topics} onChange={this.handleTopic}>
              <option value="React">React</option>
              <option value="angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>

      </form>
    )
  }
}

export default Controlled