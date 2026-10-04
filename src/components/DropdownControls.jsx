import React from 'react'

const DropdownControls = ({ movies, setMovieName, setMovieTime }) => { 
  
  const movieNames = movies.map(movie => movie.movie);
  const movieTimes = movies.map(movie => movie.time);


  return (
     <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_200px]">
          <select onChange={(e) => setMovieName(e.target.value)} className="w-full rounded-xl border border-emerald-500 bg-emerald-800 px-4 py-3 text-lg font-semibold text-white outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/40">
           {
            movieNames.map((name, index) => (
              <option value={name} key={index} className="text-white">{name}</option>
            ))
           }
          </select>
          <select onChange={(e) => setMovieTime(e.target.value)} className="w-full rounded-xl border border-emerald-500 bg-emerald-800 px-4 py-3 text-lg font-semibold text-white outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/40">
            {
              movieTimes.map((time, index) => (
                <option value={time} key={index} className="text-white">{time}</option>
              ))
            }
          </select>
        </div>
  )
}

export default DropdownControls
