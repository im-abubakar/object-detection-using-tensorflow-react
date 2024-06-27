// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import Navbar from "./Navbar";

const Objectdetect = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("COCO-SSD model loaded.");
    setLoading(false);
    //  Loop and detect objects
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check if data is available
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
  
      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
  
      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
  
      // Make Detections
      const obj = await net.detect(video);
  
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx); 
    }
  };
  

  useEffect(() => {
    runCoco();
  }, []);

  return (
    
    <div>
      <Navbar />
      <header className="App-header">
        {loading ? (
          <div>Loading model...</div>
        ) : (
          <>
            <Webcam
              ref={webcamRef}
              muted={true} 
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 8,
                width: 640,
                height: 480,
              }}
            />

            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 9,
                width: 640,
                height: 480,
              }}
            />
          </>
        )}
      </header>
    </div>
  );
};

export default Objectdetect;
