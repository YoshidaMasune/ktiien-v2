import React, { ReactNode } from 'react'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

function Layout({children}: Props) {
  return (
    <div>
      {/* navbar */}
      <section>
        <Navbar />
      </section>

      {/* content */}
      <section>
        {children}
      </section>

      {/* footer */}

      <section>

      </section>
    </div>
  )
}

export default Layout