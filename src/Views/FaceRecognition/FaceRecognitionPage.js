import React, { useEffect } from 'react';
import { CustomLogger } from './../../Javascript/CustomLogger.js';
//const faceapi = require('./../../Javascript/Modules/face-api.min.js');
//import faceapi from './../../Javascript/Modules/face-api.min.js';
//import * as faceapi from './../../Javascript/Modules/face-api.min.js';

import * as faceapi from 'face-api.js';
//import './FaceRecognitionStyles.css';

const FaceRecognition_Page = (parms) => {
  useEffect(() => {
    const loadModels = () => {
      try {
        const MODELS_PATH = './models'; //path.join(__dirname, './../Models');
        CustomLogger.MessageLogger(MODELS_PATH);
        faceapi.nets.ssdMobilenetv1.loadFromDisk(MODELS_PATH).then((result) => {
          CustomLogger.MessageLogger('SSD model loaded');
          faceapi.nets.faceRecognitionNet
            .loadFromDisk(MODELS_PATH)
            .then((result) => {
              CustomLogger.MessageLogger('faceRecognitionNet model loaded');
              faceapi.nets.faceLandmark68Net
                .loadFromDisk(MODELS_PATH)
                .then((result) => {
                  CustomLogger.MessageLogger('faceLandmark68Net model loaded');
                  loadDescriptiors();
                })
                .catch((error) => {
                  CustomLogger.ErrorLogger(error);
                });
            })
            .catch((error) => {
              CustomLogger.ErrorLogger(error);
            });
        });
      } catch (ex) {}
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
