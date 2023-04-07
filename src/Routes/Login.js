import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import { BsFacebook, BsApple, BsGoogle } from 'react-icons/bs'









const Login = ( ) => {

    const navigate = useNavigate()

    return (
        <div>
            <section className='login-header-nav'>
                <img src={ skyscanner_1 } alt='' width={ 200 } />
            </section>

            <section className='login-form-section'>
                <h4 className='sign-in-header-text'>Sign in</h4>

                <Form className='login-form-wrapper'> 
                    <Form.Control className='login-form-control' type='text' placeholder='Email' />
                    <Form.Control className='login-form-control' type='password' placeholder='Password' />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label='Keep me signed in' />
                    
                    <Button variant='custom' className='sign-in-btn'>Sign in</Button>

                    <p className='tnc-text'>By signing in, I agree to the <span className='blue'>Terms and Conditions</span> and <span className='blue'>Privacy Statement</span></p>

                    <p className='sign-in-options-text blue mb-4'>Forgot password?</p>

                    <p className='sign-in-options-text'>Don't have an account? <span className='blue' onClick={() => navigate('/sign-up')}>Create One</span></p>

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



export default Login