import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'layouts/footer/Footer'
import Header from 'layouts/header/Header'
import useCheckToken from 'hooks/useCheckToken'

export default function RootTemplate() {
  useCheckToken()
  return (
    <>
      <Header />
      <main
        style={{
          margin: '0 0 100px',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
