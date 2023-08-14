// import './App.css';
// import 'boxicons/css/boxicons.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import AppLayout from "./Components/Admin_Panel/layout/AppLayout";
// import EmployeeList from "./Components/Admin_Panel/EmployeeList";
// import NewsList from "./Components/Admin_Panel/NewsList";
// import DocumentList from "./Components/Admin_Panel/DocumentList";
// import ImageList from "./Components/Admin_Panel/ImageList";
// import Department from "./Components/Admin_Panel/Department";
// import Designation from "./Components/Admin_Panel/Desihnation";
// import Motivation from './Components/Admin_Panel/Motivation';
// // import MainPage from "./MainPage";
// import Stories1 from './Components/Admin_Panel/Stories';

// import Home from './Components/Employee_Panel/Pages/Home/Home';
// import News from './Components/Employee_Panel/Pages/News';
// import Social from './Components/Employee_Panel/Pages/Social';
// import People from './Components/Employee_Panel/Pages/People';
// import Stories from './Components/Employee_Panel/Pages/Stories';
// import Documents from './Components/Employee_Panel/Pages/Documents';
// import Profile from './Components/Employee_Panel/Pages/Profile';
// // import Login from './Components/Login';

// function App() {
//   return (
//     <>
    

//    <BrowserRouter>
//     <Routes>
//         <Route path='/' element={<AppLayout />}>
//             <Route index element={<EmployeeList />} />
//             <Route path='/Department' element={<Department />} />
//             <Route path='/Designation' element={<Designation />} />
//             <Route path='/News' element={<NewsList />} />
//             <Route path='/Images' element={<ImageList />} />
//             <Route path='/Stories' element={<Stories1 />} />
//             <Route path='./Motivation' element={<Motivation />} />
//             <Route path='/Document' element={<DocumentList />} />
//         </Route>
//     </Routes>         
// </BrowserRouter> 

// {/* <Login /> */}

            

//   <BrowserRouter>

//             <Routes>
//                    <Route path='/Home' element={<Home />} />
//                 EmployeeHome page
//                    <Route path='/Home' element={<Home />} />
//                    <Route path='/News' element={<News/>} />
//                    <Route path='/Social' element={<Social />} />
//                    <Route path='/People' element={<People />} />
//                    <Route path='/Storiesemp' element={<Stories />} />
//                    <Route path='/Documents' element={<Documents />} />
//                    <Route path='/Profile' element={<Profile />} />

//             </Routes>
// </BrowserRouter> 
         
// </>
  
//   );
// }

// export default App;





import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route ,Router} from 'react-router-dom';

import AppLayout from "./Components/Admin_Panel/layout/AppLayout";
import EmployeeList from "./Components/Admin_Panel/EmployeeList";
import NewsList from "./Components/Admin_Panel/NewsList";
import DocumentList from "./Components/Admin_Panel/DocumentList";
import ImageList from "./Components/Admin_Panel/ImageList";
import Department from "./Components/Admin_Panel/Department";
import Designation from "./Components/Admin_Panel/Desihnation";
import AdminStories from './Components/Admin_Panel/Stories';
import Motivation from './Components/Admin_Panel/Motivation';
import Calender from './Components/Admin_Panel/Calender';
import AdminYStories from './Components/Admin_Panel/YStories'; 
// import MainPage from "./MainPage";

import Home from './Components/Employee_Panel/Pages/Home';
import News from './Components/Employee_Panel/Pages/News';
import Social from './Components/Employee_Panel/Pages/Social';
import People from './Components/Employee_Panel/Pages/People';
import Stories from './Components/Employee_Panel/Pages/Stories';
import YStories from './Components/Employee_Panel/Pages/YStories';
import Documents from './Components/Employee_Panel/Pages/Documents';
import Profile from './Components/Employee_Panel/Pages/Profile';
import Login from './Components/Login';




function App() {
  return (
    <>
    {/*  */}

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<EmployeeList />} />
            <Route path='/Department' element={<Department />} />
            <Route path='/Designation' element={<Designation />} />
            <Route path='/AdminNews' element={<NewsList />} />
            <Route path='/Images' element={<ImageList />} />
            <Route path='/Document' element={<DocumentList />} />
            <Route path='/AdminStories' element={<AdminStories/>}/>
            <Route path='/AdminYStories' element={<AdminYStories/>}/>

            <Route path='/Motivation' element={<Motivation/>}/>
            <Route path='/Calender' element={<Calender/>}/>
            {/* <Route path='/YStories' element={<YStories />} /> */}



            
        </Route>
    </Routes>         
</BrowserRouter>  

  {/* <Login/> */}
  
          
{/* */}
   <BrowserRouter>

            <Routes>
                   <Route path='/Login' element={<Login />} /> 
                EmployeeHome page
                    <Route path='/Home' element={<Home />} />
                   <Route path='/News' element={<News/>} />
                   <Route path='/Social' element={<Social />} />
                   <Route path='/People' element={<People />} />
                   <Route path='/Stories' element={<Stories />} />
                   <Route path='/YStories' element={<YStories />} />  
                   <Route path='/Documents' element={<Documents />} />
                   <Route path='/Profile' element={<Profile />} /> 


             </Routes> 
 </BrowserRouter>   
    
    
   
     
      

</>
  
  );
}

export default App;



// import React, { useState } from 'react'
// import data from './Components/Employee_Panel/Pages/data'
// import List from './Components/Employee_Panel/Pages/List'
// function App() {
//   const [people, setPeople] = useState(data)
//   return (
//     <main>
//       <section className='container'>
//         <h3>{people.length} birthdays today</h3>
//         <List people={people} />
//         <button onClick={() => setPeople([])}>clear all</button>
//       </section>
//     </main>
//   )
// }

// export default App
