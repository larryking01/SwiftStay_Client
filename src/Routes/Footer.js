import { useState } from 'react'
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
import emailjs from '@emailjs/browser'




const Footer = () => {

    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [ newsLetterSubscribeError, setNewsletterSubscribeError ] = useState('')

    const UpdateEmailValue = ( event ) => {
        setEmail( event.target.value )
    }


    // emailjs setup.
    let email_js_public_key = '0QP1tSD0brFOQUw2d'
    let email_js_service_id = 'service_4njhe19'
    let email_js_template_id = 'template_dh38jf5'
    let email_js_dynamic_variables = {
        from_name: 'SwiftStay',
        to_name: email,
        recipient: email,
        message: "Thank you for subscribing to our newsletter! 🎉 You're now part of our community. Expect exciting updates, exclusive offers, and valuable insights delivered straight to your inbox. Stay tuned!"
    }


    // handle newsletter subscription.
    const HandleNewsletterSubscription = ( ) => {
        let regex = /^(?:(?:[^<>()[\].,;:\s@\"]+(?:\.[^<>()[\].,;:\s@\"]+)*)|(\".+\"))@(?:(?:\[(?:[0-9]{1,3}\.){3}[0-9]{1,3}\])|(?:(?:[a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}))$/
        if( email.length < 1 ) {
            setNewsletterSubscribeError('No email provided')
        }
        else if( !email.match( regex )) {
            setNewsletterSubscribeError('Invalid email provided')
        }
        else {
            try {
                setNewsletterSubscribeError('')
                alert(`Thank you for subscribing to our newsletter. A confirmation email has been sent to ${ email }`)
                emailjs.send( email_js_service_id, email_js_template_id, email_js_dynamic_variables, email_js_public_key)
                setEmail('')
            }
            catch( error ) {
                console.log( error )
            }
        }
    }




    
    return (

        <footer className='footer-container'>
            <Row xs={ 1 } md={ 4 } >
                
                <Col md={ 3 }>
                    <h4 className='footer-header' onClick={() => navigate('/help')}> Help </h4>
                    <p className='footer-link-item' onClick={() => navigate('/help-about-us')}> About Us </p>
                    <p className='footer-link-item' onClick={() => navigate('/help-contact-us')}> Contact Us </p>
                    <p className='footer-link-item' onClick={() => navigate('/help-bookings')}> Bookings </p> 
                    <p className='footer-link-item' onClick={() => navigate('/frequently-asked-questions')}> Frequently Asked Questions </p>
                    <p className='footer-link-item' onClick={() => navigate('/help')}> Terms and Conditions </p>
                </Col>


                <Col md={ 2 }>
                    <h4 className='footer-header'> Partners </h4>
                    <p className='footer-link-item'> Work With Us </p>
                    <p className='footer-link-item'> Advertise With Us </p>
                    <p className='footer-link-item'> Affiliates </p>
                    <p className='footer-link-item'> Booking Insight </p> 
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
                    <InputGroup>
                        <Form.Control type='email' placeholder='email@example.com' className='newsletter-textbox'
                                      aria-label='email' aria-describedby='basic-addon-2' 
                                      onChange={ UpdateEmailValue } value={ email } />
                        <Button variant='custom' className='newsletter-button' 
                                id='button-addon' onClick={ HandleNewsletterSubscription } >
                                Subscribe
                        </Button>
                    </InputGroup>
                    <p className='subscribe-updates-text'>Subscribe to get all the latest updates</p>
                    <p className='newsletter-subscribe-error'>{ newsLetterSubscribeError }</p>
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