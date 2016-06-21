'use strict';

import {
  NativeModules,
} from 'react-native';
const WebRTCModule = NativeModules.WebRTCModule;

import MediaStream from './MediaStream';
import MediaStreamTrack from './MediaStreamTrack';

function getUserMedia(constraints, successCallback, errorCallback) {
  WebRTCModule.getUserMedia(
    constraints,
    (id, tracks) => {
      const stream = new MediaStream(id);
      for (let i = 0; i < tracks.length; i++) {
        stream.addTrack(new MediaStreamTrack(tracks[i]));
      }

      successCallback(stream);
    },
    (error) => {
      errorCallback(error);
    });
}

module.exports = getUserMedia;
