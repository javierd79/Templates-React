import React from 'react'
import Background from '../components/background'

function NotFound() {
  return (
    <Background>
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-3xl text-black dark:text-white'>Error 404 || No encontrado</h1>
        </div>
    </Background>
  )
}

export default NotFound