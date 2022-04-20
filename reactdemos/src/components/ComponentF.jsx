import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <div>ComponentF

        <UserConsumer>
            {
                name => {
                    return <h1>Hello {name}</h1>
                }
            }
        </UserConsumer>

      </div>
    )
  }
}

export default ComponentF