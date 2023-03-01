import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import React from 'react';
import Sign from './Components/Authentication/Sign';
import ForgotPassword from './Components/Authentication/ForgotPassword';
import Protected from './Components/Authentication/Protected';
import MainHead from './Components/DashBoard/MainHead';
import Reset from './Components/Authentication/Reset';
import Loading from './Components/Authentication/Loading';
import Inventory from './Components/Inventory';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Sign' element={<Sign/>}/>
      <Route path= '/forgot_password' element={<ForgotPassword/>}/>
      <Route path= '/reset' element={<Reset/>}/>
      <Route path = '/loading' element={<Loading/>}/>
      <Route path='*' element={<Protected Component={MainHead}/>}/> 
    </Routes>
    </BrowserRouter>
   
    
  )
}
export default App;