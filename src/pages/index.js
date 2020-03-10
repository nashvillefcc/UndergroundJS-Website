import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'react-bootstrap'
import { Twitter, GitHub } from 'react-feather';
import Layout from '../components/layout'
import Map from '../components/map'
import '../styles/index.scss'

export default () => {
  return (
    <Layout>
      <div className="banner col-lg-12">
          <div className="spacer">
          </div>
          <h1 className="title">
              JavaScript conference hosted in Nashville.
          </h1>
          <div className="cta">
              <a className="btn btn-primary" href="https://sessionize.com/ugjs-2020" component={Link} to="https://sessionize.com/ugjs-2020">
                  Call for Speakers
              </a>
              <a className="btn btn-primary" href="https://www.eventbrite.com/e/undergroundjs-2020-tickets-93439517111?aff=website" component={Link} to="https://www.eventbrite.com/e/undergroundjs-2020-tickets-93439517111?aff=website">
                  Buy Tickets
              </a>
          </div>
      </div>
      <div className="speakers col-lg-12">
        <h2 style={{ textAlign: 'center' }}>Speakers</h2> 
        <div className="row">
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Speaker #1 Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="row">
                <a style={{color:"black"}} className="col-sm-2" href="#">
                  <Twitter />
                </a>
                <a style={{color:"black"}} className="col-sm-2" href="#">
                  <GitHub />
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Speaker #2 Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="row">
                <a style={{color:"black"}} className="col-sm-2" href="#">
                  <Twitter />
                </a>
                <a style={{color:"black"}} className="col-sm-2" href="#">
                  <GitHub />
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Speaker #3 Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="row">
                <a style={{color:"black"}} className="col-sm-2" href="#">
                  <Twitter />
                </a>
                <a style={{color:"black"}} className="col-sm-2" href="#">
                  <GitHub />
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <h4 className="spakersCTA" style={{ textAlign: 'center' }}>BE ONE OF OUR SPEAKERS</h4>
      </div>
      {/* <div className="venue/map col-lg-12">
        <h2 style={{ textAlign: 'center' }}>Venue</h2>
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-lg-6 col">
            <h4>Address:</h4>
            <p>1600 Amphitheatre Parkway</p> 
            <p>Mountain View, CA 94043</p>
          </div> */}
          {/* <img className="col-lg-6" src="https://via.placeholder.com/700x500.jpeg/55595c/ffffff/?text=Google Maps" /> */}
          {/* <iframe title="venue_map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12885.977554957912!2d-86.7731944!3d36.1545223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15072ff420bee651!2sRocketown!5e0!3m2!1sen!2sus!4v1583542114036!5m2!1sen!2sus" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen=""></iframe> */}
          <Map></Map>
        {/* </div> */}

      {/* </div> */}
      <div className="become_a_sponsor_or_volunter col-lg-12" style={{ textAlign: 'center' }}>
        <h3>We Need You</h3>
        <a className="btn btn-primary" href="#" >  Become a Sponsor or Volunter</a>
      </div>
      <div className="sponsors col-lg-12">
        <h2 style={{ textAlign: 'center' }}>Sponsors</h2> 
        <div className="row">
          <a className="col-md-4" src="#">
            <img src="https://via.placeholder.com/350x200.jpeg/55595c/ffffff/?text=Thumbnail" />
          </a>
          <a className="col-md-4" src="#">
            <img  src="https://via.placeholder.com/350x200.jpeg/55595c/ffffff/?text=Thumbnail" />
          </a>
          <a className="col-md-4" src="#">
            <img src="https://via.placeholder.com/350x200.jpeg/55595c/ffffff/?text=Thumbnail" />
          </a>
        </div>
      </div>
    </Layout>
  );
};