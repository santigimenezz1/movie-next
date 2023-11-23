import React from 'react'
import './navBar.css'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='navBar'>
      <Link href={'/'}>
      <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699209536/E-COMERCE%20CODER/29c6fee-blue_short_oraeed.svg'></img>
      </Link>
      <div className='navBar__enlaces'>
       <ul>
        <li>
        <Link className='Link' href={'/'}>Home</Link> 
        </li>
        <li>
        <Link className='Link' href={'/search'}>Search</Link> 
        </li>
        <li>
        <Link className='Link' href={'/peliculas'}>Peliculas</Link> 
        </li>
        <li>
        <Link className='Link' href={'/series'}>Series</Link> 
        </li>
       </ul>
      </div>
    </div>
  )
}

export default NavBar
