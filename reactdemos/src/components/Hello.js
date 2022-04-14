import React from 'react'

function Hello() {
//   return (
//     <div>Hello</div>
//   )
    return React.createElement('div', {id:'name'}, React.createElement('h1', null, 'Hello'))
}

export default Hello