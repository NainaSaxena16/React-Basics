import React, { useState } from 'react'

const Counter=()=>{
   let [count,setCount]= useState(0)
const incrementHandler=()=>{
    count++;
    setCount(count)
    console.log("hi",count)
}

   //console.log(count)
return <div>
    <h1>
        {count}
    </h1>
    <button onClick={incrementHandler}>
        INCREMENT
    </button>
</div>
}

export default Counter