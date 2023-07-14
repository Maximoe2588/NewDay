import './App.css';
import React, { useState } from "react";


function App (){

const [signedUp, setSignedUp] = useState(false);

return (
  <div>
    <button onClick={() => setSignedUp(!signedUp)}>

      {signedUp ? "Signed up" : "Not Signed up"}
    </button>
  </div>
)

}

export default App;

