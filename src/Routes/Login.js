import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { BsFacebook, BsApple, BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

// modules
import { firebaseAuth } from '../Configuration/Firebase'
import { UserContext } from '../App'








const Login = ( ) => {

    const navigate = useNavigate()

    // destructuring user context.
    const { currentUser, setCurrentUser } = useContext( UserContext )


    // handling user login state
    const [ logInUserEmail, setLogInUserEmail ] = useState('')
    const [ logInUserPassword, setLogInUserPassword ] = useState('')

    // handling user input errors.
    const [ emailErrorExists, setEmailErrorExists ] = useState( false )
    const [ passwordErrorExists, setPasswordErrorExists ] = useState( false )

    const [ emailErrorMessage, setEmailErrorMessage ] = useState( null )
    const [ passwordErrorMessage, setPasswordErrorMessage ] = useState( null )
    const [ otherError, setOtherError ] = useState( null ) 

    const [ passwordVisible, setPasswordVisible ] = useState( false )


    const TogglePasswordVisible = ( ) => {
        setPasswordVisible( !passwordVisible )
    }    
    

    const UpdateLogInUserEmail = ( event ) => {
        setEmailErrorExists( false )
        setLogInUserEmail( event.target.value.trim() )
    }

    const UpdateLogInUserPassword = ( event ) => {
        setPasswordErrorExists( false )
        setLogInUserPassword( event.target.value )
    }


    // function to log user in.
    const SignInUser = async ( ) => {

        try {
            // resetting all error states
            setEmailErrorExists( false )
            setPasswordErrorExists( false )
            setOtherError( null )


            // ensuring form does not submit if any required field is empty. ( step 1 )
            if ( logInUserEmail.length < 1 || logInUserPassword.length < 1 ) {

                if( logInUserEmail.length < 1 ) {
                    setEmailErrorExists( true )
                    setEmailErrorMessage('This field cannot be empty *')
                } 
                else {  setEmailErrorExists( false )}

                if( logInUserPassword.length < 1 ) {
                    setPasswordErrorExists( true )
                    setPasswordErrorMessage('This field cannot be empty *')
                } 
                else {  setPasswordErrorExists( false )}

            }

            else {

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
                        navigate('/')
                    }
                }
                else {
                    throw new Error('a user is already logged in')
                }
        }

        }
        catch( error ) {
            switch( error.code ) {
                case 'auth/network-request-failed':
                    setOtherError('Sorry, your account could not be created due to a poor internet connection. Try again when you have a stable network.')
                    throw new Error('Server could not be reached. Please make sure you have a good internet connection and try again.')
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
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [ ])


    // website brand name.
    // SwiftStay, BookHaven, Coast Hotels, SnapStay, RoomRover
    const brand_name = 'SwiftStay'


    return (

        <div className='log-in-wrapper'>
            <section>
                {/* <img className='log-in-brand-logo' onClick={() => navigate('/')} /> */}
                <h3 className='log-in-brand-logo' onClick={() => navigate('/')}>{ brand_name }</h3>
            </section>

            <section className='login-account-section'>
                <h4 className='log-in-header-text'>Login to your account</h4>
                <p className='login-other-error-text'>{ otherError ? otherError : null }</p>
                <h4 className='login-header-text mb-5'>
                    { currentUser ? currentUser.email : '' }
                </h4>
            </section>


            <section className='login-form'>
                <Form> 
                    <Row md={ 2 } xs={ 1 } sm={ 1 }>
                        <Col>
                            <div className='login-input-group-margin'>
                                <Form.Text>{ emailErrorExists ? emailErrorMessage : 'Email *'}</Form.Text>
                                <InputGroup className={ emailErrorExists ? 'login-input-group-error' : 'login-input-group-style' }>
                                    <Form.Control className='login-email-control' type='email' placeholder='' onChange={ UpdateLogInUserEmail } value={ logInUserEmail } />
                                    <InputGroup.Text>{ <AiOutlineMail /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>


                        <Col>
                            <div className='login-input-group-margin'>
                                <Form.Text>{ passwordErrorExists ? passwordErrorMessage : 'Password *'}</Form.Text>
                                <InputGroup className={ passwordErrorExists ? 'login-input-group-error' : 'login-input-group-style' }>
                                    <Form.Control className='login-password-control' type={ passwordVisible ? 'text' : 'password' } placeholder='' onChange={ UpdateLogInUserPassword } value={ logInUserPassword } />
                                    <InputGroup.Text className='login-input-group-text' onClick={ TogglePasswordVisible }>{ passwordVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill /> }</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>

                    </Row>

                    <Button variant='custom' className='login-btn mb-3' onClick={ SignInUser }>Sign in</Button>


                    <section>
                        {/* <Row className='mb-5'>
                            <p className='continue-with-text'>Or continue with</p>

                            <Col className='alt-sign-in-icon'>
                                <BsGoogle size={ 19 } />
                            </Col>

                            <Col className='alt-sign-in-icon'>
                                <BsApple size={ 19 } />
                            </Col>

                            <Col className='alt-sign-in-icon'>
                                <BsFacebook size={ 19 } />
                            </Col>
                        </Row> */}

                        <Row>
                            <p className='create-account-text'>Don't have an account? <span className='sign-up-span' onClick={() => navigate('/sign-up')}>Create One</span></p>
                            <p className='forgot-password-text'>Forgot password?</p>
                            <p className='login-tnc-text'>By signing in, I agree to the <span className='login-tnc-span'>Terms and Conditions</span> and <span className='login-tnc-span'>Privacy Statement</span></p>
                        </Row>


                    </section>





                </Form>


            </section>
        </div>
    )

}



export default Login