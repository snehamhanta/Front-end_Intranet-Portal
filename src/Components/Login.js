import React, { useState } from 'react';
import axios from 'axios';
// import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
// import {Link} from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import Home from './Employee_Panel/Pages/Home/Home';

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

             
           <div className='login'>
            {/* <div className='login_photo'>  */}
           {/* <img src="img/login_page.jpg"/> */}
           {/* <p className='text'>Intranet Portal</p> */}
           {/* <img src="img/intranetlogo.jpeg"/> */}
            <div className='login_bg'>
           
                 <div className="input-box">
               
                    <div className='login'>Login Page</div>
                    <form onSubmit={handleSubmit}>
                    <div className="input-field1">
                        <input type="email" className="input" placeholder='Username' value={email} onChange={(event) => setEmail(event.target.value)} />
                        {/* <label for="email">Email</label> */}
                    </div>
                    <div className="input-field2">
                        
                        <input type="password"className="input" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                        {/* <label for="password">Password</label> */}
                    </div>
                    <div class="input-field3">
                        <input type="submit" className="login-button" value="Login"/>
                        
                    </div>
                    <div className="signin">
                        {/* <span> <Link to="/ForgotPass" style={{ color: "#8c7569" }}>  */}
                    Forgot Password
                  {/* </Link></span> */}
                    </div>

                    </form>
                 </div>
                    <p style={{color:"white"}}>{message}</p>
            {/* </div> */}
            </div>
            </div>
            {/* </div> */}
            
            </>
  );
}

export default EmployeeLoginForm;

// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };
//   const employee = {
//           uername: username,
//           password: password,
//         };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();




   

//     // Make an API call to authenticate the user
//     // fetch('/api/login', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({ username, password }),
//     // })
//     axios.post('https://localhost:7274/api/Employee/login',employee)
//       .then((response) => {
//         if (response.ok) {
//           // Authentication successful, store the token or user information
//           // in local storage or cookies and redirect to another page
//           localStorage.setItem('token', 'your_token_here');
//           window.location.href = '/Home'; // Redirect to the dashboard page
//         } else {
//           // Authentication failed, handle accordingly
//           console.error('Login failed');
//         }
//       })
//       .catch((error) => {
//         // Handle API error
//         console.error('Error during login:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// // import {Link, useHistory} from "react-router-dom";
// // import { useNavigate } from 'react-router-dom';
// // import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


// const Login = () => {
//   // const history = useHistory();
//   // const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setEmail(e.target.value);
//   };
//   // const employee = {
//   //           email: email,
//   //             password: password,
//   //           };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Make an API call to authenticate the us
//     // axios.post('https://localhost:7274/api/Employee/login')
//     fetch('https://localhost:7274/api/Employee/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//     .then((response) => {
//         if (response.ok) {
//           // Authentication successful, store the token or user information
//           // in local storage or cookies and redirect to the home page
//           // localStorage.setItem('token', '/Home');
//           //  navigate('/Home'); // Redirect to the home page
//           // history.push('/home');
//           console.log('successfully login');
//         } else {
//           // Authentication failed, handle accordingly
//           console.error('Login failed');
//         }
//       })
//       .catch((error) => {
//         // Handle API error
//         console.error('Error during login:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label>email:</label>
//           <input type="text" value={email} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// Login.js

// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   // const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post('https://localhost:7274/api/Employee/login', { email, password })
//       .then((response) => {
//         if (response.data.success) {
//           // Store authentication status or user data in local storage or state management solution
//           localStorage.setItem('isLoggedIn', true);
//           // Redirect to home page
//           // navigate('/home');
//         } else {
//           setError(response.data.message);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setError('Something went wrong. Please try again later.');
//       });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" name="email" value={email} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={password} onChange={handleInputChange} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

