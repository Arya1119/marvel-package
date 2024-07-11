import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Unit from './Unit/Unit'

const InfrastructurePage = () => {
  useEffect(() => {
    document.title = 'Infrastructure Page';
}, []);
  return (
    <>
        <Hero/>
        <Unit/>
    </>
  )
}

export default InfrastructurePage