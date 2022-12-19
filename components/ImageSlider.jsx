import React from 'react'
import Image from 'next/image'
import { motion as m } from 'framer-motion'



function ImageSlider({urlBefore, urlAfter}) {
  return (
    <m.div className='carousel'>
        <m.div className='inner-carousel' drag="x" dragConstraints={{right: 0, left: -280}}>
            <m.div className='carousel-item'>
                <Image src={urlBefore} alt="hairstyle" fill />
            </m.div>
            <m.div className='carousel-item'>
                <Image src={urlAfter} alt="hairstyle" fill />
            </m.div>
        </m.div>
    </m.div>
  )
}

export default ImageSlider