import React, { useEffect } from 'react';
//const faceapi = require('./../../Javascript/Modules/face-api.min.js');
//import faceapi from './../../Javascript/Modules/face-api.min.js';
//import * as faceapi from './../../Javascript/Modules/face-api.min.js';

import * as faceapi from 'face-api.js';
//import './FaceRecognitionStyles.css';

const FaceRecognition_Page = (parms) => {
  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.faceExpressionNet.loadFromUri('./models'),
      ])
        .then()
        .catch((e) => console.log(e));
    };

    // imgRef.current && loadModels();
    loadModels();
  }, []);
  return (
    <>
      <div className="divBody">
        <div className="divData">
          <div className="divDataInput">
            <input
              type="file"
              className="imageUpload"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <div className="divDataOutputDisplay"></div>
        </div>
      </div>
      {/* <div className="divPopup">
        <h1 className="textLoadingPopup">Loading</h1>
      </div> */}
    </>
  );
};

const FaceRecognitionPage = FaceRecognition_Page;
export default FaceRecognitionPage;
