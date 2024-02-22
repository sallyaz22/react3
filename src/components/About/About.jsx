import { useState } from 'react'


function About() {
  let  [count,setCount] = useState(0); 

  const changeCount = ()=>{
    setCount(count+1);
    console.log(count)
  }
  return (
    <div>
      <button onClick={changeCount}>About {count}</button>

    </div>
  )
}

export default About

