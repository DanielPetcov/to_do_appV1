import { useState } from 'react'
import ToDoList from './ToDoList'
import '../styles/app_style/app.css'
import Footer from './footer'

export default function App(){
  return (
    <div className='app'>
      <ToDoList />
      <Footer />
    </div>
  )
  
}