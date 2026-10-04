import React, { useState } from 'react'
import Header from './components/Header'
import Theatre from './components/seat-config/Theatre'
import BookingSummary from './components/BookingSummary'
import Swal from 'sweetalert2';
import { defaultSeats, movies } from './data'

const App = () => {

const[seats, setSeats] = useState(defaultSeats);
const[movieName,setMovieName] = useState('Select a Movie');
const [movieTime, setMovieTime] = useState('Pick a Time');
const [selectedSeats, setSelectedSeats] = useState([]);



 function handleSeatSelection(seatId) {
  setSelectedSeats((prevSelectedSeats) => {
    if (prevSelectedSeats.includes(seatId)) {
      // If the seat is already selected, remove it from the selection
      return prevSelectedSeats.filter((id) => id !== seatId);
    } else {
      // If the seat is not selected, add it to the selection
      return [...prevSelectedSeats, seatId];
    }

  });
 }

 const editableTicketPrice = 15.00; 

const takenSeats = seats.flat().filter(seat => seat.status === "taken").map(seat => seat.id);

 function handleConfirmBooking(allSelectedSeats) {
 
  if (selectedSeats.length > 0) {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Save it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
    title: "Saved!",
    text: "seat information saved.",
    icon: "success",
  });
  
  const updatedSeats = seats.map(row=>row.map(seat=>{
    if (allSelectedSeats.includes(seat.id)) {
      return { ...seat, status: "taken" };
    }
    return seat;
  }))
    setSeats(updatedSeats);
     setSelectedSeats([]);
     setMovieName('Select a Movie');
     setMovieTime('Pick a Time');
}
  })


  } else {
    Swal.fire("No seats selected", "Please select at least one seat to proceed.", "error");
  }
 }




  return (
    <div className="min-h-screen bg-emerald-950 p-4 text-white sm:p-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <Header 
        movies={movies}
        setMovieName={setMovieName}
        setMovieTime={setMovieTime}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Seat map */}
          <Theatre  
          seats={seats}
          handleSeatSelection={handleSeatSelection}
          selectedSeats={selectedSeats}
          takenSeats={takenSeats}
          />

          {/* Booking summary */}
          <BookingSummary 
          movieName={movieName} 
          movieTime={movieTime}
          selectedSeats={selectedSeats}
          editableTicketPrice={editableTicketPrice}
          handleConfirmBooking={handleConfirmBooking}
          />
        </div>
      </div>
    </div>
  )
}

export default App