import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import { BsFacebook, BsApple, BsGoogle, BsFillEyeSlashFill, BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
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
const [ signUpConfirmPassword, setSignUpConfirmPassword ] = useState('')


// handling user input errors.
const [ firstNameErrorExists, setFirstNameErrorExists ] = useState( false )
const [ lastNameErrorExists, setLastNameErrorExists ] = useState( false )
const [ emailErrorExists, setEmailErrorExists ] = useState( false )
const [ passwordErrorExists, setPasswordErrorExists ] = useState( false )
const [ confirmPasswordErrorExists, setConfirmPasswordErrorExists ] = useState( false )

const [ firstNameErrorMessage, setFirstNameErrorMessage ] = useState( null )
const [ lastNameErrorMessage, setLastNameErrorMessage ] = useState( null )
const [ emailErrorMessage, setEmailErrorMessage ] = useState( null )
const [ passwordErrorMessage, setPasswordErrorMessage ] = useState( null )
const [ confirmPasswordErrorMessage, setConfirmPasswordErrorMessage ] = useState( null )

const [ passwordVisible, setPasswordVisible ] = useState( false )
const [ confirmPasswordVisible, setConfirmPasswordVisible ] = useState( false )

const [ otherError, setOtherError ] = useState( null ) 


// updating state values.
const UpdateSignUpFirstName = ( event ) => {
    setFirstNameErrorExists( false )
    setSignUpFirstName( event.target.value.trim() )
}

const UpdateSignUpLastName = ( event ) => {
    setLastNameErrorExists( false )
    setSignUpLastName( event.target.value.trim() )
}

const UpdateSignUpEmail = ( event ) => {
    setEmailErrorExists( false )
    setSignUpEmail( event.target.value.trim() )
}


const UpdateSignUpPassword = ( event ) => {
    setPasswordErrorExists( false )
    setSignUpPassword( event.target.value )
}

const UpdateSignUpConfirmPassword = ( event ) => {
    setConfirmPasswordErrorExists( false )
    setSignUpConfirmPassword( event.target.value )

}


const TogglePasswordVisible = ( ) => {
    setPasswordVisible( !passwordVisible )
}

const ToggleConfirmPasswordVisible = ( ) => {
    setConfirmPasswordVisible( !confirmPasswordVisible )
}




// function to create user with email and password.
const CreateNewUser = async ( ) => {

    try {            
        // resetting all error states
        setFirstNameErrorExists( false )
        setLastNameErrorExists( false )
        setEmailErrorExists( false )
        setPasswordErrorExists( false )
        setConfirmPasswordErrorExists( false )
        setOtherError( null )

        // ensuring form does not submit if any required field is empty. ( step 1 )
        if ( signUpEmail.length < 1 || signUpFirstName.length < 1 || signUpLastName.length < 1 || signUpPassword.length < 1 || signUpConfirmPassword.length < 1 ) {

            if( signUpFirstName.length < 1 ) {
                setFirstNameErrorExists( true )
                setFirstNameErrorMessage('This field cannot be empty *')
            } 
            else { setFirstNameErrorExists( false ) }

            if( signUpLastName.length < 1 ) {
                setLastNameErrorExists( true )
                setLastNameErrorMessage('This field cannot be empty *')
            } 
            else {  setLastNameErrorExists( false )}

            if( signUpEmail.length < 1 ) {
                setEmailErrorExists( true )
                setEmailErrorMessage('This field cannot be empty *')
            } 
            else { setEmailErrorExists( false) }

            if( signUpPassword.length < 1 ) {
                setPasswordErrorExists( true )
                setPasswordErrorMessage('This field cannot be empty *')
            } 
            else { setPasswordErrorExists( false ) }

            if( signUpConfirmPassword.length < 1 ) {
                setConfirmPasswordErrorExists( true )
                setConfirmPasswordErrorMessage('This field cannot be empty *')
            } 
            else { setConfirmPasswordErrorExists( false )}

        }
        // making sure of matching passwords ( step 2 )
        else if ( signUpPassword !== signUpConfirmPassword ) {
            setPasswordErrorExists( true )
            setConfirmPasswordErrorExists( true )
            setPasswordErrorMessage('Passwords do not match')
            setConfirmPasswordErrorMessage('Passwords do not match')
        }
        // actually creating a new user if checks are passed ( step 3 )
        else if ( signUpPassword === signUpConfirmPassword ) {
            console.log('checks passed')
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

    else {
        // do nothing
    }

}
    catch( error ) {
        switch( error.code ) {
            case 'auth/network-request-failed':
                setOtherError('Sorry, your account could not be created due to a poor internet connection. Try again when you have a stable network.')
                throw new Error( error.message )
            case 'auth/invalid-email':
                setOtherError('Your email is invalid. Please enter a valid email and try again')
                throw new Error('Your email is invalid. Please enter a valid email and try again')
            default:
                setOtherError( error.message )
                throw new Error(`${ error.message }`)
        }    
    }

}



// making certain component always displays from top on initial render.
    // useEffect(() => {
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //     })
    // })



    return (

        <div className='sign-up-wrapper'>
            <section>
                <img className='sign-up-brand-logo' src={ skyscanner_1 } alt='' width={ 200 } onClick={() => navigate('/')} />
            </section>

            <section className='create-account-section'>
                <h4 className='sign-up-header-text'>Create an account</h4>
                <p className='other-error-text'>{ otherError ? otherError : null }</p>
                <h4 className='sign-up-header-text mb-5'>
                    { currentUser ? currentUser.email : '' }
                </h4>
            </section>

            <section className='sign-up-form'>
                <Form>
                    <Row md={ 2 } xs={ 1 } sm={ 1 }>
                        <Col>
                            <div className='input-group-margin'>
                                <Form.Text>{ firstNameErrorExists ? firstNameErrorMessage : 'First name *'}</Form.Text>
                                <InputGroup className={ firstNameErrorExists ? 'input-group-error' : 'input-group-style' }>
                                    <Form.Control className='signup-control-focus-style' type='text' placeholder='' onChange={ UpdateSignUpFirstName } value={ signUpFirstName } />
                                    <InputGroup.Text>{ <BsFillPersonFill /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>

                        <Col>
                            <div className='input-group-margin'>
                                <Form.Text>{ lastNameErrorExists ? lastNameErrorMessage : 'Last name *'}</Form.Text>
                                <InputGroup className={ lastNameErrorExists ? 'input-group-error' : 'input-group-style' }>
                                    <Form.Control className='signup-control-focus-style' type='text' placeholder='' onChange={ UpdateSignUpLastName } value={ signUpLastName } />
                                    <InputGroup.Text>{ <BsFillPersonFill /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>


                    <Row md={ 2 } xs={ 1 } sm={ 1 }>
                        <Col>
                            <div className='input-group-margin'>
                                <Form.Text>{ emailErrorExists ? emailErrorMessage : 'Email *'}</Form.Text>
                                <InputGroup className={ emailErrorExists ? 'input-group-error' : 'input-group-style' }>
                                    <Form.Control className='signup-control-focus-style' type='email' placeholder='' onChange={ UpdateSignUpEmail } value={ signUpEmail } />
                                    <InputGroup.Text>{ <AiOutlineMail /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>

                        <Col>
                            <div className='input-group-margin'>
                                <Form.Text>{ passwordErrorExists ? passwordErrorMessage : 'Password *'}</Form.Text>
                                <InputGroup className={ passwordErrorExists ? 'input-group-error' : 'input-group-style' }>
                                    <Form.Control className='signup-control-focus-style' type={ passwordVisible ? 'text' : 'password' } placeholder='' onChange={ UpdateSignUpPassword } value={ signUpPassword } />
                                    <InputGroup.Text className='input-group-text' onClick={ TogglePasswordVisible }>{ passwordVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>

                    </Row>


                    <Row md={ 2 } xs={ 1 } sm={ 1 }>
                        <Col>
                            <div className='input-group-margin'>
                                <Form.Text>{ confirmPasswordErrorExists ? confirmPasswordErrorMessage : 'Confirm password *'}</Form.Text>
                                <InputGroup className={ confirmPasswordErrorExists ? 'input-group-error' : 'input-group-style' }>
                                    <Form.Control className='signup-control-focus-style' type={ confirmPasswordVisible ? 'text' : 'password' } placeholder='' onChange={ UpdateSignUpConfirmPassword }  value={ signUpConfirmPassword } />
                                    <InputGroup.Text className='input-group-text' onClick={ ToggleConfirmPasswordVisible }>{ confirmPasswordVisible ? <BsFillEyeFill/> : <BsFillEyeSlashFill /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>

                        <Col>
                            <div className='input-group-margin'>
                                <Form.Text>Create your account now *</Form.Text>
                                <Button variant='custom' className='sign-up-btn' onClick={ CreateNewUser }>Create account</Button>
                            </div>
                        </Col>

                    </Row>

                    <section>
                        <Row>
                            <p className='sign-up-already-account-text'>Already have an account? <span className='sign-in-span' onClick={ () => navigate('/login')}>Sign in</span></p>
                            <p className='sign-up-continue-with-text'>Or continue with</p>
                        </Row>

                        <Row className='mb-5'>
                            <Col>
                                <BsGoogle className='alt-sign-up-icon' size={ 19 } />
                            </Col>

                            <Col>
                                <BsApple className='alt-sign-up-icon' size={ 19 } />
                            </Col>

                            <Col>
                                <BsFacebook className='alt-sign-up-icon' size={ 19 } />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <p className='sign-up-tnc-text'>By signing up, I agree to the <span className='tnc-span'>Terms and Conditions</span> and <span className='tnc-span'>Privacy Statement</span></p>
                        </Row>

                    </section>

                </Form>

            </section>
        </div>
    )

}



export default SignUp