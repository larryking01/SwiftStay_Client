import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'





const Footer = () => {

    const navigate = useNavigate()
    
    return (

        <footer className='footer-container'>
            <Row xs={ 1 } md={ 4 } >
                <Col md={ 3 }>
                    <h4 className='footer-header'> Explore </h4>
                    <p className='footer-link-item'> Hotels </p>
                    <p className='footer-link-item'> Flights </p>
                    <p className='footer-link-item'> Car Hire </p>
                    <p className='footer-link-item'> Rewards </p>
                    <p className='footer-link-item'> Site Map </p>
                </Col>

                <Col md={ 3 }>
                    <h4 className='footer-header'> Partners </h4>
                    <p className='footer-link-item'> Work With Us </p>
                    <p className='footer-link-item'> Advertise With Us </p>
                    <p className='footer-link-item'> Affiliates </p>
                    <p className='footer-link-item'> Booking Insight </p> 
                </Col>


                <Col md={ 3 }>
                    <h4 className='footer-header' onClick={() => navigate('/help')}> Help </h4>
                    <p className='footer-link-item' onClick={() => navigate('/help-about-us')}> About Us </p>
                    <p className='footer-link-item' onClick={() => navigate('/help-contact-us')}> Contact Us </p>
                    <p className='footer-link-item' onClick={() => navigate('/help-bookings')}> Bookings </p> 
                    <p className='footer-link-item' onClick={() => navigate('/frequently-asked-questions')}> Frequently Asked Questions </p>
                    <p className='footer-link-item' onClick={() => navigate('/help-prices')}> Rewards </p>
                    <p className='footer-link-item' onClick={() => navigate('/help')}> Terms and Conditions </p>
                </Col>


                <Col md={ 3 }>
                    <h4 className='footer-header'> Connect with Us </h4>
                    <p className='footer-link-icon'> <SiGmail size={ 22 } /> </p>
                    <p className='footer-link-icon'> <BsFacebook size={ 22 } /> </p>
                    <p className='footer-link-icon'> <GrTwitter size={ 22 } /> </p>
                    <p className='footer-link-icon'> <AiFillInstagram size={ 22 } /> </p>
                    <p className='footer-link-icon'> <BsYoutube size={ 22 } /> </p>
                    <p className='footer-link-icon'> <BsLinkedin size={ 22 } /> </p>
                </Col>


                <Col md={ 4 }>
                    <h4 className='footer-header'> Newsletter Signup </h4>
                    {/* <Form.Control type='email' placeholder='email' className='newsletter-textbox' />
                    <Button variant='custom' className='newsletter-button' >Subscribe</Button> 
                    <p>Subscribe to get all the latest updates</p> */}    

                    <InputGroup>
                        <Form.Control type='email' placeholder='email@example.com' className='newsletter-textbox' aria-label='email' aria-describedby='basic-addon-2' />
                        <Button variant='custom' className='newsletter-button' id='button-addon'>Subscribe</Button>
                    </InputGroup>
                    <p className='subscribe-updates-text'>Subscribe to get all the latest updates</p>
                </Col>

            </Row>

            <hr />

            <Row>
                <Col>
                    <h6 className='rights-reserved-text'>All rights reserved | <AiOutlineCopyrightCircle /> 2023.</h6>
                </Col>
            </Row>



            


        </footer>
        
    )

}

export default Footer