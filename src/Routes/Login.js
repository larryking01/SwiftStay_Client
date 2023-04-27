import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import { BsFacebook, BsApple, BsGoogle } from 'react-icons/bs'

import { firebaseAuth } from '../Configuration/Firebase'
import { UserContext } from '../App'








const Login = ( ) => {

    const navigate = useNavigate()

    // destructuring user context.
    const { currentUser, setCurrentUser } = useContext( UserContext )


    // handling user login state
    const [ logInUserEmail, setLogInUserEmail ] = useState('')
    const [ logInUserPassword, setLogInUserPassword ] = useState('')

    const UpdateLogInUserEmail = ( event ) => {
        setLogInUserEmail( event.target.value )
    }

    const UpdateLogInUserPassword = ( event ) => {
        setLogInUserPassword( event.target.value )
    }


    // function to log user in.
    const SignInUser = async ( ) => {
        try {
            let existingUser = firebaseAuth.currentUser
            if( !existingUser ) {
                let userCredentials = await firebaseAuth.signInWithEmailAndPassword( logInUserEmail, logInUserPassword )
                if( userCredentials ) {
                    console.log('display name is')
                    console.log( userCredentials.user )
                    let user = {
                        email: userCredentials.user.email,
                        displayName: userCredentials.user.displayName,
                        photoUrl: userCredentials.user.photoURL
                    }
                    setCurrentUser( user )
                    console.log('user signed in')
                    navigate( -1 )
                }
            }
            else {
                throw new Error('a user is already logged in')
            }
        }
        catch( error ) {
            switch( error.code ) {
                case 'auth/network-request-failed':
                    throw new Error('Server could not be reached. Please make sure you have a good internet connection and try again.')
                case 'auth/invalid-email':
                    throw new Error('Your email is invalid. Please enter a valid email and try again')
                default:
                    throw new Error(`${ error.message }`)
                }
        }
    }



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
                <img className='loginregister-brand-logo' src={ skyscanner_1 } alt='' width={ 200 } onClick={() => navigate('/')} />
            </section>

            <section className='login-form-section'>
                <h4 className='sign-in-header-text'>Sign in</h4>

                <Form className='login-form-wrapper'> 
                    <Form.Control className='login-form-control' type='text' placeholder='Email' onChange={ UpdateLogInUserEmail }  value={ logInUserEmail } />
                    <Form.Control className='login-form-control' type='password' placeholder='Password' onChange={ UpdateLogInUserPassword } value={ logInUserPassword } />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label='Keep me signed in' />
                    
                    <Button variant='custom' className='sign-in-btn' onClick={ SignInUser }>Sign in</Button>

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