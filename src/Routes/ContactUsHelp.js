import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

// modules
import Footer from './Footer'
import NavbarComponent from './NavBar'










const ContactUsHelp = ( ) => {

    
    // making certain component always displays from top on initial render.
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
    }, [ ])
      
    return (
        <div>
            <NavbarComponent />

            <section className='contact-us-wrapper'>
                <section className='contact-us-header'>
                    <h3 className='contact-us-header-text'>Contact Us</h3>
                    <hr style={{ width: '30%' }} />
                    <p>Have a comment or question?</p> 
                    <p>Just fill out the form below and we'll be in touch as soon as possible.</p>
                </section>

                <section className='contact-us-details-section'>
                    <Form.Group className='mb-4'>
                        <Form.Label>Your email address * </Form.Label>
                        <Form.Control type='email' placeholder='' className='contact-us-textbox text-control-focus-style' />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Your name *</Form.Label>
                        <Form.Control type='text' placeholder='' className='contact-us-textbox text-control-focus-style' />
                    </Form.Group>

                    <Form.Group className='mb-5'>
                        <Form.Label>What can we help you with? *</Form.Label>
                        <Form.Select aria-label='help subject select' className='contact-us-textbox text-control-focus-style'>
                            <option>-- Select subject --</option>
                            <option value='An existing booking'>An existing booking</option>
                            <option value='Searching on our website'>Searching on our website</option>
                            <option value='Website or app feedback'>Website or app feedback</option>
                            <option value='Commercial enquiry'>Commercial enquiry</option>
                            <option value='Something else'>Something else</option>
                        </Form.Select>
                    </Form.Group>

                    <FloatingLabel controlId='floatingTextarea' label='Description *' className='mb-4'>
                        <Form.Control as='textarea' placeholder='' className='description-text-area text-control-focus-style' style={{ height: 150 }} />
                    </FloatingLabel>

                    <div className='attach-files-div mb-4'>
                        <p>Attach file or drop files here</p>
                    </div>

                    <Button variant='custom' className='contact-us-btn'> Submit </Button>

                </section>

            </section>

            <section className='footer-gap'>
            </section>

            <Footer />
        </div>
    )

}



export default ContactUsHelp



