import React from 'react'
import Style from './Navbar.module.css'
import Link from 'next/link'

const Navbar = ({href, routeName}) => {
  return (
    <nav className={Style.navigationWrapper}>
        <div>
            <strong></strong>
        </div>
        <ul className={Style.navigation}>
    {/* <li className={Style.parent}>
        <Link href='/GET'>
        <a className={Style.link}> GET </a>
        </Link>
        </li> */}
        <li className={Style.parent}>
        <Link href={href}>
        <a className={Style.link}>{routeName} </a>
        </Link>
        </li>
        </ul>
       
    </nav>
  )
}

export default Navbar