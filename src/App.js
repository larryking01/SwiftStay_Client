// dev dependencies
import React, { createContext, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


// modules.
import Home from './Routes/Home'
import FetchAllBookings from './Routes/FetchAllBookings'
import FetchAllRooms from './Routes/FetchAllRooms'
import GetRoomDetails from './Routes/GetRoomDetails'
import BookHotel from './Routes/BookHotel'
import Help from './Routes/Help'
import ContactUsHelp from './Routes/ContactUsHelp'
import AboutHelp from './Routes/AboutHelp'
import FrequentlyAskedQuestionsHelp from './Routes/FrequentlyAskedQuestionsHelp'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import NavbarComponent from './Routes/NavBar'
import Reviews from './Routes/AllReviews'
import PaymentSuccess from './Routes/PaymentSuccess'
import PaymentCanceled from './Routes/PaymentCanceled'



// context variable to handle user state.
const UserContext = createContext( null )



const App = () => {

    // online and local server urls.
    const server_url = 'https://hotel-finder-app-server-rest.onrender.com'
    // const online_server_url = 'https://hotel-finder-app-server-rest.onrender.com'
    // const local_server_url = 'http://localhost:8000'


    // handling user state.
    const [ currentUser, setCurrentUser ] = useState( null )

    // handling startdatepicker input values.
    const [ startDateValue, setStartDateValue ] = useState(null)

    // handling enddatepicker input values.
    const [ endDateValue, setEndDateValue ] = useState(null)

    const [ startDateMilliseconds, setStartDateMilliseconds ] = useState( new Date() )
    const [ endDateMilliseconds, setEndDateMilliseconds ] = useState( new Date() )
    const [ customerLengthOfStay, setCustomerLengthOfStay ] = useState( 0 )

    // handling hotel-booking-info
    const [ checkIn, setCheckIn ] = useState('')
    const [ checkOut, setCheckOut ] = useState('')
    const [ numberOfAdultVisitors, setNumberOfAdultVisitors ] = useState( 1 )
    const [ numberOfChildVisitors, setNumberOfChildVisitors ] = useState( 1 )
    const [ numberOfRooms, setNumberOfRooms ] = useState( 1 )


    const HandleCheckInState = ( event ) => {
        setCheckIn( event.target.value )
    }

    const HandleCheckOutState = ( event ) => {
        setCheckOut( event.target.value )
    }


  return (
      <>
        <HashRouter>
            <UserContext.Provider value={{ server_url,
                                           currentUser, setCurrentUser, checkIn, 
                                           HandleCheckInState, checkOut, HandleCheckOutState,
                                           numberOfAdultVisitors, setNumberOfAdultVisitors,
                                           numberOfChildVisitors, setNumberOfChildVisitors,
                                           numberOfRooms, setNumberOfRooms,
                                           startDateValue, setStartDateValue, endDateValue, 
                                           setEndDateValue, startDateMilliseconds, 
                                           setStartDateMilliseconds, endDateMilliseconds, 
                                           setEndDateMilliseconds, customerLengthOfStay,
                                           setCustomerLengthOfStay }}
            >
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='fetch-all-bookings' element={ <FetchAllBookings /> } />
                    <Route path='fetch-all-rooms' element={ <FetchAllRooms /> } />
                    <Route path='get-room-details/:hotel_name/:hotel_id' element={ <GetRoomDetails /> } />
                    <Route path='book-hotel/:hotel_name/:room_id' element={ <BookHotel /> } />
                    <Route path='help' element={ <Help /> } />
                    <Route path='help-contact-us' element={ <ContactUsHelp /> } />
                    <Route path='help-about-us' element={ <AboutHelp /> } />
                    <Route path='frequently-asked-questions' element={ <FrequentlyAskedQuestionsHelp /> } />
                    <Route path='login' element={ <Login /> } />
                    <Route path='sign-up' element={ <SignUp /> } />
                    <Route path='all-reviews/:hotel_name/:hotel_id' element={ <Reviews /> } />
                    <Route path='payment-successful' element={ <PaymentSuccess /> } />
                    <Route path='payment-canceled' element={ <PaymentCanceled /> } />
                    <Route path='nav-bar' element={ <NavbarComponent /> } />
                </Routes>
            </UserContext.Provider>
        </HashRouter>
      </>
  )
  
}




export {
    UserContext
}



export default App;

