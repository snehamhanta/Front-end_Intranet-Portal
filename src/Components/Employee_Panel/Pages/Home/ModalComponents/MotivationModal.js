import { useEffect,useState } from "react";
import "./modal.css";
import Motivation from "../Motivation";
// import mission from "./mission.jpg"

const MyModal =({closeModal}) =>{
//     useEffect (()=>
//     {
//         document.body.style.overflowY = 'hidden';
//         return () =>{
//             document.body.style.overflowY = 'scroll';
//         };
//     },[]);
const [userData, setUserdata] = useState([]);
const [filterdata, setFilterdata] = useState([]);
const [query, setQuery] = useState("");

    useEffect(() => {
      const getUserdata = async () => {
        const reqData = await fetch("https://localhost:7274/api/Motivation");
        const resData = await reqData.json();
        //console.log(resData);
        setUserdata(resData);
        setFilterdata(resData);
      };
      getUserdata();
    }, []);

    return(
      <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">

        <div>
            <button className="btn btn-light d-grid gap-2 col-1 mx-auto  float-right" onClick={closeModal}>X</button>  
        </div>
     
      {/* <h2>Today's Motivation</h2> */}
      <div className="mission-flex">
      {/* <img src={mission} height="250px" width="300px" alt=""/> */}
    
        <div>
          {/* <p>{getUser.Motivation}</p>
           */}
           <Motivation/>
          </div>
    
    
      </div>
      </div>
      </>
    )
  }

  export default MyModal;