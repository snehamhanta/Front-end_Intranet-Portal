// // import React from 'react'
// // import { NavLink } from 'react-router-dom'
// // import "./MissionStyle.css";

// // const Mission = () => {
// //     return (
// //         <div>
// //             <NavLink to="/mission">
// //                 <div className="mission">
// //                    <h3 className="h3-mission">Our Mission</h3>
// //                 </div>
// //              </NavLink>
// //         </div>
// //       )
// // }

// // export default Mission

// import React,{useState} from 'react'
// // import { NavLink } from 'react-router-dom'
// import "./MissionStyle.css";
// import { TbTargetArrow } from "react-icons/tb";
// import MyModal from './ModalComponents/ShowModalMission';

// const Mission = () => {
//     const [showModal, setShowModal] = useState(false);
//     const closeModal =() => setShowModal(false);
//     return (
//         <div className='Mission' >
//                 <div className='logo'>
//                     <TbTargetArrow  style={{textAlign:"center", background:"blue", color:"#fff", width:"80px", height:"57px" }}/>
//                 </div>
//             <button className='btn'  onClick={()=> setShowModal(true)} style={{textDecoration:"none",width:"100%"}}>
//                 <div className='Missions'>
//                 <h3 className='h3-Mission' style={{textDecoration:"none"}}>
//                         Our Mission</h3>
//                 </div>
//              </button>
//              {showModal && <MyModal closeModal ={closeModal}/>} 

//         </div>
//       )
// }

// export default Mission



// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import "./MissionStyle.css";

// const Mission = () => {
//     return (
//         <div>
//             <NavLink to="/mission">
//                 <div className="mission">
//                    <h3 className="h3-mission">Our Mission</h3>
//                 </div>
//              </NavLink>
//         </div>
//       )
// }

// export default Mission

import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom'
import "./MissionStyle.css";
import { TbTargetArrow } from "react-icons/tb";
import MyModal from './ModalComponents/ShowModalMission';

const Mission = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal =() => setShowModal(false);
    return (
        <div>
        <div className='mission' onClick={()=> setShowModal(true)} >
                   {/* <button onClick={()=> setShowModal(true)} > */}
                <div className='Mission-logo' onClick={()=> setShowModal(true)} >
                    <TbTargetArrow style={{fontSize:"40px"}} />
                </div>
                <div onClick={()=> setShowModal(true)}>
                        <h5 className='mission-h3'>Our Mission</h5>
                </div>



        </div>
        {showModal && <MyModal closeModal ={closeModal}/>} 

        </div>
      )
}

export default Mission

// <div className='logo'>
//                     <TbTargetArrow  style={{fontSize:"20px"}}/>
//                 </div>
//             <button className='btn'  onClick={()=> setShowModal(true)} style={{textDecoration:"none",width:"100%"}}>
//                 <div className='Missions'>
//                 <h3 className='h3-Mission' style={{textDecoration:"none"}}>
//                         Our Mission</h3>
//                 </div>
//              </button>