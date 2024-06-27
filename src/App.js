import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home1 from "./Home";
import ObjectDetection from "./ObjectDetection"; // Corrected import name to ObjectDetection
import ContactUs from './Contactus';// Corrected the filename to ContactUs

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/objectdetect" element={<ObjectDetection />} /> {/* Corrected to use ObjectDetection component */}
        <Route path="/contactUs" element={<ContactUs />} /> {/* Corrected to use ContactUs component */}
        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
