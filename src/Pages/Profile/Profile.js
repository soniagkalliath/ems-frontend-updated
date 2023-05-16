import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Card,Row } from 'react-bootstrap';
import { getauser } from '../../services/allapis';
import { useParams } from 'react-router-dom';
import Spinners from '../../Components/Spinners/Spinners';
import { BASE_URL } from '../../services/baseurl';

function Profile() {

  const {id} = useParams()
  // console.log(id);
  const [user,setUser] = useState({})
  const [showspin,setShowSpin] = useState(true);

  const getuserDetails = async()=>{
    const response = await getauser(id)
    // console.log(response.id);
    if(response.status==200){
      const {userDetails} =response.data
    setUser(userDetails)
    }else{
      console.log("Error");
    }
    
  }

  console.log(user);
  useEffect(()=>{
    getuserDetails()
    setTimeout(()=>{
     
      setShowSpin(false)
  },2000)
  },[])

  return (
    <>

    {
      showspin?<Spinners/>:
      <div className="container" style={{height:'70vh'}}>
          <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
            <Card.Body>
              <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img src={`${BASE_URL}/uploads/${user.profile}`} alt="profile image" />
                  </div>
                </div>
              </Row>
              <div className='text-center'>
                <h3>{user.fname +" "+ user.lname}</h3>
                {/*       {moment(userprofile.datecreated).format("DD-MM-YYYY")} {userprofile.dateUpdated} */}
                <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- <span>{user.email}</span> </h4>
                <h5><i className="fa-solid fa-mobile"></i>&nbsp;:- <span>{user.mobile}</span> </h5>
                <h4><i className="fa-solid fa-person"></i>&nbsp;:- <span>{user.gender}</span> </h4>
                <h4><i className="fa-solid fa-location-pin location"></i>&nbsp;:- <span>{user.location}</span> </h4>
                <h5>Status&nbsp;:- <span>{user.status}</span> </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
}

    </>
  )
}

export default Profile