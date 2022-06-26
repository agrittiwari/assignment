import React from 'react'
import Style from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={Style.navigationWrapper}>
        <div>
            <strong>TaxAdda</strong>
        </div>
        <ul className={Style.navigation}>
    <li className={Style.parent}>
        <Link href='/GET'>
        <a className={Style.link}> GET </a>
        </Link>
        </li>
        <li className={Style.parent}>
        <Link href='/POST'>
        <a className={Style.link}> POST </a>
        </Link>
        </li>
        </ul>
       
    </nav>
  )
}

export default Navbar