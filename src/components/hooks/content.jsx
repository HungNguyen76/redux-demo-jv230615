// import React from 'react'
import { memo } from 'react'

function Content({ onIncrease }) {
    console.log("Content được gọi")
  return (
    <div>
        <h2>Hello Cac ban</h2>
        <button onClick={onIncrease}>Click me!</button>
    </div>
  )
}
export default memo(Content)