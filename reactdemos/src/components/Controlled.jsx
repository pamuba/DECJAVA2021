import React, { Component } from 'react'

class Controlled extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username : 'JOHN'
    }
  }
  handleUserName = (event) => {
        this.setState({
            username : event.target.value
        })
  }
  render() {
    return (
      <form>
          <div>
              <label>Username</label>
              <input type="text" value={this.state.username} onChange={this.handleUserName}/>
          </div>
      </form>
    )
  }
}

export default Controlled