import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
    //   //setState is aSync
    //   this.setState({
    //     count : this.state.count + 1
    //   }, () => console.log("Callback Value:", this.state.count))

    //   //below execs before the setState has finished 
    //   console.log(this.state.count)


    this.setState(prevState => ({
        count: prevState.count + 1
    }))  
  }
  incrementFive(){
      this.increment() //1
      this.increment() //2
      this.increment()
      this.increment()
      this.increment()
  }
  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>IncrementFive</button>
      </>
    )
  }
}

export default Counter