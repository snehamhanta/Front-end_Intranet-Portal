import { useEffect } from "react";
import "./modal.css";
// import mission from "./mission.jpg"
import Motivation from "../Motivation";

const MyModal =({closeModal}) =>{
    useEffect (()=>
    {
        document.body.style.overflowY = 'hidden';
        return () =>{
            document.body.style.overflowY = 'scroll';
        };
    },[]);

    return(
      <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
      <h2>Motivation</h2>
      <div className="mission-flex">
      {/* <img src={mission} height="250px" width="300px" alt=""/> */}
      {/* <p>Our mission is to support employees at work and enhance efficiency in our organisation.</p> */}
      <Motivation/>
      <p></p>
      </div>
      <button className="Modal-btn" onClick={closeModal}>Close</button>   
      </div>
      </>
    )
  }

  export default MyModal;