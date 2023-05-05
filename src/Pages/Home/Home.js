import React,{useState,useEffect, useContext} from 'react';
import './Home.css';
import { Form ,Button, Spinner, Alert} from 'react-bootstrap';
import Tables from '../../Components/Tables/Tables';
import { useNavigate } from 'react-router-dom';
import Spinners from '../../Components/Spinners/Spinners';
import { addData } from '../../Components/Contexts/ContextProvider';

function Home() {

  const navigate = useNavigate()
  const [showspin,setShowSpin] = useState(true);
  const { useradd, setUseradd } = useContext(addData);

  const adduser = () => {
    navigate("/register")
  }

  useEffect(()=>{
    
    setTimeout(()=>{
      // userGet()
        setShowSpin(false)
    },2000)
  })
  return (
    <>
    {
      useradd? <Alert variant="success" onClose={() => setUseradd('')} dismissible>
      {useradd.fname.toUpperCase()} Succesfully Registered
    </Alert>:""
    }
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
      {
        showspin ? <Spinners/>:<Tables/>
      }
      
    </div>
    </>
  )
}

export default Home