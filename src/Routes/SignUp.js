import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  BsFillEyeSlashFill,
  BsFillEyeFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import { UserContext } from '../App';
import appNamesArray from '../data/appNames';





const SignUp = () => {
  const brand_name = appNamesArray[0];
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // handling user input errors.
  const [firstNameErrorExists, setFirstNameErrorExists] = useState(false);
  const [lastNameErrorExists, setLastNameErrorExists] = useState(false);
  const [emailErrorExists, setEmailErrorExists] = useState(false);
  const [passwordErrorExists, setPasswordErrorExists] = useState(false);
  const [confirmPasswordErrorExists, setConfirmPasswordErrorExists] =
    useState(false);

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(null);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [otherError, setOtherError] = useState(null);

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  // updating state values.
  const UpdatefirstName = (event) => {
    setFirstNameErrorExists(false);
    setFirstName(event.target.value.trim());
  };

  const UpdatelastName = (event) => {
    setLastNameErrorExists(false);
    setLastName(event.target.value.trim());
  };

  const UpdateEmail = (event) => {
    setEmailErrorExists(false);
    setEmail(event.target.value.trim());
  };

  const UpdatePassword = (event) => {
    setPasswordErrorExists(false);
    setPassword(event.target.value);
  };

  const UpdateConfirmPassword = (event) => {
    setConfirmPasswordErrorExists(false);
    setConfirmPassword(event.target.value);
  };

  const TogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const ToggleConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const CreateNewUser = async () => {
    try {
      setFirstNameErrorExists(false);
      setLastNameErrorExists(false);
      setEmailErrorExists(false);
      setPasswordErrorExists(false);
      setConfirmPasswordErrorExists(false);
      setOtherError(null);

      if (
        email.length < 1 ||
        firstName.length < 1 ||
        lastName.length < 1 ||
        password.length < 1 ||
        confirmPassword.length < 1
      ) {
        if (firstName.length < 1) {
          setFirstNameErrorExists(true);
          setFirstNameErrorMessage('First name is required *');
        } else {
          setFirstNameErrorExists(false);
        }

        if (lastName.length < 1) {
          setLastNameErrorExists(true);
          setLastNameErrorMessage('Last name is required *');
        } else {
          setLastNameErrorExists(false);
        }

        if (email.length < 1) {
          setEmailErrorExists(true);
          setEmailErrorMessage('E-mail is required *');
        } else {
          setEmailErrorExists(false);
        }

        if (password.length < 1) {
          setPasswordErrorExists(true);
          setPasswordErrorMessage('Password is required *');
        } else {
          setPasswordErrorExists(false);
        }

        if (confirmPassword.length < 1) {
          setConfirmPasswordErrorExists(true);
          setConfirmPasswordErrorMessage('Password confirmation is required *');
        } else {
          setConfirmPasswordErrorExists(false);
        }
      } else if (password !== confirmPassword) {
        setPasswordErrorExists(true);
        setConfirmPasswordErrorExists(true);
        setPasswordErrorMessage('Passwords do not match');
        setConfirmPasswordErrorMessage('Passwords do not match');
      } else if (password === confirmPassword) {
        // if (!existingUser) {
        //   let newUser = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     password: password,
        //   }
          // make api call to create user
          // console.log("new user data", newUser);
        // } else {
          // alert('A user is already logged in. Please log out before creating a new account.');
          // throw new Error('a user is already logged in..');
        // }
      }
    } catch (error) {
      // handle errors appropriately
    }
  };


  return (
    <div className="sign-up-wrapper">
      <section>
        <h3 className="log-in-brand-logo" onClick={() => navigate('/')}>
          {brand_name}
        </h3>
      </section>

      <section className="create-account-section">
        <h4 className="sign-up-header-text">Create an account</h4>
        <p className="other-error-text">{otherError ? otherError : null}</p>
        <h4 className="sign-up-header-text mb-5">
          {currentUser ? currentUser.email : ''}
        </h4>
      </section>

      <section className="sign-up-form">
        <Form>
          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    firstNameErrorExists
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type="text"
                    placeholder="First name *"
                    onChange={UpdatefirstName}
                    value={firstName}
                  />
                  <InputGroup.Text>{<BsFillPersonFill />}</InputGroup.Text>
                </InputGroup>
              </div>
            </Col>

            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    lastNameErrorExists
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type="text"
                    placeholder="Last name *"
                    onChange={UpdatelastName}
                    value={lastName}
                  />
                  <InputGroup.Text>{<BsFillPersonFill />}</InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>

          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    emailErrorExists ? 'input-group-error' : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type="email"
                    placeholder="E-mail *"
                    onChange={UpdateEmail}
                    value={email}
                  />
                  <InputGroup.Text>{<AiOutlineMail />}</InputGroup.Text>
                </InputGroup>
              </div>
            </Col>

            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    passwordErrorExists
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password *"
                    onChange={UpdatePassword}
                    value={password}
                  />
                  <InputGroup.Text
                    className="input-group-text"
                    onClick={TogglePasswordVisible}
                  >
                    {passwordVisible ? (
                      <BsFillEyeFill />
                    ) : (
                      <BsFillEyeSlashFill />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>

          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    confirmPasswordErrorExists
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Confirm password *"
                    onChange={UpdateConfirmPassword}
                    value={confirmPassword}
                  />
                  <InputGroup.Text
                    className="input-group-text"
                    onClick={ToggleConfirmPasswordVisible}
                  >
                    {confirmPasswordVisible ? (
                      <BsFillEyeFill />
                    ) : (
                      <BsFillEyeSlashFill />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>

            <Col>
              <div className="input-group-margin">
                <Button
                  variant="custom"
                  className="sign-up-btn"
                  onClick={CreateNewUser}
                >
                  Create account
                </Button>
              </div>
            </Col>
          </Row>

          <section>
            <Row>
              <p className="sign-up-already-account-text">
                Already have an account?{' '}
                <span
                  className="sign-in-span"
                  onClick={() => navigate('/login')}
                >
                  Sign in
                </span>
              </p>
            </Row>

            <Row className="mb-3">
              <p className="sign-up-tnc-text">
                By signing up, I agree to the{' '}
                <span className="tnc-span">Terms and Conditions</span> and{' '}
                <span className="tnc-span">Privacy Statement</span>
              </p>
            </Row>
          </section>
        </Form>
      </section>
    </div>
  );
};

export default SignUp;
