import React from 'react'
import Toggle from '../components/themeToggle'
import Background from '../components/background'

function Dashboard() {
  return (
    <Background>
        <main>
          <Toggle />
        </main>
    </Background>
  )
}

export default Dashboard