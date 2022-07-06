/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
        <nav>
            <Link href="/">
                <img src="/assets/svg/bitcasino-logo.svg" alt="Home of Bitcasino" />
            </Link>
        </nav>
    </header>
  )
}

export default Header