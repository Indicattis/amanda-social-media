




import { IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import React from 'react'

function HeaderLinks() {
  return (
    <div className='flex h-12 items-center gap-5'>
      <div><IconBrandInstagram/></div>
      <div><IconBrandLinkedin/></div>
      <div><IconBrandGmail/></div>
      <div><IconBrandX/></div>
    </div>
  )
}

export default HeaderLinks