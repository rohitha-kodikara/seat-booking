import React from 'react'

const Seat = ({ seat, index }) => {
  return (
     <button
                key={seat.id}
                // disabled={seat.status === 'unavailable'}
                className={`h-9 w-9 cursor-pointer rounded-lg border border-[#a87800] bg-[#211d18] text-sm font-semibold text-[#f2b51d] transition sm:h-11 sm:w-11 ${
                  index === 4 ? 'ml-4 sm:ml-10' : ''
                }  `}
              >
                {/* "A1" -> "1" */}
                {seat.id.slice(1)}
              </button>
  )
}

export default Seat
