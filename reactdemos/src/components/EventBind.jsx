import React, { Component } from 'react'

export class EventBind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message : "Hello"
   }

   this.clickhandler = this.clickhandler.bind(this)
 }
 clickhandler(){
     this.setState({
         message:"Hiiiii!!!"
     })
    console.log(this)
 }
  render() {
    return (
    <>
     <div>{this.state.message}</div>
        <button onClick={this.clickhandler}>CLICK</button>   
        <button onClick={()=>this.clickhandler()}>CLICK</button>   
        <button onClick={this.clickhandler.bind(this)}>CLICK</button>   
    </>
    )
  }
}

export default EventBind