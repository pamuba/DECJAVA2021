import React, {useState, useEffect} from 'react'

function HookCounterFour() {
  const [count, setCount] = useState(0)
  const [name , setName] = useState('')

  //componentDidMount
  useEffect(()=>{
      console.log('useEffect hook Updaing document title')
      document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterFour