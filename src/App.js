import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Edit from './Pages/Edit/Edit';
import Profile from './Pages/Profile/Profile';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/profile/:id' element={<Profile/>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
