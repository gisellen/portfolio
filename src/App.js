import "./App.css";
import Main from "./pages/Main";
import React, { useState, useEffect} from 'react'

//TODO: add back to top functions

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="circle"></div>
          <div className="triangle"></div>
          <div className="x"></div>
        </div>
      ) : (<Main />)}
      
    </div>
  );
}

export default App;
