import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [title,setTtitle]=useState('')
  return (
    <div>
      <input className="p-2 rounded-2xl mt-2" type='text' placeholder='enter title here' value={title} onChange={(e)=>{setTtitle(e.target.value)}}></input>
    </div>
  )
}

export default Home
