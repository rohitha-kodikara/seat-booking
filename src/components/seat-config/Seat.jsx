import React from 'react'

const Seat = ({ seat, index, handleSeatSelection,selectedSeats, takenSeats }) => {


  const isSelected = selectedSeats.includes(seat.id);
  const isTaken = takenSeats.includes(seat.id);
  const isUnavailable =
  isTaken || seat.status === "unavailable" || seat.status === "taken";

  return (
     <button
      disabled={isUnavailable}
     onClick={() => {handleSeatSelection(seat.id)}}
                key={seat.id}
                // disabled={seat.status === 'unavailable'}
                className={`h-9 w-9 cursor-pointer rounded-lg border 
                  ${isSelected ? 'bg-gradient-to-br from-amber-300 to-pink-500' : 'border-[#a87800] bg-[#211d18]'} 
                  ${isTaken ? 'bg-white/10 border-none text-black cursor-not-allowed' : ''}
                   text-sm font-semibold text-[#f2b51d] transition sm:h-11 sm:w-11 
                   ${
                      isUnavailable
                        ? "cursor-not-allowed bg-white/10 text-gray-400 border-none"
                        : "cursor-pointer text-[#f2b51d] hover:opacity-90"
                    } 
                   ${ index === 4 ? 'ml-4 sm:ml-10' : ''}  `}
              >
                {/* "A1" -> "1" */}
                {seat.id.slice(1)}
              </button>
  )
}

export default Seat
