# 🎬 Seat Booking App (live url : https://seat-booking-omega-seven.vercel.app/)

A responsive movie seat booking app built with React and Tailwind CSS. Users pick a movie and showtime, choose seats from a theatre layout, and confirm their booking.

## Tech Stack

- React (functional components and hooks)
- Tailwind CSS
- SweetAlert2 (confirmation and validation dialogs)

## Features

- Select a movie and showtime using dropdown menus.
- View a theatre layout with a screen indicator and row labels.
- Select and deselect available seats.
- Unavailable and already-booked seats are disabled.
- A visual legend explains seat states (available, selected, taken).
- Selected seats, ticket count, and total price update dynamically.
- Validation prevents confirming a booking with no seats selected.
- A confirmation dialog appears before the booking is completed.
- Confirmed seats are marked as taken, and the booking summary resets afterward.

## React Concepts Applied

- **Component composition:** The UI is split into small, reusable components ('Header', 'Theatre', 'Row', 'Seat', 'Legend', 'BookingSummary').
- **State management with 'useState':** Tracks seats, selected seats, and the chosen movie and time.
- **Lifting state up:** Shared state lives in 'App.jsx' and is passed down as props.
- **Props and callback functions:** Child components trigger updates in the parent through handler props.
- **Derived data:** Taken seats, ticket count, and total price are calculated from existing state instead of being stored separately.
- **Conditional rendering and styling:** Seat appearance changes based on whether it is selected, taken, or unavailable.
- **Immutable state updates:** Uses 'map', 'filter', and the spread operator instead of mutating state directly.
- **Rendering lists:** Rows and seats are generated with 'map()' and unique 'key' props.

## Challenges and How I Solved Them

### 1. Sharing 'selectedSeats' between components
Both the seat layout and the booking summary needed access to 'selectedSeats'. I lifted the state up to the parent 'App.jsx'
component and passed it down through props, so both components stay in sync.

### 2. Marking selected seats as taken after confirmation
After the user clicks **Confirm booking**, the selected seats needed to become taken. I passed the 'selectedSeats' array into 'handleConfirmBooking', mapped over every row of seats, and changed the status to 'taken' for each seat whose ID was in the array. I then passed the new array to 'setSeats', which updated the UI without mutating the original state.

### 3. Resetting the booking after confirmation
Once the booking was saved, the old selection and movie details were still showing. I cleared 'selectedSeats' and reset the movie name and time so the user could start a fresh booking.

## Getting Started

git clone https://github.com/rohitha-kodikara/seat-booking

cd project-folder

npm install

npm run dev


## Future Improvements

- Store bookings in a database or 'localStorage' so they persist after a refresh.
- Add pricing tiers (e.g. premium rows).
