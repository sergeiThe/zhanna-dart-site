import Link from 'next/link'
import React from 'react'
import { BsScissors } from "react-icons/bs"

function BookButton() {
  return (
    <Link target="_blank" rel="noopener noreferrer" href="https://zhannadart.onlinebooq.net/" className='btn-book'>
        <BsScissors className='icon'/>
        <span>Bestill</span>
    </Link>
  )
}

export default BookButton