import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel  from 'react-bootstrap/FloatingLabel'
import { BsPersonFill } from 'react-icons/bs'

// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'






const Reviews = ( ) => {

  // local and online server urls
//   let local_server = 'http://127.0.0.1:8000'
  let online_server = 'https://hotel-finder-app-server-rest.onrender.com'

    // setting up params.
    const params = useParams()

    // handling state.
    const [ allReviewsArray, setAllReviewsArray ] = useState([ ])
    const [ selectedRoomDetailsObject, setselectedRoomDetailsObject ] = useState({})
    const [ fetchError, setFetchError ] = useState( false )
    const [ fetchErrorMessage, setFetchErrorMessage ] = useState( null )
    const [ isLoadingHotelDetails, setIsLoadingHotelDetails ] = useState( true )

    const [ isLoadingReviews, setIsLoadingReviews ] = useState( true )
    const [ reviewsError, setReviewsError ] = useState( false )
    const [ reviewsErrorMessage, setReviewsErrorMessage ] = useState( null )

    const [ reviewerEmail, setReviewerEmail ] = useState('')
    const [ reviewBody, setReviewBody ] = useState('')
    const [ reviewerEmailError, setReviewerEmailError ] = useState( false )
    const [ reviewBodyError, setReviewBodyError ] = useState( false )


    // review feedback state.
    const [ postingReview, setPostingReview ] = useState( false )
    const [ reviewFeedback, setReviewFeedback ] = useState('')


  // use effect hook to fetch details of selected room.
  useEffect(() => {
    // async function to fetch data.
    const FetchData = async () => {
      let response = await fetch(`${ online_server }/get/room-details/${ params.hotel_name }/${ params.hotel_id }`, {
        method: 'GET'
      })
      
      if ( response.status === 200 ) {
        console.log( `selected room success response is ${ response.status }` )
        let data = await response.json()
        setselectedRoomDetailsObject({ ...data }) 
        console.log('selected room data is')
        console.log( data )
        setTimeout(() => {
          setIsLoadingHotelDetails( false )
        }, 1000 )

      }

      else {
        console.log( `failure status is ${response.status} ` )
        setIsLoadingHotelDetails( false )
        setFetchError( false )
        setFetchErrorMessage('Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.')
      }

    }

    FetchData()

  }, [ ])
    



    // effect hook to fetch all reviews.
    useEffect(() => {
        const FetchAllReviews = async ( ) => {
            let response = await fetch(`${ online_server }/get/fetch-reviews/${ params.hotel_name }/${ params.hotel_id }`)
            
            if( response.status === 200 ) {
                let data =  await response.json()
                setAllReviewsArray( data )
                setTimeout(() => {
                    setIsLoadingReviews( false )
                }, 1000 )
                console.log('all reviews fetched')
                console.log( data )
            }
            else if ( response.status === 404 ) {
                setTimeout(() => {
                    setIsLoadingReviews( false )
                }, 1000 )
                console.log('no reviews for this hotel yet')
            }
            else {
                setIsLoadingReviews( false )
                console.log('failed to fetch reviews......')
                setReviewsErrorMessage('failed to fetch reviews....')
            }
        }

        FetchAllReviews()

    }, [ ])
    


    // updating reviewer email state
    const HandleReviewerEmailUpdate = ( event ) => {
        setReviewerEmailError( false )
        setReviewerEmail( event.target.value )
    }


    // updating review body state
    const HandleReviewBodyUpdate = ( event ) => {
        setReviewBodyError( false )
        setReviewBody( event.target.value )
    }


    // handling post review
    const HandlePostReview = async ( ) => {

        if ( reviewerEmail.length < 1 || reviewBody.length < 1 ) {
            if( reviewerEmail.length < 1 ) {
                setReviewerEmailError( true )
            }
            else {
                setReviewerEmailError( false )
            }

            if( reviewBody.length < 1 ) {
                setReviewBodyError( true )
            }
            else {
                setReviewBodyError( false )
            }
        }

        else {
            // actually posting the review.
            setPostingReview( true )
            let response = await fetch(`${ online_server }/post/post-review/${ params.hotel_name }/${ params.hotel_id }`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_email: reviewerEmail,
                    review_body: reviewBody,
                    reviewed_hotel_name: params.hotel_name,
                    reviewed_hotel_id: params.hotel_id
                })
            })

            if ( response.status === 200 ) {
                console.log('review posted')
                setReviewerEmail('')
                setReviewBody('')
                setPostingReview( false )
                setReviewFeedback('your review has been posted successfully...')
                setTimeout(() => {
                    setReviewFeedback('')
                }, 5000)
            }
            else {
                setPostingReview( false )
                console.log('failed to post review')
                setReviewFeedback('failed to post your review due to an error...')
                setTimeout(() => {
                    setReviewFeedback('')
                }, 5000)

            }

        }

    }





    

    return (

        <div>

            <NavbarComponent />

            <div>
                <section className='reviewed-hotel-info-section'>
                    <h3 className='reviewed-hotel-name'>{ params.hotel_name } Reviews</h3>
                </section>


                {

                isLoadingHotelDetails === true ? 
                <section className='fetch-all-hotels-loading-section'>
                <FontAwesomeIcon icon={ faSpinner } size='3x' spinPulse className='mb-4' />
                <p className='fetching-hotels-text'>fetching reviews on { params.hotel_name } hotel... please wait</p>
                </section>

                :

                fetchError === true ?
                <section className='fetch-all-hotels-fetch-error-section'>
                <h5 className='fetch-hotels-error-text'> { fetchErrorMessage } </h5>
                </section>

                :


                <section className='main-content-wrapper'>

                <section className='selected-room-extra-pics-grid'>

                    <Row>
                        <Col>
                            <img width={ 380 } src={ selectedRoomDetailsObject.room_cover_photo_url } alt='' />
                        </Col>

                        <Col>
                            <img width={ 380 } src={ selectedRoomDetailsObject.room_extra_photo_url_1 } alt='' />
                        </Col>

                        <Col>
                            <img width={ 380 } src={ selectedRoomDetailsObject.room_extra_photo_url_2 } alt='' />
                        </Col>

                    </Row>

                </section>


                <section className='selected-room-details-sub-section'>
                    <Row>
                        <Col md={ 7 }>
                            <h3 className='selected-room-details-sub-header'>{ allReviewsArray.length } Total Review(s)</h3>
                        </Col>

                        <Col md={ 5 }>
                            <Button variant='custom' className='post-review-btn'>Post a review</Button>
                        </Col>
                    </Row>


                    {
                        allReviewsArray.map(( review, index ) => (
                            <div className='posted-reviews-wrapper-div' key={ index }>

                                <section className='reviewer-info'>
                                    <div>
                                        <BsPersonFill size={ 30 } />
                                    </div>
                        
                                    <div className='reviewer-info-name-date'>
                                        <h5 className='reviewer-name'> { review.user_email } </h5>
                                        <p className='review-date'>Wrote a review { review.review_date } @ { review.review_time } </p>
                                    </div>
                                </section>

                                <section className='review-body'>
                                    <Row>
                                        <p className='review-body-text'>{ review.review_body }</p>
                                    </Row>
                                    <hr />
                                </section>

                            </div>
                
                        ))

                    }

                </section>


                <section className='post-review-section'>
                    <h5 className='post-review-header'>Post a review</h5>
                    <Form>
                        <Form.Control type='email' placeholder='Your email *' className={ reviewerEmailError === true ? 'review-email-control-error mb-4' : 'review-email-control mb-4' } onChange={ HandleReviewerEmailUpdate } value={ reviewerEmail } />

                        <FloatingLabel style={{ color: 'gray' }} controlId='floatingTextarea' label='Review body *' className='mb-4'>
                            <Form.Control as='textarea' placeholder='' className={ reviewBodyError === true ? 'review-body-text-area-error' : 'review-body-text-area' } style={{ height: 150 }} onChange={ HandleReviewBodyUpdate } value={ reviewBody } />
                        </FloatingLabel>

                        <Row>
                            <Col>
                                <Button variant='custom' className='post-review-btn' onClick={ HandlePostReview }>Post review</Button>
                            </Col>

                            <Col md={ 7 }>
                                <p className='posting-review-icon mt-4'>{ postingReview === true ? <FontAwesomeIcon icon={ faSpinner } spinPulse size='2x' className='mb-2' /> : null }</p>
                                <p className='review-feedback-text'>{ reviewFeedback.length > 1 ? reviewFeedback : '' }</p>
                            </Col>
                        </Row>

                    </Form>


                </section>



                </section>


                }



            </div>
            




            <section className='footer-gap'>
            </section>

            <Footer />

        </div>
    )

}




export default Reviews