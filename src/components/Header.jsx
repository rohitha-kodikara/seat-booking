import React from 'react'
import Logo from './Logo'
import DropdownControls from './DropdownControls'

const Header = ({ movies, setMovieName }) => {
  return (
    
        <>
        <Logo />
        <DropdownControls 
        movies={movies} 
        setMovieName={setMovieName} />
       
        </>
        
  )
}

export default Header
