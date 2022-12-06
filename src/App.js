import "./App.css";
import Main from "./pages/Main";
import React, { useState, useEffect } from "react";
//TODO: add back to top functions

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100000);
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <svg className="circle" width="100" height="100" viewBox="0 0 610 610">
            <circle  cx="300" cy="300" r="300" />
          </svg>
          <svg className="triangle" width="60" height="60" viewBox="0 0 610 610">
            <polygon  points="600,600 2,600 301,2 301,2 	" />
          </svg>
          <svg className="cross" width="100" height="100" viewBox="0 0 610 610">
            <path class="st1" d="M300,0" />
            <path class="st1" d="M300-36" />
            <polygon
              class="st2"
              points="599.5,493.3 493.4,599.4 299.8,405.8 105.6,600 -0.5,493.9 193.7,299.7 0.1,106.1 106.2,0 
		299.8,193.6 492.8,0.6 598.9,106.7 405.9,299.7 	"
            />
          </svg>
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
