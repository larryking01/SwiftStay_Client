import React, { createContext, useState } from 'react'

import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


// routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import FetchAllBookings from './Routes/FetchAllBookings'
import FetchAllRooms from './Routes/FetchAllRooms'
import FetchAllStaff from './Routes/FetchAllStaff'
import GetRoomDetails from './Routes/GetRoomDetails'
import BookHotel from './Routes/BookHotel'
import Help from './Routes/Help'
import BookingsHelp from './Routes/BookingsHelp'
import PricesHelp from './Routes/PricesHelp'
import ContactUsHelp from './Routes/ContactUsHelp'
import SearchingHelp from './Routes/SearchingHelp'
import AboutHelp from './Routes/AboutHelp'
import Maps from './Configuration/Maps'
import FrequentlyAskedQuestionsHelp from './Routes/FrequentlyAskedQuestionsHelp'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import NavbarComponent from './Routes/NavBar'
import Footer from './Routes/Footer'
// import StartDatePicker from './Routes/StartDatePicker'
// import EndDatePicker from './Routes/EndDatePicker'




// context variable to handle user state.
const UserContext = createContext( null )






const App = () => {



    // handling user state.
    const [ currentUser, setCurrentUser ] = useState( null )

  

  return (
      <>
        <BrowserRouter>
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='fetch-all-bookings' element={ <FetchAllBookings /> } />
                    <Route path='fetch-all-rooms' element={ <FetchAllRooms /> } />
                    <Route path='fetch-all-staff' element={ <FetchAllStaff /> } />
                    <Route path='get-room-details/:room_id' element={ <GetRoomDetails /> } />
                    <Route path='book-hotel/:room_id' element={ <BookHotel /> } />
                    <Route path='maps' element={ <Maps /> } />
                    <Route path='help' element={ <Help /> } />
                    <Route path='help-bookings' element={ <BookingsHelp /> } />
                    <Route path='help-prices' element={ <PricesHelp /> } />
                    <Route path='help-searching' element={ <SearchingHelp /> } />
                    <Route path='help-contact-us' element={ <ContactUsHelp /> } />
                    <Route path='help-about-us' element={ <AboutHelp /> } />
                    <Route path='frequently-asked-questions' element={ <FrequentlyAskedQuestionsHelp /> } />
                    <Route path='login' element={ <Login /> } />
                    <Route path='sign-up' element={ <SignUp /> } />
                    <Route path='nav-bar' element={ <NavbarComponent /> } />
                    <Route path='footer' element={ <Footer /> } />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
      </>
  )
  
}




export {
    UserContext
}



export default App;

