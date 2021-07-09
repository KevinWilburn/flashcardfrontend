import React,{ useState } from "react";
import "./app.css"



function App() {
  return (
    <>
    
    <h1>
      <button>Previous</button>
      <button>Next</button>
    </h1>
    <div className="container" onClick="flip">
      <div className="card">
        <div className="front">
          what is the name of the tool that cleans a grill?
        </div>

      </div>
      
    </div>

    </>
  );
}

export default App;
