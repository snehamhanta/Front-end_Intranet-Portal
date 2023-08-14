// // import React from 'react'
// // //import '../../../App.css'
// // import '../../../../App.css'
// // import "../../NavbarStyle.css";
// // import Navbar from '../../Navbar';


// // import Sidebar from '../../Sidebar';
// // import Banners from './Banners';
// // import Date from './Dates';
// // import Vision from './Vision';
// // import Mission from './Mission';
// // import Values from './Values';
// // import NewStarters from './NewStarters';
// // import News from './News';
// // import DocumentsHome from './DocumentsHome.js';
// // import Email from './Email';
// // import EmpDirectory from './EmpDirectory';

// // const Home = () => {
// //   return (
// //     <>
// //                 <Navbar />
// //                 <Sidebar />
// //                 <Banners />
// //                 <Date />
// //                 <Vision />
// //                 <Mission />
// //                 <Values />
// //                 <NewStarters />
// //                 <News />
// //                 <DocumentsHome />
// //                 <Email />
// //                 <EmpDirectory />   
// //     </>
// //   )
// // }

// // export default Home


// import React from 'react'
// //import '../../../App.css'
// import '../../../../App.css'
// import "../../NavbarStyle.css";
// import Navbar from '../Navbar';
// import './HomePage.css'


// import Sidebar from '../Sidebar';
// import Banners from './Home/Banners';
// import Dates from './Home/Dates';
// import Vision from './Home/Vision';
// import Mission from './Home/Mission';
// import Values from './Home/Values';
// import NewStarters from './Home/NewStarters';
// import News from './Home/News';
// import DocumentsHome from './Home/DocumentsHome.js';
// import Email from './Home/Email';
// import EmpDirectory from './Home/EmpDirectory';

// const Home = () => {
//   return (
//     <>
   
//                 <Navbar />
//                 <Sidebar />
//                 <Banners />
//                 <Dates />
//                 <Vision />
//                 <Mission />
//                 <Values />
//                 <NewStarters />
//                 <News />
//                 <DocumentsHome /> 
//                 <Email/> 
//                 <EmpDirectory />
            
       
//     </>
//   )
// }

// export default Home


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './Stories.css';
import Banners from './Home/Banners';
import Dated from './Home/Dated';
import Vision from './Home/Vision';
import Mission from './Home/Mission';
import Values from './Home/Values';
import NewStarters from './Home/NewStarters';
import News from './Home/News';
import DocumentsHome from './Home/DocumentsHome';
import EmpDirectory from './Home/EmpDirectory';
import SocialHome from './Home/SocialHome';
import StoriesHome from './Home/StoriesHome'
import PollsHome from './Home/PollsHome'
import BirthdaysHome from './Home/BirthdaysHome'
import WorkAnniversaryHome from './Home/WorkAnniversaryHome'
import HomeStyle from './HomeStyle.css';
import Email from './Home/Email';



function Home() {

  return (
    <>
    <div className='bodyback'>
    <Navbar />
    <Sidebar />

      <div className='con'>
        <div class="flex-container">
            <div class="flex-item-left"><Banners /></div>
            <div class="flex-item-right">
              <div className='dates'><Dated /></div>
              <div className='dates'><Mission /></div>
              <div className='dates'><Vision /></div>
              <div className='dates'><Values /></div>

            </div>
        </div>

        <div class="flex-container2">
          <div class="flex-item-left2"><NewStarters/></div>
          <div class="flex-item-right2"><News /></div>
        </div>

        <div class="flex-container3">
          <div class="flex-item-left3"><DocumentsHome /></div>
          <div class="flex-item-center3"><Email/></div>
          <div class="flex-item-right"><EmpDirectory /></div>

        </div>

        <div className="flex-container4">
          <div className="flex-item-left4"><StoriesHome /></div>
          <div className="flex-item-Right4"><SocialHome /></div>
        </div>

        <div class="flex-container5">
          <div class="flex-item-left5"><PollsHome /></div>
          <div class="flex-item-center5"><BirthdaysHome /></div>
          <div class="flex-item-right5"><WorkAnniversaryHome /></div>
        </div>
      </div>

    </div>
  </>
  )

  }
  export default Home