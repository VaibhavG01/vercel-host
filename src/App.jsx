import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const [marks, setMarks] = useState(80)
  const [user, setuser] = useState("Vaibhav")
  const [admin, setadmin] = useState("Gautam")

  return (
    <>
        <Header user={user} admin={admin} />

        <h1>My marks were {marks}</h1>

        <button onClick={()=>{
          setMarks(20+1)
        }} className='bg-gray-800 text-white'>Update </button>
    </>
  )
}

export default App