import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import PDFgenerador from './components/PDFGenerador'



export default function App() {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <div className='flex'>
      <SideBar />
      <Dashboard />
    </div>  
    </>
  )
}

