"use client"
import Link from 'next/link';
import '../NavBarMobile/navBarMobile.css'
import Hamburguesa from './Hamburguesa/Hamburguesa'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';


const NavBarMobile = ( {setNavOn, scrollToSection, scrollPortafolio} ) => {
  let logo = "<Santi/>"

  
  return (
    <div className='navBarMobile'>
      <Link style={{textDecoration:"none"}} href={'/'}>
      <HomeIcon style={{cursor:"pointer", color:"white"}} fontSize='large'  />
      </Link>
      <Link style={{textDecoration:"none"}} href={'/search'}>
      <SearchIcon style={{cursor:"pointer", color:"white"}} fontSize='large' />
      </Link>
      <Link style={{textDecoration:"none"}} href={'/peliculas'}>
      <h1>Peliculas</h1>
      </Link>
      <Link style={{textDecoration:"none"}} href={'/series'}>
      <h1>Series</h1>
      </Link>

      </div>

  )
}

export default NavBarMobile