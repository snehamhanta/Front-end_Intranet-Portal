import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom'
import "./VisionStyle.css";
import { GiEyeShield } from "react-icons/gi";
import MyModal from './ModalComponents/ShowModalVision';


// height:"80px", marginTop:"",borderRadius:"4px", marginLeft:"40px",marginRight:"0px",marginBottom:"",padding:"", fontSize:"",transform: "rotate(270deg)",background:"rgb(230, 26, 145)", color:"#fff"
const Vision = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal =() => setShowModal(false);

    return (
        <div>
        <div className='vision' onClick={()=> setShowModal(true)} >
                   {/* <button onClick={()=> setShowModal(true)} > */}
                <div className='Vision-logo' onClick={()=> setShowModal(true)} >
                    <GiEyeShield style={{fontSize:"40px"}} />
                </div>
                <div onClick={()=> setShowModal(true)}>
                        <h5 className='vision-h3'>Our Vision</h5>
                </div>
                    {/* </button>  */}
        </div>
        {showModal && <MyModal closeModal ={closeModal}/>} 

        </div>
      )
}


export default Vision
