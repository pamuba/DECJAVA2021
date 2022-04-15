import React, { Component } from 'react'

class Welcome extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Welcome John"
    }
  }

  changeMessage = () => {
    console.log("Inside fn")
    this.setState({
      message: "New Message"
    })
  }
  
  render() {
    return (
        <>
            <div>Hello {this.props.name}</div>
            <div>State: {this.state.message}</div>
            <button onClick={()=>this.changeMessage()}>CLICK</button>
        </>
    )
  }
}

export default Welcome