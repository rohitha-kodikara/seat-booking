import Legend from "./Legend";
import Row from "./Row";

const defaultSeats = [
  [
    { id: "A1", status: "available" },
    { id: "A2", status: "available" },
    { id: "A3", status: "unavailable" },
    { id: "A4", status: "unavailable" },
    { id: "A5", status: "available" },
    { id: "A6", status: "available" },
    { id: "A7", status: "available" },
    { id: "A8", status: "available" },
  ],

  [
    { id: "B1", status: "unavailable" },
    { id: "B2", status: "available" },
    { id: "B3", status: "available" },
    { id: "B4", status: "available" },
    { id: "B5", status: "selected" },
    { id: "B6", status: "selected" },
    { id: "B7", status: "selected" },
    { id: "B8", status: "available" },
  ],

  [
    { id: "C1", status: "available" },
    { id: "C2", status: "available" },
    { id: "C3", status: "available" },
    { id: "C4", status: "available" },
    { id: "C5", status: "available" },
    { id: "C6", status: "available" },
    { id: "C7", status: "unavailable" },
    { id: "C8", status: "unavailable" },
  ],

  [
    { id: "D1", status: "unavailable" },
    { id: "D2", status: "available" },
    { id: "D3", status: "available" },
    { id: "D4", status: "available" },
    { id: "D5", status: "available" },
    { id: "D6", status: "available" },
    { id: "D7", status: "available" },
    { id: "D8", status: "available" },
  ],

  [
    { id: "E1", status: "available" },
    { id: "E2", status: "unavailable" },
    { id: "E3", status: "unavailable" },
    { id: "E4", status: "available" },
    { id: "E5", status: "available" },
    { id: "E6", status: "available" },
    { id: "E7", status: "available" },
    { id: "E8", status: "taken" },
  ],
];



const Theatre = ({ seats: seatRows = defaultSeats }) => {

  return (
    <div className="rounded-3xl border border-emerald-600 bg-emerald-900 p-5 sm:p-8">
            {/* Screen */}
            <div  className="mx-auto mb-2 h-2 w-4/5 rounded-full bg-lime-300 shadow-lg shadow-lime-300/50"></div>
            <p className="mb-8 text-center text-sm text-lime-200">Screen</p>

            <div className="flex flex-col items-center gap-2 sm:gap-3">
             {seatRows.map((row) => (
              <Row key={row[0].id} row={row} />
             ))}
            </div>

            {/* Legend */}
            <Legend />
          </div>
  )
}

export default Theatre
