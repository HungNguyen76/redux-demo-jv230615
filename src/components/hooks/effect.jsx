import {useEffect, useState} from 'react'

export default function Effect() {
    const [ count, setCount] = useState(0)
    useEffect(() => {
        console.log("Effect ran!")
        document.title = `Count: ${count}`
    }, [count])
  return (
    <div>
        <h2>UseEffect Hooks</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  )
}
