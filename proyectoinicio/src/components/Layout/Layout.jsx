// import React from 'react'
import { Outlet } from 'react-router'
import { UserContextProvider } from '../../context/UserContext'
import NavBar from '../NavBar/NavBar'

export function Layout() {
  return (
    <main>
        <UserContextProvider>
            <section className='body'>
                <Outlet/>
            </section>
        </UserContextProvider>
        
    </main>
  )
}

export function LayoutWithNavbar(){
  return(
    <main>
      <UserContextProvider>
        <NavBar/>
      </UserContextProvider>
    </main>
  )
}
