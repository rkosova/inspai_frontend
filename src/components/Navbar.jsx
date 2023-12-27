// NavBar.jsx

import React from 'react';

const NavBar = () => {
  const navStyle = {
    backgroundColor: '#333', // Set the background color
    padding: '10px', // Set padding
    textAlign: 'center', // Center the text
  };

  const ulStyle = {
    listStyleType: 'none', // Remove list item bullets
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
  };

  const liStyle = {
    display: 'inline-block', // Display list items horizontally
    margin: '0 10px', // Add spacing between list items
  };

  const linkStyle = {
    color: 'white', // Set link text color
    textDecoration: 'none', // Remove underline from links
    fontSize: '16px', // Set font size
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="#home" style={linkStyle}>InspAI</a></li>
        <li style={liStyle}><a href="#About" style={linkStyle}>About</a></li>
        <li style={liStyle}><a href="#Login" style={linkStyle}>Login</a></li>
        <li style={liStyle}><a href="#signup" style={linkStyle}>Signup</a></li>
        <li style={liStyle}><a href="#train" style={linkStyle}>Train Model</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
