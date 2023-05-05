import React,{useState,useEffect,useContext} from 'react';
import './Register.css'
import { Card,Row,Form,Button } from 'react-bootstrap';
import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Spinners from '../../Components/Spinners/Spinners';
import { registerfunc } from '../../services/allapis';
import { addData } from '../../Components/Contexts/ContextProvider';


function Register() {

  const [showspin,setShowSpin] = useState(true);
  const { useradd, setUseradd } = useContext(addData);

  const navigate = useNavigate()
  // status optios
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];
  //state to input values
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  });
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");


  // setInput Value to all inputdata state
  const setInputValue = (e) => {
    
    const { name, value } = e.target;
   
    setInputData({ ...inputdata, [name]: value })
 }

 // status set
 const setStatusValue = (e) => {
  // console.log(e);
   setStatus(e.value)
 }

 // profile set
 const setProfile = (e) => {
   //console.log(e);
  setImage(e.target.files[0])
 }

 useEffect(() => {
  if (image) {
    setPreview(URL.createObjectURL(image))
  }
  setTimeout(()=>{
    setShowSpin(false)
},1200)
}, [image])

const submitUserData = async(e) => {
  e.preventDefault();

  const { fname, lname, email, mobile, gender, location } = inputdata;
  if (fname === "") {
    toast.error("First name is Required !")
  } else if (lname === "") {
    toast.error("Last name is Required !")
  } else if (email === "") {
    toast.error("Email is Required !")
  } else if (!email.includes("@")) {
    toast.error("Enter Valid Email !")
  } else if (mobile === "") {
    toast.error("Mobile is Required !")
  } else if (mobile.length > 10) {
    toast.error("Enter Valid Mobile!f")
  } else if (gender === "") {
    toast.error("Gender is Required !")
  } else if (status === "") {
    toast.error("Status is Required !")
  } else if (image === "") {
    toast.error("Profile is Required !")
  } else if (location === "") {
    toast.error("location is Required !")
  } else {
    //Registration success
    const data = new FormData();
    data.append("fname",fname)
    data.append("lname",lname)
    data.append("mobile",mobile)
    data.append("gender",gender)
    data.append("status",status)
    data.append("user_profile",image)
    data.append("location",location)
    data.append("email",email)

    //header
    const headerconfig = {
      "Content-Type":"multipart/form-data"
    }
    const response = await registerfunc(data,headerconfig);
    if(response.status === 200){
      setInputData({
        ...inputdata,
        fname:"",
        lname: "",
        email: "",
        mobile: "",
        gender: "",
        location: ""
      });
      setStatus("");
      setImage("");
      setUseradd(response.data)
      navigate('/')
    }else{
      toast.error("Error!")
    }
  }
}

  return (
    <>
    {
      showspin? <Spinners/>:
    <div className="container">
          <h2 className='text-center mt-1'>Register Your Details</h2>

          <Card className='shadow mt-3 p-3'>
            <div className="profile_div text-center">
              <img src={preview?preview:'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/88-512.png'} alt="img" />
            </div>

            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" name='fname'  placeholder='Enter FirstName' 
                  value={inputdata.fname} onChange={setInputValue}/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='lname'  placeholder='Enter LastName' 
                  value={inputdata.lname} onChange={setInputValue}/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  {/*  */}
                  <Form.Control type="email" name='email'  placeholder='Enter Email' 
                  value={inputdata.email} onChange={setInputValue}/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  {/* */}
                  <Form.Control type="text" name='mobile'  placeholder='Enter Mobile' 
                   value={inputdata.mobile} onChange={setInputValue}/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  {/*  */}
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    onChange={setInputValue}
                  />
                  {/*  */}
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>
                  {/*  */}
                  <Select options={options}  onChange={setStatusValue} />                
                  </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profile</Form.Label>
                  {/*  */}
                  <Form.Control type="file" name='user_profile'   placeholder='Select Your Profile' onChange={setProfile}/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  {/*  */}
                  <Form.Control type="text" name='location'  placeholder='Enter Your Location' 
                  value={inputdata.location} onChange={setInputValue}/>
                </Form.Group>
                {/*  */}
                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Submit
                </Button>
              </Row>

            </Form>
          </Card>
          <ToastContainer position="top-center" />
    </div>
    }
    </>
  )
}

export default Register