import React from "react";
import Navbar1 from "./Navbar";
import Header from "./Header";
const Home1=() => {
  return (
    <div>
        <Navbar1/>
<Header/>
    <div className="container">
      <nav style={navbarStyle}>
        <ul style={navListStyle}>
          <li style={listItemStyle}>
            <div style={contentContainerStyle}> {/* Container to align Service 1 and button */}
              

            </div>
          </li>
        
          {/* Add more services as needed */}
        </ul>
      </nav>
    </div>
    </div>
  );
}

const navbarStyle = {
  backgroundColor: '#3296F5',
  padding: '10px 20px',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  marginRight: '20px', // Adjust the space between items if needed
};

const contentContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};


export default Home1;
