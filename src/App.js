import './App.css';
import React, { useState } from 'react';
// import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [textDark, setTextDark] = useState("dark");
  const [dark, onDark] = useState("light");
  const [textArea, setColorTextArea] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (dark === 'light') {
      onDark('dark');
      setColorTextArea("black");
      setTextDark('light');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is on", "success");
    } else {
      onDark("light");
      setColorTextArea("light");
      setTextDark("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is on", "success");
    }
  };

  return (
    <div>
      {/* <Router> */}
        <Navbar mode={textArea} toggleMode={toggleMode} color={textDark} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route path="/about" element={<About  toggleMode={toggleMode}/>} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text for analyze" mode={textArea} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
