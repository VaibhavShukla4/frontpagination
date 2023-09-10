// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   MdOutlineKeyboardArrowRight,
//   MdOutlineKeyboardArrowLeft,
// } from "react-icons/md";
// import "./App.css";
// const App = () => {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchItems(currentPage);
//   }, [currentPage]);

//   const fetchItems = async (page) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/api/items?page=${page}`
//       );
//       setItems(response.data.items);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );
//   console.log(currentPage);
//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div className="pagination-container">
//         {currentPage > 1 && (
//           <span onClick={handlePrevPage}>
//             <MdOutlineKeyboardArrowLeft />
//           </span>
//         )}
//         {pageNumbers.map((page) => (
//           <span
//             className={`${
//               currentPage === page ? "active-btn" : "non-active-btn"
//             }`}
//             key={page}
//             onClick={() => handlePageClick(page)}
//           >
//             {page}
//           </span>
//         ))}
//         {currentPage < totalPages && (
//           <span onClick={handleNextPage}>
//             <MdOutlineKeyboardArrowRight />
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import "./App.css";
// import Csv from "./components/Csv";
import Page from "./components/Page";
import Dropdown from "./components/Dropdown";
import Save_Image from "./components/Save_Image";
import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div className="App">
      {/* <Page /> */}
      {/* <Csv /> */}
      {/* <Dropdown /> */}
      {/* <Save_Image/> */}
      <UserSearch/>
    </div>
  );
};

export default App;
