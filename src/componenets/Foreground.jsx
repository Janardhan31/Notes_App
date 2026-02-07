import React, { useRef } from 'react'
import Card from './Card'
import { useState } from 'react'

const Foreground = () => {

  const ref= useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {isopen: false, tagtitle: "Download now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {isopen: true, tagtitle: "Download now", tagcolor: "blue"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {isopen: true, tagtitle: "Upload", tagcolor: "green"}
    }
  ]

  // const [first, setfirst] = useState(second)

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card data={item} refernce={ref}/>
      ))}
    </div>
  )
}

export default Foreground
