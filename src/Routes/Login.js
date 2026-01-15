import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

// modules
import { UserContext } from '../App';
import appNamesArray from '../data/appNames';

const Login = () => {
  const brand_name = appNamesArray[0];
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorExists, setEmailErrorExists] = useState(false);
  const [passwordErrorExists, setPasswordErrorExists] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [otherError, setOtherError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);


  const TogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const UpdateEmail = (event) => {
    setEmailErrorExists(false);
    setEmail(event.target.value.trim());
  };

  const UpdatePassword = (event) => {
    setPasswordErrorExists(false);
    setPassword(event.target.value);
  };



  const SignInUser = async () => {
    try {
      setEmailErrorExists(false);
      setPasswordErrorExists(false);
      setOtherError(null);

      if (email.length < 1 || password.length < 1) {
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
      } else {
        // if (!existingUser) {
        //   let user = {
        //     email: email,
        //     password: password,
        //   }
          // make api call to create user
          // console.log("user credentials", user);
        // } else {
        //   alert('A user is already logged in. Please log out before creating a new account.');
        //   // throw new Error('a user is already logged in..');
        // }
      }
    } catch (error) {
      // handle errors appropriately
    }
  };



  return (
    <div className="log-in-wrapper">
      <section>
        <h3 className="log-in-brand-logo" onClick={() => navigate('/')}>
          {brand_name}
        </h3>
      </section>

      <section className="login-account-section">
        <h4 className="log-in-header-text">Login to your account</h4>
        <p className="login-other-error-text">
          {otherError ? otherError : null}
        </p>
        <h4 className="login-header-text mb-5">
          {currentUser ? currentUser.email : ''}
        </h4>
      </section>

      <section className="login-form">
        <Form>
          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="login-input-group-margin">
                <InputGroup
                  className={
                    emailErrorExists
                      ? 'login-input-group-error'
                      : 'login-input-group-style'
                  }
                >
                  <Form.Control
                    className="login-email-control"
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
              <div className="login-input-group-margin">
                <InputGroup
                  className={
                    passwordErrorExists
                      ? 'login-input-group-error'
                      : 'login-input-group-style'
                  }
                >
                  <Form.Control
                    className="login-password-control"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password *"
                    onChange={UpdatePassword}
                    value={password}
                  />
                  <InputGroup.Text
                    className="login-input-group-text"
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

          <Button
            variant="custom"
            className="login-btn mb-3"
            onClick={SignInUser}
          >
            Sign in
          </Button>

          <section>
            <Row>
              <p className="create-account-text">
                Don't have an account?{' '}
                <span
                  className="sign-up-span"
                  onClick={() => navigate('/sign-up')}
                >
                  Create One
                </span>
              </p>
              <p className="forgot-password-text">Forgot password?</p>
              <p className="login-tnc-text">
                By signing in, I agree to the{' '}
                <span className="login-tnc-span">Terms and Conditions</span> and{' '}
                <span className="login-tnc-span">Privacy Statement</span>
              </p>
            </Row>
          </section>
        </Form>
      </section>
    </div>
  );
};

export default Login;
