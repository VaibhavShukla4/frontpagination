// import React, { useState, useEffect, useRef } from "react";
// import "../App.css";

// const Dropdown = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="dropdown-container" ref={dropdownRef}>
//       <button className="dropdown-button" onClick={toggleDropdown}>
//         Toggle Dropdown
//       </button>
//       {isDropdownOpen && (
//         <div className="dropdown-menu">
//           <span>Option 1</span>
//           <span>Option 2</span>
//           <span>Option 3</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const getDropdownStyle = () => {
    if (!dropdownRef.current) return {}; // Return empty object if ref is not available

    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const parentTop = dropdownRect.top;
    const parentLeft = dropdownRect.left;

    return {
      position: "absolute",
      top: `0px`,
      // left: `40vw`,
      width: "200px",
      padding: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ccc",
      borderTop: "none",
      zIndex: 1000, // Ensure the dropdown appears above other content
    };
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu" style={getDropdownStyle()}>
          <span>Option 1</span>
          <span>Option 2</span>
          <span>Option 3</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
