import React from 'react'

const BookingSummary = ({ movieName, movieTime, selectedSeats, editableTicketPrice, handleConfirmBooking }) => {
  return (
    <div className="h-fit rounded-3xl border border-emerald-600 bg-emerald-900 p-6">
            <h2 className="text-xl font-extrabold">{movieName}</h2>
            <p className="text-sm text-lime-200">{movieTime}</p>

            <div className="my-5 h-px bg-emerald-600"></div>

            <div className="space-y-3 text-white">
              <div className="flex justify-between">
                <span>Seats</span>
                <span className="font-semibold text-lime-300 pl-10">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</span>
              </div>
              <div className="flex justify-between">
                <span>Tickets</span>
                <span className="font-semibold">{selectedSeats.length} × LKR.{editableTicketPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="my-5 h-px bg-emerald-600"></div>

            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-extrabold text-lime-300">LKR.{(selectedSeats.length * editableTicketPrice).toFixed(2)}</span>
            </div>

            <button
            onClick={()=> handleConfirmBooking(selectedSeats)}
            className="cursor-pointer w-full rounded-xl bg-lime-300 py-3 text-lg font-bold text-emerald-950 transition hover:bg-lime-200">
              Confirm booking
            </button>
            <button className="cursor-pointer mt-3 w-full text-sm text-lime-200 transition hover:text-white">
              Clear selection
            </button>
          </div>
  )
}

export default BookingSummary
