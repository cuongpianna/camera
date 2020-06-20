Stream = require('node-rtsp-stream');

//const onvif = require('node-onvif')

const express = require("express");
const app = express();
const path = require('path');

process.camera = [];
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:EBIKBF@42.116.55.240/H.264',
  wsPort: 9000 ,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})


stream = new Stream({
  name: 'cam 2',
  streamUrl: 'rtsp://admin:EBIKBF@192.168.1.50/H.264',
  wsPort: 9001 
})