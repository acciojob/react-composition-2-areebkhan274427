
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [showModal,setshowModal] = useState(true);
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={()=>setshowModal(!showModal)}>Show Model</button>
        <Modal show={showModal} onClose={setshowModal}/>
    </div>
  )
}

export default App
