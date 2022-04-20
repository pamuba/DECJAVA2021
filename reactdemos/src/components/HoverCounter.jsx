import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
export class HoverCounter extends Component {

  render() {
    // const { count } = this.state
    const {count, incrementCount, name } = this.props
    return (
      <div>
          <h2 onMouseOver={incrementCount}>{name} Clicked {count} Times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)