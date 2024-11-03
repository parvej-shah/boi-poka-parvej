import React from 'react'
import Banner from './Banner'
import Books from './Books'

export default function Home() {
  return (
    <div className='container mx-auto px-2'>
        <Banner/>
        <Books/>
    </div>
  )
}
