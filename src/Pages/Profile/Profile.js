import React from 'react';
import './Profile.css';
import { Card,Row } from 'react-bootstrap';

function Profile() {
  return (
    <>
    <div className="container">
          <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
            <Card.Body>
              <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img src='https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/88-512.png' alt="profile image" />
                  </div>
                </div>
              </Row>
              <div className='text-center'>
                <h3>Max Miller</h3>
                {/* {userprofile.fname + userprofile.lname} {userprofile.email} {userprofile.mobile} {userprofile.gender} {userprofile.location} {userprofile.status} {moment(userprofile.datecreated).format("DD-MM-YYYY")} {userprofile.dateUpdated} */}
                <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- <span></span> </h4>
                <h5><i className="fa-solid fa-mobile"></i>&nbsp;:- <span></span> </h5>
                <h4><i className="fa-solid fa-person"></i>&nbsp;:- <span></span> </h4>
                <h4><i className="fa-solid fa-location-pin location"></i>&nbsp;:- <span></span> </h4>
                <h5>Status&nbsp;:- <span></span> </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
    </>
  )
}

export default Profile