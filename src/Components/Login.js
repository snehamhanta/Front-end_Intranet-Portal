import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
// import {Link} from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import Home from './Employee_Panel/Pages/Home';

function EmployeeLoginForm() {
  const [id, setId]= useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
    // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const employee = {
      email: email,
      password: password,
    };

    axios.post('https://localhost:7274/api/Employee/login', employee)
      .then(response => {
        setMessage(response.data.message);  
        setEmail('');
        setPassword('');
        navigate("/Home");
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  return (
<>
            {/* <div className="col-md-6 right"> */}
<div className='mb-3 border-top-0 shadow' style={{backgroundColor:"#ffffff",height:"500px",width:"500px",marginLeft:"250px",marginTop:"130px"}}>
<img src='img/sciqus.jpeg' style={{marginTop:"30px",height:"50px",marginLeft:"30px"}}/>

        <img src="img/login_page.jpg" style={{height:"350px",marginTop:"0px",marginLeft:"10px"}}/>
           <img src="img/intranetlogo.jpeg" style={{marginLeft:"170px",height:"50px"}}/>

</div>
             
           <div className='login' style={{marginLeft:"300px",marginTop:"-560px"}}>
            {/* <div className='login_photo'>  */}
           {/* <img src="img/login_page.jpg"/> */}
           {/* <p className='text'>Intranet Portal</p> */}

           {/* <img src="img/intranetlogo.jpeg"/> */}
            <div className='login_bg'>
           
                 <div className="input-box">
               
                    <div className='login'style={{marginLeft:"40px"}}>Login Page</div>
                    <form onSubmit={handleSubmit}>
                    <div className="input-field1">
                        <input type="email" className="input" placeholder='Username'style={{height:"35px",border:"1px solid #303a99",borderRadius:"5px"}} value={email} onChange={(event) => setEmail(event.target.value)} />
                        {/* <label for="email">Email</label> */}
                    </div>
                    <div className="input-field2">
                        
                        <input type="password"className="input" placeholder='Password'style={{height:"35px",border:"1px solid #303a99",borderRadius:"5px"}} value={password} onChange={(event) => setPassword(event.target.value)} />
                        {/* <label for="password">Password</label> */}
                    </div>
                    <div class="input-field3">
                        <input type="submit" className="login-button" value="Login"/>
                        
                    </div>
                    <div className="signin"style={{fontSize:"15px",marginLeft:"180px"}}>
                        {/* <span> <Link to="/ForgotPass" style={{ color: "#8c7569" }}>  */}
                    Forgot Password?
                  {/* </Link></span> */}
                    </div>

                    </form>
                 </div>
                    <p style={{color:"white"}}>{message}</p>
            </div>
            {/* </div> */}
            </div>
            {/* </div> */}
            
            </>
  );
}

export default EmployeeLoginForm;