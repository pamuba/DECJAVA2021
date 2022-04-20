import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
 
  render() {
    // const { count } = this.state
    const {count, incrementCount, name } = this.props
    return (
      <div>
          <button onClick={incrementCount}>{name} Clicked {count} Times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)