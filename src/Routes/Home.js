import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import Carousel from 'react-bootstrap/Carousel';

import NavbarComponent from './NavBar';
import ScrollToTop from '../Configuration/ScrollToTop';
import Footer from './Footer';
import background_2 from '../Media Files/Homepage Background/background_2.jpg';
import trip_dotcom from '../Media Files/trip.com_logo.png';
import booking_dotcom from '../Media Files/booking.com_logo.png';
import hyatt_dotcom from '../Media Files/hyatt.com_logo.jpg';
import hotels_dotcom from '../Media Files/hotels.com_logo.jpg';
import Rating from '@mui/material/Rating';
import StartDatePicker from '../Configuration/StartDatePicker.js';
import EndDatePicker from '../Configuration/EndDatePicker.js';

import AllHotelsArray from '../data/hotelsData.js';
import rooms_and_suites_pictures_array from '../data/roomsAndSuitesData.js';
import restaurants_pictures_array from '../data/restaurantsData.js';
import catchPhrasesArray from '../data/catchPhrasesData.js';
import meeting_room_pictures_array from '../data/meetingRoomData.js';





const Home = () => {

  const server_url = process.env.REACT_APP_SERVER_URL;

  const all_hotels_section_ref = useRef(null);

  const [roomsArray, setRoomsArray] = useState([]);
  const [loadingHotels, setIsLoadingHotels] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState(null);

  const navigate = useNavigate();

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const fetchHotels = async () => {
      let response = await fetch(`${server_url}/get/fetch-all-rooms`, {
        method: 'GET',
      });

      if (response.status === 200) {
        let data = await response.json();
        setRoomsArray(data);
        setIsLoadingHotels(false);
      } else {
        setIsLoadingHotels(false);
        setFetchError(true);
        setFetchErrorMessage(
          'Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.'
        );
      }
    };

    fetchHotels();
  }, [server_url]);





  // special deals pictures array.
  let special_deals_pictures_array = [
    { src: meeting_room_pictures_array[0].src },
    { src: rooms_and_suites_pictures_array[1].src },
    { src: restaurants_pictures_array[2].src },
    { src: meeting_room_pictures_array[3].src },
  ];

  // scroll all hotels section into view.
  const ScrollAllHotelsIntoView = () => {
    all_hotels_section_ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="hide-overflow">
      <NavbarComponent />

      <main className="main-content">
        <section className="get-away">
          <h3 className="get-away-text">
            <strong>Get away for a while</strong>
          </h3>
          <h6 className="get-away-details-text">
            Whether for business, vacation or pleasure, SwiftStay can help you
            find the best hotel for your needs right here.
          </h6>
        </section>

        <section className="place-to-stay">
          <h3 className="save-big-text">
            <strong>Discover your favourite place with us</strong>
          </h3>
        </section>

        <section className="intro-background">
          <img src={background_2} alt="" className="intro-background-img" />
          <h3 className="welcome-phrase"> {catchPhrasesArray[1]} </h3>

          <section className="intro-form">
            <Row>
              <h6 className="intro-form-catch-phrase">
                Easy to book, hard to say goodbye to
              </h6>
            </Row>

            {/* <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Control type='text' placeholder='Enter a hotel, city, address....' className='destination-textbox text-control-focus-style' />
          </Form.Group> */}

            <Row xs={1} md={2}>
              <Col className="mb-3">
                <StartDatePicker />
              </Col>

              <Col className="mb-3">
                <EndDatePicker />
              </Col>
            </Row>

            <Row xs={12} md={12}>
              {/* <Col className='mb-3'>
              <Form.Control className='number-of-guests-textbox text-control-focus-style' type='text' placeholder='1 room, 2 guests' />
            </Col> */}

              <Col className="mb-3">
                <Button
                  variant="custom"
                  className="find-hotel-button"
                  onClick={ScrollAllHotelsIntoView}
                >
                  Find your hotel
                </Button>
              </Col>
            </Row>
          </section>
        </section>

        <section className="world-of-hotels-section">
          <h4 className="world-of-hotels-text">A whole world of hotels</h4>
          <p className="book-perfect-hotel-text">
            Book the perfect room in the best hotel, wherever you're heading
          </p>
        </section>

        <section className="plan-staycation-section">
          <h3 className="plan-staycation-text">
            <strong>Plan your next staycation</strong>
          </h3>
        </section>

        <section className="main-hotels-section">
          <Row
            xs={1}
            md={4}
            className="main-hotels-section-row"
            ref={all_hotels_section_ref}
          >
            {AllHotelsArray.map((room, index) => (
              <Col key={index}>
                <Card
                  className="cover-page-card-style"
                  onClick={() =>
                    navigate(
                      `/get-room-details/${room.room_number}/${room._id}`
                    )
                  }
                >
                  <Card.Img
                    src={room.room_cover_photo_url}
                    alt=""
                    className="hotel-card-img"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      <section className="mb-3">{room.room_number}</section>

                      <section>
                        <Rating
                          name="read-only"
                          value={room.room_rating}
                          readOnly
                        />
                      </section>
                    </Card.Title>

                    <Card.Subtitle className="card-subtitle">
                      <div>
                        <section className="card-room-location">
                          <IoLocationSharp />{' '}
                          <h6 className="location-detail">Accra</h6>
                        </section>

                        <section className="card-room-rate">
                          GH<span>&#8373;</span> {room.room_rate} per night
                        </section>
                      </div>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row xs={1}>
            <div
              className="view-all-hotels-text-div"
              onClick={() => navigate('fetch-all-rooms')}
            >
              <Button variant="custom" className="view-all-hotels-btn">
                View all hotels <BsArrowRight size={20} />{' '}
              </Button>
            </div>
          </Row>
        </section>
      </main>

      <section className="get-best-prices-section">
        <h4 className="get-best-prices-text">
          <strong>Get the best prices from top hotel providers</strong>
        </h4>
        <Row xs={1} md={4}>
          <Col>
            <img src={trip_dotcom} alt="" className="best-prices-img" />
          </Col>

          <Col>
            <img src={booking_dotcom} alt="" className="best-prices-img" />
          </Col>

          <Col>
            <img src={hotels_dotcom} alt="" className="best-prices-img" />
          </Col>

          <Col>
            <img src={hyatt_dotcom} alt="" className="best-prices-img" />
          </Col>
        </Row>
      </section>

      <section className="extra-info-section">
        <Row xs={1} md={2} className="extra-info-row">
          <Col>
            <Carousel>
              {rooms_and_suites_pictures_array.map((picture, index) => (
                <Carousel.Item key={index}>
                  <img src={picture.src} alt="" className="extra-info-img" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col className="extra-info-text-col">
            <h3 className="extra-info-title">Rooms & Suites</h3>
            <div className="extra-info-details">
              <h4 className="extra-info-details-text">
                Whether you’re traveling alone or with company,
              </h4>
              <h4 className="extra-info-details-text">
                one of our rooms is definitely tailored for your needs.
              </h4>
              <h4 className="extra-info-details-text">
                All rooms are equipped with the necessary amenities, and the
                decor simply speaks for itself.{' '}
              </h4>
            </div>
          </Col>
        </Row>

        <Row xs={1} md={2} className="extra-info-row">
          <Col className="extra-info-text-col">
            <h3 className="extra-info-title">Restaurants</h3>
            <div className="extra-info-details">
              <h4 className="extra-info-details-text">
                With SwiftStay, we don't only bring you hotels with the best
                rooms but we take the entire human experience into consideration
                and that includes your food!!
              </h4>
              <h4 className="extra-info-details-text">
                Find the best dishes you didn't know you craved: from our local
                banku and okro stew to continental{' '}
              </h4>
              <h4 className="extra-info-details-text">
                hot chicken casserole, like your mama makes. Our hotels got you
                covered!
              </h4>
            </div>
          </Col>

          <Col>
            <Carousel>
              {restaurants_pictures_array.map((picture, index) => (
                <Carousel.Item key={index}>
                  <img src={picture.src} alt="" className="extra-info-img" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row xs={1} md={2} className="extra-info-row">
          <Col>
            <Carousel>
              {meeting_room_pictures_array.map((picture, index) => (
                <Carousel.Item key={index}>
                  <img src={picture.src} alt="" className="extra-info-img" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col className="extra-info-text-col">
            <h3 className="extra-info-title">Meetings & Events</h3>
            <div className="extra-info-details">
              <h4 className="extra-info-details-text">
                Need a setting to host a meeting during your stay in our hotels?
              </h4>
              <h4 className="extra-info-details-text">
                We understand that work can be unpredictable and who knows when
                businesss comes up, right?!
              </h4>
              <h4 className="extra-info-details-text">
                You don't need to panic, our hotels come with executive rooms
                suited for business meetings of any kind.
              </h4>
              <h4 className="extra-info-details-text">
                We're saying, as long as you're booked with us, we've got your
                back!
              </h4>
            </div>
          </Col>
        </Row>

        <Row xs={1} md={2} className="extra-info-row">
          <Col className="extra-info-text-col">
            <h3 className="extra-info-title">Special Deals</h3>
            <div className="extra-info-details">
              <h4 className="extra-info-details-text">
                Discover the epitome of luxury and savings with our special
                deals designed just for you.
              </h4>
              <h4 className="extra-info-details-text">
                Indulge in the perfect blend of comfort,
              </h4>
              <h4 className="extra-info-details-text">
                sophistication, and affordability at SwiftStay.
              </h4>
            </div>
          </Col>

          <Col>
            <Carousel>
              {special_deals_pictures_array.map((picture, index) => (
                <Carousel.Item key={index}>
                  <img src={picture.src} alt="" className="extra-info-img" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </section>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Home;
