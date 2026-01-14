import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

import Footer from './Footer'
import NavbarComponent from './NavBar'










const ContactUsHelp = ( ) => {

    
    // component always displays from top on initial render.
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
    }, [ ])


    // handling state.
    const [ customerEmail, setCustomerEmail ] = useState('')
    const [ customerName, setCustomerName ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ submitComplaintError, setSubmitComplaintError ] = useState('')


    const UpdateCustomerEmail = ( event ) => {
        setCustomerEmail( event.target.value )
    }

    const UpdateCustomerName = ( event ) => {
        setCustomerName( event.target.value )
    }

    const UpdateSubject = ( event ) => {
        setSubject( event.target.value )
    }

    const UpdateDescription = ( event ) => {
        setDescription( event.target.value )
    }


    const HandleComplaintSubmit = ( ) => {

        let regex = /^(?:(?:[^<>()[\].,;:\s@\"]+(?:\.[^<>()[\].,;:\s@\"]+)*)|(\".+\"))@(?:(?:\[(?:[0-9]{1,3}\.){3}[0-9]{1,3}\])|(?:(?:[a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}))$/
        
        if( customerEmail.length === 0 ) {
            setSubmitComplaintError('No email provided. Email is required')
        }
        else if( customerName.length === 0 ) {
            setSubmitComplaintError('No name provided. Name is a required field')
        }
        else if( subject.length === 0 ) {
            setSubmitComplaintError('No subject provided. Subject is a required field')
        }
        else if( description.length === 0 ) {
            setSubmitComplaintError('No description provided. Description is a required field')
        }
        else if( !customerEmail.match( regex ) ) {
            setSubmitComplaintError('Invalid email. Provide a valid email to continue')
        }
        else {
            setSubmitComplaintError('')
            alert('Your complaint has been submitted successfully. Thank you for reaching out to us and bringing the issue to our attention. Your feedback is highly valuable to us!')
        }
    }


      
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
                        <Form.Control type='email' placeholder='' className='contact-us-textbox text-control-focus-style'
                                      onChange={ UpdateCustomerEmail } value={ customerEmail } />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Your name *</Form.Label>
                        <Form.Control type='text' placeholder='' className='contact-us-textbox text-control-focus-style'
                                      onChange={ UpdateCustomerName } value={ customerName } />
                    </Form.Group>

                    <Form.Group className='mb-5'>
                        <Form.Label>What can we help you with? *</Form.Label>
                        <Form.Select aria-label='help subject select' 
                                     className='contact-us-textbox text-control-focus-style'
                                     onChange={ UpdateSubject } value={ subject }>
                            <option>-- Select subject --</option>
                            <option value='An existing booking'>An existing booking</option>
                            <option value='Searching on our website'>Searching on our website</option>
                            <option value='Website or app feedback'>Website or app feedback</option>
                            <option value='Commercial enquiry'>Commercial enquiry</option>
                            <option value='Something else'>Something else</option>
                        </Form.Select>
                    </Form.Group>

                    <FloatingLabel controlId='floatingTextarea' label='Description *' className='mb-4'>
                        <Form.Control as='textarea' placeholder='' className='description-text-area text-control-focus-style' 
                                      style={{ height: 150 }} onChange={ UpdateDescription } value={ description } />
                    </FloatingLabel>

                    <p className='submit-complaint-error-text'>{ submitComplaintError }</p>

                    <Button variant='custom' className='contact-us-btn' onClick={ HandleComplaintSubmit }> Submit </Button>

                </section>

            </section>

            <section className='footer-gap'>
            </section>

            <Footer />
        </div>
    )

}



export default ContactUsHelp



