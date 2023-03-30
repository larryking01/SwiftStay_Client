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
import Maps from './Routes/Maps'
import FrequentlyAskedQuestionsHelp from './Routes/FrequentlyAskedQuestionsHelp'
// import StartDatePicker from './Routes/StartDatePicker'
// import EndDatePicker from './Routes/EndDatePicker'







const App = () => {

  

  return (
      <>
            <BrowserRouter>
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
                    {/* <Route path='start-date' element={ <StartDatePicker /> } /> */}
                    {/* <Route path='end-date' element={ <EndDatePicker /> } /> */}
                </Routes>

            </BrowserRouter>
      </>

  )
  
}


export default App;
