'use client'

import React from 'react'

export default function Home() {
  const [bgColor, setBgColor] = React.useState('red')

  return (
    <div className="flex items-center justify-center h-screen">
      <button style={{ backgroundColor: bgColor }} onClick={() => { setBgColor('blue') }}>
        Change to Blue
      </button>
    </div>
  )
}
