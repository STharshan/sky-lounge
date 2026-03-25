import React from 'react'
import ReservationHero from '../components/BookingPage/HeroSection'
import TableSelector from '../components/BookingPage/Table'
import ReservationForm from '../components/BookingPage/ReservationForm'

const BookingPage = () => {
  return (
    <div>
      <ReservationHero />
      <TableSelector />
      <ReservationForm />
    </div>
  )
}

export default BookingPage
