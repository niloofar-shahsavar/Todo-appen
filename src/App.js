
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  
  return (
   
      <div>
        <Router>
        <Header  /> 
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/*" element={<div>Not found</div>}></Route>
          </Routes>
        </Router>
        
      </div>
     
   
  );
}

export default App;
