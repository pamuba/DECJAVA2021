import React, { Component } from 'react'

class Refsdemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
    //callback method
    this.cbRef = null
    this.setCbRef = (element) => {
        this.cbRef = element
    }
  }
  componentDidMount(){
      if(this.cbRef)
        this.cbRef.focus()

    //   this.inputRef.current.focus()
    //   console.log(this.inputRef)
  }
  clickHandler = () => {
      alert(this.inputRef.current.value)
  }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>CLICK</button>
      </>
    )
  }
}

export default Refsdemo