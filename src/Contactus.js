
import React from 'react';
// import './ContactUs.css';
import './ContacUs.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './Navbar';

const ContactUs = () => {
  return (
    <>
    <Navbar1/>
    <div className="container mt-5 object-detection-container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4 animated fadeInDown">Object Detection with TensorFlow</h1>
          <p className="lead animated fadeInUp delay-1s">
            Explore the capabilities and limitations of object detection using TensorFlow.
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-10 text-center">
          <h2 className="animated fadeInLeft">What is Object Detection?</h2>
          <p className="animated fadeInLeft delay-1s">
            Object detection is a computer vision technique for locating instances of objects in images or videos. TensorFlow provides robust libraries and tools to implement object detection models that can identify and locate objects within an image or video stream.
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-5 text-center">
          <h2 className="animated fadeInRight">Capabilities</h2>
          <ul className="list-group list-group-flush animated fadeInRight delay-1s">
            <li className="list-group-item">Real-time detection of multiple objects</li>
            <li className="list-group-item">Classification of objects into predefined categories</li>
            <li className="list-group-item">Integration with web and mobile applications</li>
          </ul>
        </div>

        <div className="col-md-5 text-center">
          <h2 className="animated fadeInRight">Limitations</h2>
          <ul className="list-group list-group-flush animated fadeInRight delay-1s">
            <li className="list-group-item">Dependent on the quality and variety of training data</li>
            <li className="list-group-item">Computationally intensive, requiring good hardware for real-time performance</li>
            <li className="list-group-item">May struggle with detecting objects in cluttered or poor-quality images</li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-10 text-center">
          <h2 className="animated fadeInUp">Applications</h2>
          <p className="animated fadeInUp delay-1s">
            Object detection can be applied in various fields such as autonomous driving, security systems, retail analytics, medical imaging, and more. It enables machines to perceive and understand their environment, facilitating advanced interactions and decision-making processes.
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-10 text-center">
          <h2 className="animated fadeInUp">Getting Started</h2>
          <p className="animated fadeInUp delay-1s">
            To get started with object detection using TensorFlow, you can explore TensorFlow's official tutorials and documentation. There are pre-trained models available that you can use directly or fine-tune with your own data.
          </p>
          <a href="https://www.tensorflow.org/tutorials" className="btn btn-primary animated fadeInUp delay-2s" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactUs;
