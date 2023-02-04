import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <section>
        <div></div>
        <div></div>
      </section>
      <section>
        <nav>
          <ul>

          </ul>
        </nav>

      
      </section>
    </div>
  )
}

interface navItem {
  href: string;
  content: string;
}

const NavItem = ({href, content}:navItem) => {
  return (
    <li>
      <Link href={href}>{content}</Link>

    </li>
  )
}

export default Navbar