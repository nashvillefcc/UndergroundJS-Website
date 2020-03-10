import React from 'react';


const Map = () => {

  return (
    <>
              <h2 style={{ textAlign: 'center' }}>Venue</h2>
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-lg-6 col">
            <h4>Address:</h4>
            <h5>Rockettown</h5>
            <p>601 4th Ave S</p> 
            <p>Nashville, TN 37210</p>
          </div>
          <iframe title="venue_map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12885.977554957912!2d-86.7731944!3d36.1545223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15072ff420bee651!2sRocketown!5e0!3m2!1sen!2sus!4v1583542114036!5m2!1sen!2sus" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
        </div>
    </>
  );
};

export default Map