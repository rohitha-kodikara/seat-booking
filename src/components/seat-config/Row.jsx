import React from 'react'
import Seat from './Seat'

const Row = (  { row }) => {
  
  return (
   <div key={row[0].id} className="flex items-center gap-2 sm:gap-3">
            {/* Row letter: "A1" -> "A" */}
            <span className="w-6 text-center text-sm font-bold text-lime-200">
              {row[0].id[0]}
            </span>
 
            {row.map((seat, index) => (
              <Seat key={seat.id} seat={seat} index={index} />
            ))}
          </div>
  )
}

export default Row
