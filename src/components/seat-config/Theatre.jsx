import Legend from "./Legend";
import Row from "./Row";








const Theatre = ({ seats: seatRows, handleSeatSelection, selectedSeats, takenSeats }) => {

  return (
    <div className="rounded-3xl border border-emerald-600 bg-emerald-900 p-5 sm:p-8">
            {/* Screen */}
            <div  className="mx-auto mb-2 h-2 w-4/5 rounded-full bg-lime-300 shadow-lg shadow-lime-300/50"></div>
            <p className="mb-8 text-center text-sm text-lime-200">Screen</p>

            <div className="flex flex-col items-center gap-2 sm:gap-3">
             {seatRows.map((row) => (
              <Row 
              key={row[0].id} 
              row={row} 
              handleSeatSelection={handleSeatSelection}
              selectedSeats={selectedSeats}
              takenSeats={takenSeats}
               />
             ))}
            </div>

            {/* Legend */}
            <Legend />
          </div>
  )
}

export default Theatre
