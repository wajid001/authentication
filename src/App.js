import React from 'react';
import Login from './Component/loginform';
import SignUp from './Component/signup';
import {
  BrowserRouter as Router,
 useRoutes,
} from "react-router-dom";
function App() {
  let routes=useRoutes([
    {path:'/',element:<Login  />},
    {path:'/signup',element:<SignUp />},
  ])
  return routes
}

const Appwrapper=()=>{
  return(
  <Router>
    <div className='App'>
      <App />
    </div>
  </Router>
  )
}

export default Appwrapper;
