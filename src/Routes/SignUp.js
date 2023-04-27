import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import { BsFacebook, BsApple, BsGoogle } from 'react-icons/bs'

import { UserContext } from '../App'
import { firebaseAuth } from '../Configuration/Firebase'








const SignUp = ( ) => {

const navigate = useNavigate()

const { currentUser, setCurrentUser } = useContext( UserContext )


// handling sign up user detail state.
const [ signUpEmail, setSignUpEmail ] = useState('')
const [ signUpFirstName, setSignUpFirstName ] = useState('')
const [ signUpLastName, setSignUpLastName ] = useState('')
const [ signUpPassword, setSignUpPassword ] = useState('')
const [ signUpEmailError, setSignUpEmailError ] = useState( false )
const [ signUpEmailErrorText, setSignUpEmailErrorText ] = useState( null )
const [ signUpFirstNameError, setSignUpFirstNameError ] = useState( false )
const [ signUpLastNameError, setSignUpLastNameError ] = useState( false )
const [ signUpPasswordError, setSignUpPasswordError ] = useState( false )



// updating state values.
const UpdateSignUpEmail = ( event ) => {
    setSignUpEmail( event.target.value.trim() )
    setSignUpEmailError( false )
    setSignUpEmailErrorText( null )
}

const UpdateSignUpFirstName = ( event ) => {
    setSignUpFirstName( event.target.value.trim() )
    setSignUpFirstNameError( null )
}

const UpdateSignUpLastName = ( event ) => {
    setSignUpLastName( event.target.value.trim() )
    setSignUpLastNameError( null ) 
}

const UpdateSignUpPassword = ( event ) => {
    setSignUpPassword( event.target.value )
    setSignUpPasswordError( null )
}



// function to create user with email and password.
const CreateNewUser = async ( ) => {

    try {            

        if ( signUpEmail.length < 1 || signUpFirstName.length < 1 || signUpLastName.length < 1 || signUpPassword.length < 1 ) {
            // console.log(`email trimmed = ${ signUpEmail }`)
            // console.log(`first name untrimmed = ${ signUpFirstName }`)
    
            // authenticating the sign up email field. 0240047236
            if ( signUpEmail.length < 1 ) {
                // console.log('sign up email empty')
                setSignUpEmailError( true )
            }
            else {
                setSignUpEmailError( false )
            }


            // authenticating the sign up first name field. 
            if ( signUpFirstName.length < 1 ) {
                // console.log('sign up email empty')
                setSignUpFirstNameError( true )
            }
            else {
                setSignUpFirstNameError( false )
            }


            // authenticating the sign up last name field. 
            if ( signUpLastName.length < 1 ) {
                // console.log('sign up email empty')
                setSignUpLastNameError( true )
            }
            else {
                setSignUpLastNameError( false )
            }
            

            // authenticating the password field. 
            if ( signUpPassword.length < 1 ) {
                // console.log('sign up email empty')
                setSignUpPasswordError( true )
            }
            else {
                setSignUpPasswordError( false )
            }

    }

    else {

        let existingUser = firebaseAuth.currentUser
        if( !existingUser ) {
            let userCredentials = await firebaseAuth.createUserWithEmailAndPassword( signUpEmail, signUpPassword )
            if( userCredentials ) {
                let userProfile = firebaseAuth.currentUser
                let user = {
                    email: userCredentials.user.email,
                    photoUrl: userCredentials.user.photoURL,
                    displayName: signUpFirstName
                }
            userProfile.updateProfile( user )
            setCurrentUser( user )
            console.log('user created.') 
            navigate( -1 )
        }
    } 
    else {
        throw new Error('a user is already logged in..')
    }
}

}
    catch( error ) {
        switch( error.code ) {
            case 'auth/network-request-failed':
                setSignUpEmailErrorText( error.message )
                throw new Error('Server could not be reached. Please make sure you have a good internet connection and try again.')
            case 'auth/invalid-email':
                setSignUpEmailErrorText( error.message )
                throw new Error('Your email is invalid. Please enter a valid email and try again')
            default:
                setSignUpEmailErrorText( error.message )
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
                <h4 className='sign-in-header-text'>Create an account</h4>
                <h4 className='sign-in-header-text mb-5'>
                    { currentUser ? currentUser.email : '' }
                </h4>

                <Form className='login-form-wrapper'> 
                    <Form.Group>
                        <Form.Control className={ signUpFirstNameError ? 'login-form-control-error' : 'login-form-control' } type='text' placeholder='First Name *' onChange={ UpdateSignUpFirstName } value={ signUpFirstName } />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control className={ signUpLastNameError ? 'login-form-control-error' : 'login-form-control' } type='text' placeholder='Last Name *' onChange={ UpdateSignUpLastName } value={ signUpLastName } />
                    </Form.Group>

                    <Form.Group>
                        <Form.Text className='email-error-text'>{ signUpEmailErrorText }</Form.Text>
                        <Form.Control className={ signUpEmailError ? 'login-form-control-error' : 'login-form-control' } type='text' placeholder='Email *' onChange={ UpdateSignUpEmail }  value={ signUpEmail } />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control className={ signUpPasswordError ? 'login-form-control-error' : 'login-form-control' } type='password' placeholder='Password *' onChange={ UpdateSignUpPassword } value={ signUpPassword } />
                    </Form.Group>

                    <Form.Text className='mb-4'>All fields with * are required.</Form.Text>

                    {/* <Form.Check className='login-form-control-checkbox' type='checkbox' label='Keep me signed in' />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label="I'd like to receive travel deals, special offers and other information from Hotels via email." /> */}

                    <Button variant='custom' className='sign-in-btn' onClick={ CreateNewUser }>Create account</Button>

                    {/* <Button variant='custom' className='sign-in-btn' onClick={ SignOutUser }>Sign Out</Button> */}

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