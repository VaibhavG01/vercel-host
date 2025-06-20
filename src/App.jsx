import React, { useState } from 'react'
import Header from './components/Header'
import Images from './components/Images'

const App = () => {

  return (
    <>
      <Header />
      <div className="image bg-gradient-to-br from-gray-100 to-white w-full py-10 px-4 md:px-10">
        <Images />
      </div>
    </>
  )
}

export default App