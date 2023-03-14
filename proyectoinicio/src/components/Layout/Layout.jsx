// import React from 'react'
import { Outlet } from 'react-router'
import { UserContextProvider } from '../../context/UserContext'

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