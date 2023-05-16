import React,{useState,useEffect, useContext} from 'react';
import './Home.css';
import { Form ,Button, Spinner, Alert} from 'react-bootstrap';
import Tables from '../../Components/Tables/Tables';
import { useNavigate } from 'react-router-dom';
import Spinners from '../../Components/Spinners/Spinners';
import { addData } from '../../Components/Contexts/ContextProvider';
import { getallusers } from '../../services/allapis';

function Home() {

  const navigate = useNavigate()
  const [search,setSearch] = useState("")
  const [userdata,setUserData] = useState([]);
  const [showspin,setShowSpin] = useState(true);
  const { useradd, setUseradd } = useContext(addData);

  const adduser = () => {
    navigate("/register")
  }

  const getusers = async ()=>{
    const response = await getallusers(search)
    if(response.status==200){
      const {usersdata} = response.data
      setUserData(usersdata);
    }else{
      console.log('Cannot fetch data');
    }
  }
  // console.log(userdata);
  useEffect(()=>{
    getusers()
    setTimeout(()=>{
        
        setShowSpin(false)
    },2000)
  },[search])
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
              onChange={e=>setSearch(e.target.value)}
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
        showspin ? <Spinners/>:<Tables displayData={userdata}/>
      }
      
    </div>
    </>
  )
}

export default Home