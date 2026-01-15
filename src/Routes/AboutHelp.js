import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from './NavBar';
import Footer from './Footer';
import traveler from '../Media Files/traveler.png';
import upcycling from '../Media Files/upcycling.png';
import larry from '../Media Files/Team Members Images/larry.webp';
import priscilla from '../Media Files/Team Members Images/priscilla.webp';
import nat from '../Media Files/Team Members Images/nat.avif';
import marian from '../Media Files/Team Members Images/marian.jpg';
import aku_shika from '../Media Files/Team Members Images/aku-shika.jpg';

const AboutHelp = () => {
  //component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  let teams_array = [
    {
      name: 'Larry N. N. Williams',
      position: 'President & CEO',
      img_src: larry,
      about:
        'It is our pleasure to introduce the driving force behind SwiftStay, our esteemed CEO, Larry Nii Nai Williams. With a vision that transcends boundaries and a passion for redefining the way we experience travel, Larry leads our team towards new horizons in the world of hospitality. A seasoned leader with a profound understanding of the travel industry, Larry brings a wealth of experience to StaySwift. His journey is marked by a relentless commitment to innovation, customer satisfaction, and a deep appreciation for the transformative power of travel.',
    },
    {
      name: 'Priscilla M. Bonsu',
      position: 'Chief Financial Officer',
      img_src: aku_shika,
      about:
        'It is with great pleasure that we introduce the financial maestro behind the scenes at SwiftStay, our esteemed Chief Financial Officer, Oswell Naa Aku-Shika. With a keen eye for financial strategy and a commitment to fiscal excellence, Oswell plays a pivotal role in shaping the financial landscape of our organization.A seasoned professional with a proven track record in finance, Oswell brings a wealth of experience to StaySwift.',
    },
    {
      name: 'Oswell N. Aku-Shika',
      position: 'Chief Marketing Officer',
      img_src: priscilla,
      about:
        "It is our pleasure to introduce the creative visionary driving the heartbeat of our brand, StaySwift's Chief Marketing Officer, Priscilla Mensah Bonsu. With a passion for storytelling and a knack for building meaningful connections, Priscilla is the architect behind the vibrant tapestry of our brand identity.A seasoned marketing expert with a wealth of experience, Priscilla brings a dynamic and innovative approach to StaySwift.",
    },
    {
      name: 'Nathaniel A. Bimpong',
      position: 'Chief Product Officer',
      img_src: nat,
      about:
        'We are thrilled to introduce the driving force behind the innovation and user-centric design at StaySwift, our Chief Product Officer, Nathaniel Amoah Bimpong. With a passion for crafting seamless and delightful user experiences, Nathaniel is the architect of the features and functionalities that make navigating StaySwift a joy for our users. A refined product strategist with a proven track record, Nathaniel brings a wealth of expertise to StaySwift.',
    },
    {
      name: 'Marian Boye-Amoah',
      position: 'Chief UI/UX Officer',
      img_src: marian,
      about:
        'It is with great excitement that we introduce the mastermind behind the visual allure and user-centric design principles at SwiftStay, our Chief UI/UX Officer, Marian Boye-Amoah. With a deep passion for creating immersive and intuitive digital experiences, Marian is the artistic visionary responsible for the seamless and delightful journeys you embark upon when using our platform. A refined expert in the field of User Interface (UI) and User Experience (UX) design, Marian brings a wealth of creative expertise to SwiftStay.',
    },
  ];

  return (
    <div className="hide-overflow">
      <NavbarComponent />

      <section>
        <Row className="about-us-mission-row">
          <h3 className="about-us-mission-text">
            It’s our mission to lead the global transformation to modern and
            sustainable accommodation
          </h3>
        </Row>
      </section>

      <section>
        <Row md={2} xs={1} sm={1} className="about-us-row-generic-style">
          <Col>
            <h3 className="about-us-sub-headers">Travel your way</h3>
          </Col>

          <Col>
            <p>
              When we started in 2003, we set out to do things differently. We
              wanted to show all flight options in one place, creating a simple
              alternative to the confusing sites that make travel feel like hard
              work.
              <br /> <br />
              Fast forward to today and we’ve gone from a flight search engine
              to a global leader in travel. We're proud that more than 100
              million people across the world (that's quite a few!) rely on our
              app and website each month to help them with their travel plans.
              <br /> <br />
              Dedicated to making travel as simple as possible, we help each and
              every one of them find the best options across flights, hotels and
              car hire to book the perfect trip.
              <br /> <br />
              But we’re not stopping there.
            </p>
          </Col>
        </Row>

        <Row md={2} xs={1} sm={1} className="about-us-row-generic-style">
          <Col>
            <h3 className="about-us-sub-headers mb-3 ">
              What we mean by modern travel
            </h3>
            <img src={traveler} alt="" className="column-icon-style" />
          </Col>

          <Col>
            <p>
              Travel is all about freedom. So it makes sense that planning and
              booking your trip should be simple, not a chore.
              <br /> <br />
              We know you're looking for the best prices and most flexibilty to
              choose what's right for you. Which is why we're always hard at
              work making sure our app and website are super straightforward and
              speedy.
              <br /> <br />
              Choose where you want to go, when you want to go and get the very
              best price from thousands of sites without having to look anywhere
              else. Plus, check out all the ways we can help you find a trip
              that's tailored to what you’re looking for, no matter your travel
              style or your budget.
              <br /> <br />
              Feeling flexible? Search ‘Everywhere’ to see where you can go for
              a great price. Got a destination in mind? Use our Price Alerts to
              find out when the fare changes.
              <br /> <br />
              And once you know when and where you’re going, book in just a few
              quick steps, whether on our app or website which are available in
              more than 30 languages.
            </p>
          </Col>
        </Row>

        <Row md={2} xs={1} sm={1} className="about-us-row-generic-style">
          <Col>
            <h3 className="mb-3 about-us-sub-headers">
              What we mean by sustainable travel
            </h3>
            <img src={upcycling} alt="" className="column-icon-style" />
          </Col>

          <Col>
            <p>
              Travel is all about freedom. So it makes sense that planning and
              booking your trip should be simple, not a chore.
              <br /> <br />
              We know you're looking for the best prices and most flexibilty to
              choose what's right for you. Which is why we're always hard at
              work making sure our app and website are super straightforward and
              speedy.
              <br /> <br />
              Choose where you want to go, when you want to go and get the very
              best price from thousands of sites without having to look anywhere
              else. Plus, check out all the ways we can help you find a trip
              that's tailored to what you’re looking for, no matter your travel
              style or your budget.
              <br /> <br />
              Feeling flexible? Search ‘Everywhere’ to see where you can go for
              a great price. Got a destination in mind? Use our Price Alerts to
              find out when the fare changes.
              <br /> <br />
              And once you know when and where you’re going, book in just a few
              quick steps, whether on our app or website which are available in
              more than 30 languages.
            </p>
          </Col>
        </Row>

        <section className="about-us-team-section">
          <h3 className="our-team-header">Our Team</h3>
        </section>

        {teams_array.map((team_member, index) => (
          <Row
            md={2}
            xs={1}
            sm={1}
            className="about-us-row-generic-style our-team-row"
            key={index}
          >
            <Col>
              <img
                src={team_member.img_src}
                alt=""
                className="team-pic-style"
              />
              {/* <h4 className='team-member-name'>{ team_member.name }</h4> */}
            </Col>

            <Col>
              <h3 className="team-member-name">{team_member.name}</h3>
              <h5 className="team-member-position">{team_member.position}</h5>
              <p>{team_member.about}</p>
            </Col>
          </Row>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default AboutHelp;
