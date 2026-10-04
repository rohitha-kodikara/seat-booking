import React, { useState } from 'react'
import Header from './components/Header'
import Theatre from './components/seat-config/Theatre'
import BookingSummary from './components/BookingSummary'


const movies = [
  {
    id: 1,
    movie: "Midnight Express",
    time: "7:30 PM",
  },
  {
    id: 2,
    movie: "The Dark Knight",
    time: "5:00 PM",
  },
  {
    id: 3,
    movie: "Inception",
    time: "8:30 PM",
  },
  {
    id: 4,
    movie: "Interstellar",
    time: "6:45 PM",
  },
  {
    id: 5,
    movie: "Avengers: Endgame",
    time: "9:00 PM",
  },
];



const App = () => {

const[movieName,setMovieName] = useState(movies[0].movie);
 


  return (
    <div className="min-h-screen bg-emerald-950 p-4 text-white sm:p-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <Header 
        movies={movies}
        setMovieName={setMovieName}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Seat map */}
          <Theatre />

          {/* Booking summary */}
          <BookingSummary />
        </div>
      </div>
    </div>
  )
}

export default App