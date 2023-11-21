// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = ({ data, searchTerm }) => {
  console.log("Data in Home:", data);
  console.log("Search Term in Home:", searchTerm);

  // Implement the rendering logic for the Home component
  return (
    <div>
      <h1>Home Component</h1>
      {/* Use the data and searchTerm props as needed */}
    </div>
  );
};

export default Home;