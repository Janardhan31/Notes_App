import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import {motion, scale} from "framer-motion"


const Card = ({data,refernce}) => {
  return (
    <motion.div drag dragConstraints={refernce} whileDrag={{scale:1.2}} className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-5 py-10 overflow-hidden fleex-shrink-0'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
          <div className='flex items-center justify-between px-8 py-3 mb-3'> 
            <h5>{data.filesize}</h5>
            <span className='w-5 h-5 bg-sky-200 rounded-full items-center justify-center'>
              {data.close ? <RiCloseLine /> : <FiDownload size=".7em" color='#000' className='mt-1 ml-1'/>}
            
            </span>
             </div>
             {data.tag.isopen && (<div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
              </div>)   }             
        </div>
    </motion.div>
  )
}

export default Card
