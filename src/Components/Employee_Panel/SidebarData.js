// // import React from 'react'
// // import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// // import HighlightAltOutlinedIcon from '@mui/icons-material/HighlightAltOutlined';
// // import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
// // import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
// // import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

// // export const SidebarData = [
// //   {
// //     icon:<HomeOutlinedIcon />,
// //     link:"/home"
// //   },
// //   {
// //     icon:<HighlightAltOutlinedIcon />,
// //     link:"/highlightAltOutlinedIcon"
// //   },
// //   {
// //     icon:<MenuOpenOutlinedIcon />,
// //     link:"/menuOpenOutlinedIcon"
// //   },
// //   {
// //     icon:<HelpOutlineOutlinedIcon />,
// //     link:"/helpOutlineOutlinedIcon"
// //   },
// //   {
// //     icon:<LocalOfferOutlinedIcon />,
// //     link:"/localOfferOutlinedIcon"
// //   },
// // ]


// import { AnimatePresence, motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { FaAngleDown } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import SidebarStyle from "./SidebarStyle.css"

// const menuAnimation = {
//   hidden: {
//     opacity: 0,
//     height: 0,
//     padding: 0,
//     transition: { duration: 0.3, when: "afterChildren" },
//   },
//   show: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       duration: 0.3,
//       when: "beforeChildren",
//     },
//   },
// };
// const menuItemAnimation = {
//   hidden: (i) => ({
//     padding: 0,
//     x: "-100%",
//     transition: {
//       duration: (i + 1) * 0.1,
//     },
//   }),
//   show: (i) => ({
//     x: 0,
//     transition: {
//       duration: (i + 1) * 0.1,
//     },
//   }),
// };

// const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setIsOpen(true);
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       setIsMenuOpen(false);
//     }
//   }, [isOpen]);
//   return (
//     <>
//       <div className="menu" onClick={toggleMenu}>
//         <div className="menu_item">
//           <div className="icon">{route.icon}</div>
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 variants={showAnimation}
//                 initial="hidden"
//                 animate="show"
//                 exit="hidden"
//                 className="link_text"
//               >
//                 {route.name}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//         {isOpen && (
//           <motion.div
//             animate={
//               isMenuOpen
//                 ? {
//                     rotate: -90,
//                   }
//                 : { rotate: 0 }
//             }
//           >
//             <FaAngleDown />
//           </motion.div>
//         )}
//       </div>{" "}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             variants={menuAnimation}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="menu_container"
//           >
//             {route.subRoutes.map((subRoute, i) => (
//               <motion.div variants={menuItemAnimation} key={i} custom={i}>
//                 <NavLink to={subRoute.path} className="link">
//                   <div className="icon">{subRoute.icon}</div>
//                   <motion.div className="link_text">{subRoute.name}</motion.div>
//                 </NavLink>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}{" "}
//       </AnimatePresence>
//     </>
//   );
// };

// export default SidebarMenu;


import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SidebarStyle from "./SidebarStyle.css"

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <div
            
          >
            <FaAngleDown />
          </div>
        )}
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <div className="link_text">{subRoute.name}</div>
                </NavLink>
              </div>
            ))}
          </div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;