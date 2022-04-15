import React from 'react'

const Greet = props => {
  return (
   <>
      <div>Hello {props.name} aks {props.heroName}</div>
      <h1>{props.children}</h1>
   </>
  )
}

export default Greet