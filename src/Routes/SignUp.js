import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import { BsFacebook, BsApple, BsGoogle } from 'react-icons/bs'









const SignUp = ( ) => {

    const navigate = useNavigate()

// making certain component always displays from top on initial render.
    useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        })
    })

    return (
        <div>
            <section className='login-header-nav'>
                <img src={ skyscanner_1 } alt='' width={ 200 } />
            </section>

            <section className='login-form-section'>
                <h4 className='sign-in-header-text'>Create an account</h4>

                <Form className='login-form-wrapper'> 
                    <Form.Control className='login-form-control' type='text' placeholder='Email' />
                    <Form.Control className='login-form-control' type='text' placeholder='First Name' />
                    <Form.Control className='login-form-control' type='text' placeholder='Last Name' />
                    <Form.Control className='login-form-control' type='password' placeholder='Password' />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label='Keep me signed in' />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label="I'd like to receive travel deals, special offers and other information from Hotels via email." />

                    <Button variant='custom' className='sign-in-btn'>Create account</Button>

                    <p className='tnc-text'>By signing up, I agree to the <span className='blue'>Terms and Conditions</span> and <span className='blue'>Privacy Statement</span></p>

                    <p className='sign-in-options-text'>Already have an account? <span className='blue' onClick={() => navigate('/login')}>Sign in</span></p>

                    <p className='sign-in-options-text mb-4'>Or continue with</p>

                    <Row>
                        <Col> <BsFacebook /> </Col>

                        <Col> <BsApple /> </Col>

                        <Col> <BsGoogle /> </Col>
                    </Row>

                </Form>


            </section>
        </div>
    )

}



export default SignUp