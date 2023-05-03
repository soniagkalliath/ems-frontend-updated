import React from 'react';
import './Home.css';
import { Form ,Button} from 'react-bootstrap';
import Tables from '../../Components/Tables/Tables';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()
  const adduser = () => {
    navigate("/register")
  }
  return (
    <>
    <div className="container">
      <div className="main_div">
        {/* search box add btn */}
        <div className="search_add mt-4 d-flex justify-content-between">
          <div className="search col-lg-4">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
          </div>
          <div className="add_btn">
          <Button onClick={adduser} variant="primary" ><i class="fa-solid fa-plus"></i>&nbsp;Add User</Button>
          </div>
        </div>
        
      </div>
      {/* table */}
      <Tables/>
    </div>
    </>
  )
}

export default Home