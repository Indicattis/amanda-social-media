




import React from 'react'
import { HeaderElements } from './@types'
import { motion } from 'framer-motion'

function HeaderBody({isScrolled, ...rest}: HeaderElements) {
  return (
    <motion.div 
    animate={{
      height: isScrolled ? 80 : 56,
    }}
    className={`relative w-full flex items-center max-w-[1080px]`}>
      <div {...rest} className='flex w-full'>
      </div>
    </motion.div>
  )
}

export default HeaderBody