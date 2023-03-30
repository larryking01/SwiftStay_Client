import React from 'react'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import about_us_bg2 from '../Media Files/Rooms And Suites/about-us-bg2.jpg'
import traveler from '../Media Files/traveler.png'
import upcycling from '../Media Files/upcycling.png'
import team_1 from '../Media Files/team_1.jpg'
// import about_us_bg1 from '../Media Files/Rooms And Suites/about-us-bg1.jpg'
// import about_us_bg3 from '../Media Files/Rooms And Suites/about-us-bg3.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'











const AboutHelp = ( ) => {

    let teams_array = [
        {
            name: 'Larry N. N. Williams', position: 'President & CEO', img_src: team_1, about: 'Matt Goldberg is President and CEO of Tripadvisor, Inc., the largest travel guidance platform in the world. Matt has more than 20 years’ leadership experience across a diversity of sectors, including travel, digital media, e-commerce, and data, where he’s helped drive innovation and expansion across various businesses. Previously, Matt was Executive Vice President, North America and Global Operations for The Trade Desk, a data-driven global media buying and advertising platform. Before joining The Trade Desk, Matt served as Global Head of M&A and Strategic Alliances and Head of India for News Corp, as well as Senior Vice President, Global Market Development and Head of Corporate Development for Qurate, formerly known as QVC. Prior to that, Matt was CEO of Lonely Planet, a travel guide publisher. Matt currently serves on the Board of Directors of Blue Ocean Acquisition Corp (NASDAQ: BOCNU), and is active in philanthropy and nonprofit leadership, including The Burning Man Project and Lumina Foundation. Matt was also the founding director of'
        },
        {
            name: 'Oswell Aku Shika', position: 'Chief Financial Officer', img_src: team_1, about: 'Matt Goldberg is President and CEO of Tripadvisor, Inc., the largest travel guidance platform in the world. Matt has more than 20 years’ leadership experience across a diversity of sectors, including travel, digital media, e-commerce, and data, where he’s helped drive innovation and expansion across various businesses. Previously, Matt was Executive Vice President, North America and Global Operations for The Trade Desk, a data-driven global media buying and advertising platform. Before joining The Trade Desk, Matt served as Global Head of M&A and Strategic Alliances and Head of India for News Corp, as well as Senior Vice President, Global Market Development and Head of Corporate Development for Qurate, formerly known as QVC. Prior to that, Matt was CEO of Lonely Planet, a travel guide publisher. Matt currently serves on the Board of Directors of Blue Ocean Acquisition Corp (NASDAQ: BOCNU), and is active in philanthropy and nonprofit leadership, including The Burning Man Project and Lumina Foundation. Matt was also the founding director of'
        },
        {
            name: 'Priscilla M. Bonsu', position: 'Chief Marketing Officer', img_src: team_1, about: 'Matt Goldberg is President and CEO of Tripadvisor, Inc., the largest travel guidance platform in the world. Matt has more than 20 years’ leadership experience across a diversity of sectors, including travel, digital media, e-commerce, and data, where he’s helped drive innovation and expansion across various businesses. Previously, Matt was Executive Vice President, North America and Global Operations for The Trade Desk, a data-driven global media buying and advertising platform. Before joining The Trade Desk, Matt served as Global Head of M&A and Strategic Alliances and Head of India for News Corp, as well as Senior Vice President, Global Market Development and Head of Corporate Development for Qurate, formerly known as QVC. Prior to that, Matt was CEO of Lonely Planet, a travel guide publisher. Matt currently serves on the Board of Directors of Blue Ocean Acquisition Corp (NASDAQ: BOCNU), and is active in philanthropy and nonprofit leadership, including The Burning Man Project and Lumina Foundation. Matt was also the founding director of'
        },
        {
            name: 'Joseph Dwamena', position: 'Chief Product Officer', img_src: team_1, about: 'Matt Goldberg is President and CEO of Tripadvisor, Inc., the largest travel guidance platform in the world. Matt has more than 20 years’ leadership experience across a diversity of sectors, including travel, digital media, e-commerce, and data, where he’s helped drive innovation and expansion across various businesses. Previously, Matt was Executive Vice President, North America and Global Operations for The Trade Desk, a data-driven global media buying and advertising platform. Before joining The Trade Desk, Matt served as Global Head of M&A and Strategic Alliances and Head of India for News Corp, as well as Senior Vice President, Global Market Development and Head of Corporate Development for Qurate, formerly known as QVC. Prior to that, Matt was CEO of Lonely Planet, a travel guide publisher. Matt currently serves on the Board of Directors of Blue Ocean Acquisition Corp (NASDAQ: BOCNU), and is active in philanthropy and nonprofit leadership, including The Burning Man Project and Lumina Foundation. Matt was also the founding director of'
        },
        {
            name: 'Henry A. Bernard', position: 'Chief Commercial Officer', img_src: team_1, about: 'Matt Goldberg is President and CEO of Tripadvisor, Inc., the largest travel guidance platform in the world. Matt has more than 20 years’ leadership experience across a diversity of sectors, including travel, digital media, e-commerce, and data, where he’s helped drive innovation and expansion across various businesses. Previously, Matt was Executive Vice President, North America and Global Operations for The Trade Desk, a data-driven global media buying and advertising platform. Before joining The Trade Desk, Matt served as Global Head of M&A and Strategic Alliances and Head of India for News Corp, as well as Senior Vice President, Global Market Development and Head of Corporate Development for Qurate, formerly known as QVC. Prior to that, Matt was CEO of Lonely Planet, a travel guide publisher. Matt currently serves on the Board of Directors of Blue Ocean Acquisition Corp (NASDAQ: BOCNU), and is active in philanthropy and nonprofit leadership, including The Burning Man Project and Lumina Foundation. Matt was also the founding director of'
        }

    ]





    return (
        <div>
            <NavbarComponent />

            <section className='about-us-main-section'>
                <img src={ about_us_bg2 } alt='' className='about-us-main-background' />
                <h3 className='img-text'>We're the accommodation company that puts you first.</h3>
            </section>

            <section className='about-us-header-section'>
                <h3 className='main-header-text'>About Skyscanner</h3>
            </section>

            <section>
                <Row md={ 2 } xs={ 1 } sm={ 1 } className='about-us-row-generic-style'>
                    <Col>
                        <h3>Travel your way</h3>
                    </Col>

                    <Col>
                        <p>
                            When we started in 2003, we set out to do things differently. We wanted to show all flight options in one place, creating a simple alternative to the confusing sites that make travel feel like hard work.
                            <br /> <br /> 
                            Fast forward to today and we’ve gone from a flight search engine to a global leader in travel. We're proud that more than 100 million people across the world (that's quite a few!) rely on our app and website each month to help them with their travel plans.
                            <br /> <br />
                            Dedicated to making travel as simple as possible, we help each and every one of them find the best options across flights, hotels and car hire to book the perfect trip.
                            <br /> <br />
                            But we’re not stopping there.
                        </p>
                    </Col>
                </Row>


                <Row className='about-us-mission-row'>
                    <h3 className='about-us-mission-text'>It’s our mission to lead the global transformation to modern and sustainable travel</h3>
                </Row>


                <Row md={ 2 } xs={ 1 } sm={ 1 } className='about-us-row-generic-style'>
                    <Col>
                        <h3 className='mb-3'>What we mean by modern travel</h3>
                        <img src={ traveler } alt='' className='column-icon-style' />
                    </Col>

                    <Col>
                        <p> 
                            Travel is all about freedom. So it makes sense that planning and booking your trip should be simple, not a chore.
                            <br /> <br />
                            We know you're looking for the best prices and most flexibilty to choose what's right for you. Which is why we're always hard at work making sure our app and website are super straightforward and speedy.
                            <br /> <br />
                            Choose where you want to go, when you want to go and get the very best price from thousands of sites without having to look anywhere else. Plus, check out all the ways we can help you find a trip that's tailored to what you’re looking for, no matter your travel style or your budget.
                            <br /> <br />
                            Feeling flexible? Search ‘Everywhere’ to see where you can go for a great price. Got a destination in mind? Use our Price Alerts to find out when the fare changes.
                            <br /> <br />
                            And once you know when and where you’re going, book in just a few quick steps, whether on our app or website which are available in more than 30 languages.
                        </p>
                    </Col>
                </Row>


                <Row md={ 2 } xs={ 1 } sm={ 1 } className='about-us-row-generic-style'>
                    <Col>
                        <h3 className='mb-3'>What we mean by sustainable travel</h3>
                        <img src={ upcycling } alt='' className='column-icon-style' />
                    </Col>

                    <Col>
                        <p> 
                            Travel is all about freedom. So it makes sense that planning and booking your trip should be simple, not a chore.
                            <br /> <br />
                            We know you're looking for the best prices and most flexibilty to choose what's right for you. Which is why we're always hard at work making sure our app and website are super straightforward and speedy.
                            <br /> <br />
                            Choose where you want to go, when you want to go and get the very best price from thousands of sites without having to look anywhere else. Plus, check out all the ways we can help you find a trip that's tailored to what you’re looking for, no matter your travel style or your budget.
                            <br /> <br />
                            Feeling flexible? Search ‘Everywhere’ to see where you can go for a great price. Got a destination in mind? Use our Price Alerts to find out when the fare changes.
                            <br /> <br />
                            And once you know when and where you’re going, book in just a few quick steps, whether on our app or website which are available in more than 30 languages.
                        </p>
                    </Col>
                </Row>

                <section className='about-us-team-section'>
                    <h3>Our Team</h3>
                </section>


                {
                    teams_array.map(( team_member, index ) => (
                        <Row md={ 2 } xs={ 1 } sm={ 1 } className='about-us-row-generic-style our-team-row' key={ index }>
                            <Col>
                                <img src={ team_member.img_src } alt='' className='team-pic-style' />
                            </Col>

                            <Col>
                                <h3>{ team_member.name }</h3>
                                <h5>{ team_member.position }</h5>
                                <p>{ team_member.about }</p>
                            </Col>

                        </Row>
                    ))
                }

            </section>


            <Footer />

        </div>
    )

}



export default AboutHelp



