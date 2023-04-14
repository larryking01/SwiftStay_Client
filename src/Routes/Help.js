import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import booking_svg from '../Media Files/booking_svg.png'
import money_svg from '../Media Files/money.png'
import search_svg from '../Media Files/search.png'
import travelling_svg from '../Media Files/globe.png'
import about_svg from '../Media Files/about.png'
import contact_us_svg from '../Media Files/contact-us.png'
import question_svg from  '../Media Files/question.png'









const Help = ( ) => { 

// making certain component always displays from top on initial render.
    useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
         })
    })
  
    let categoryArray = [
        { helpCategory: 'Contact Us', categoryImage: contact_us_svg, navigate: '/help-contact-us' },
        { helpCategory: 'About', categoryImage: about_svg, navigate: '/help-about-us' },
        { helpCategory: 'Frequently asked questions', categoryImage: question_svg, navigate: '/frequently-asked-questions' },
        { helpCategory: 'Bookings', categoryImage: booking_svg, navigate: '/help-bookings' },
        { helpCategory: 'Rewards', categoryImage: money_svg, navigate: '/help-prices' },
        { helpCategory: 'Searching', categoryImage: search_svg, navigate: '/help-searching' }


    ]

    // navigation.
    const navigate = useNavigate()



    return (
        <div>
            <NavbarComponent />

            <section className='help-page-wrapper mb-5'>
                <section className='help-title-section'>
                    <h4 className='help-title-text'>What can we help you with today?</h4>

                    <Row md={ 3 } xs={ 1 }>
                        {
                            categoryArray.map(( category, index ) => (
                                <Col key={ index } >
                                    <div className='help-category-div' onClick={() => navigate( category.navigate )}>
                                        <img src={ category.categoryImage } alt='' className='help-category-image' />
                                        <h5 className='help-category-text'> { category.helpCategory } </h5>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </section>

            </section>

        <Footer />    
        
        </div>
    )

}





export default Help