import React from 'react'

import Video1 from "../../assets/images/video/videoImage.png";

const SalarySection = () => {
  return (
    <div  className='relative h-screen flex justify-center items-center'>
         <img
          src={Video1}
          alt="Video 1"
          className="w-full h-full object-cover absolute  rounded-2xl"
        />
        
        <div className='h-96 w-96 glass-card'></div>
    </div>
  )
}

export default SalarySection