import React from 'react';
import './Edit.css';
import { Card,Row,Form,Button } from 'react-bootstrap';
import Select from 'react-select';

function Edit() {
  // status optios
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];
  return (
    <>
    <div className="container">
          <h2 className='text-center mt-1'>Update Your Details</h2>

          <Card className='shadow mt-3 p-3'>
            <div className="profile_div text-center">
              <img src='https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/88-512.png' alt="img" />
            </div>

            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  {/* value={inputdata.fname} onChange={setInputValue} */}
                  <Form.Control type="text" name='fname'  placeholder='Enter FirstName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  {/* value={inputdata.lname} onChange={setInputValue} */}
                  <Form.Control type="text" name='lname'  placeholder='Enter LastName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  {/* value={inputdata.email} onChange={setInputValue} */}
                  <Form.Control type="email" name='email'  placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  {/* value={inputdata.mobile} onChange={setInputValue} */}
                  <Form.Control type="text" name='mobile'  placeholder='Enter Mobile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  {/* onChange={setInputValue} */}
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    
                  />
                  {/* onChange={setInputValue} */}
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>
                  {/* onChange={setStatusValue} */}
                  <Select options={options}   />                
                  </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profile</Form.Label>
                  {/* onChange={setProfile} */}
                  <Form.Control type="file" name='user_profile'   placeholder='Select Your Profile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  {/* value={inputdata.location} onChange={setInputValue} */}
                  <Form.Control type="text" name='location'  placeholder='Enter Your Location' />
                </Form.Group>
                {/* onClick={submitUserData} */}
                <Button variant="primary" type="submit" >
                  Submit
                </Button>
              </Row>

            </Form>
          </Card>
          {/* <ToastContainer position="top-center" /> */}
    </div>
    </>
  )
}

export default Edit