import React from "react";
import "./App.css";
import Login from "./login"; // Importing from "login.jsx" (lowercase file name)

function App() {
  return (
    <div>
      <Login /> {/* Capitalized component name */}
    </div>
  );
}

export default App;
