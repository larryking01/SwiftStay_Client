import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'






const Footer = () => {

    
    
    return (

        <footer className='footer-container'>
            <Row xs={ 1 } md={ 4 } >
                <Col>
                    <h4 className='footer-header'> Our Products </h4>
                    <Link> <p className='footer-link-item'> Hotel Express Deals </p> </Link>
                    <Link> <p className='footer-link-item'> Hotels </p> </Link>
                    <Link> <p className='footer-link-item'> Cars </p> </Link>
                    <Link> <p className='footer-link-item'> Flights </p> </Link>
                    <Link> <p className='footer-link-item'> Bundle + Save </p></Link>
                    <Link> <p className='footer-link-item'> Cruises </p> </Link>
                </Col>

                <Col>
                    <h4 className='footer-header'> About Skyscanner </h4>
                    <Link> <p className='footer-link-item'> Contact Us </p></Link>
                    <Link> <p className='footer-link-item'> Our Story </p> </Link>
                    <Link> <p className='footer-link-item'> Careers </p> </Link>
                    <Link> <p className='footer-link-item'> Press Center </p> </Link>
                    <Link> <p className='footer-link-item'> Privacy Policy </p></Link>
                    <Link> <p className='footer-link-item'> Terms and Conditions </p></Link>
                </Col>

                <Col>
                    <h4 className='footer-header'> Partner with Skyscanner </h4>
                    <Link> <p className='footer-link-item'> Add Your Hotel </p> </Link>
                    <Link> <p className='footer-link-item'> Priceline Partner Solutions </p></Link>
                    <Link> <p className='footer-link-item'> Advertise </p> </Link>
                </Col>

                <Col>
                    <h4 className='footer-header'> Connect with Skyscanner </h4>
                    <Link> <p className='footer-link-item'> Facebook </p> </Link>
                    <Link> <p className='footer-link-item'> Twitter </p> </Link>
                    <Link> <p className='footer-link-item'> Instagram </p> </Link>
                    <Link> <p className='footer-link-item'> YouTube </p> </Link>
                </Col>

            </Row>


            


        </footer>
        
    )

}

export default Footer