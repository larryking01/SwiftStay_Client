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


// updating state values.
const UpdateSignUpFirstName = ( event ) => {
    setSignUpFirstName( event.target.value )
}

const UpdateSignUpLastName = ( event ) => {
    setSignUpLastName( event.target.value )
}

const UpdateSignUpEmail = ( event ) => {
    setSignUpEmail( event.target.value )
}

const UpdateSignUpPassword = ( event ) => {
    setSignUpPassword( event.target.value )
}


// function to create user with email and password.
const CreateNewUser = async ( ) => {
    try {
        let existingUser = firebaseAuth.currentUser
        if(!existingUser) {
            let userCredentials = await firebaseAuth.createUserWithEmailAndPassword( signUpEmail, signUpPassword )
            if( userCredentials ) {
                let user = {
                    email: userCredentials.user.email,
                    displayName: userCredentials.user.displayName
                }
            setCurrentUser( user )
            console.log('user created.') 
            console.log( currentUser )
        }
        } 
        else {
            throw new Error('a user is already logged in..')
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




// function sign out user.
const SignOutUser = async ( ) => {
    await firebaseAuth.signOut()
    console.log('user signed out')
    setCurrentUser( null ) 

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
                <img src={ skyscanner_1 } alt='' width={ 200 } />
            </section>

            <section className='login-form-section'>
                <h4 className='sign-in-header-text'>Create an account</h4>
                <h4 className='sign-in-header-text mb-5'>
                    { currentUser ? currentUser.email : '' }
                </h4>

                <Form className='login-form-wrapper'> 
                    <Form.Control className='login-form-control' type='text' placeholder='Email' onChange={ UpdateSignUpEmail }  value={ signUpEmail } />
                    <Form.Control className='login-form-control' type='text' placeholder='First Name' onChange={ UpdateSignUpFirstName } value={ signUpFirstName } />
                    <Form.Control className='login-form-control' type='text' placeholder='Last Name' onChange={ UpdateSignUpLastName } value={ signUpLastName } />
                    <Form.Control className='login-form-control' type='password' placeholder='Password' onChange={ UpdateSignUpPassword } value={ signUpPassword } />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label='Keep me signed in' />
                    <Form.Check className='login-form-control-checkbox' type='checkbox' label="I'd like to receive travel deals, special offers and other information from Hotels via email." />

                    <Button variant='custom' className='sign-in-btn' onClick={ CreateNewUser }>Create account</Button>

                    <Button variant='custom' className='sign-in-btn' onClick={ SignOutUser }>Sign Out</Button>


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