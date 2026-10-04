import React from 'react'
import Logo from './Logo'
import DropdownControls from './DropdownControls'

const Header = ({ movies, setMovieName, setMovieTime }) => {
  return (
    
        <>
        <Logo />
        <DropdownControls 
        movies={movies} 
        setMovieName={setMovieName} 
        setMovieTime={setMovieTime} />
       
        </>
        
  )
}

export default Header
