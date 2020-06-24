Stream = require('node-rtsp-stream');

const onvif = require('node-onvif')

const express = require("express");
const app = express();
const path = require('path');

process.camera = [];

app.get("/",(req,res)=>{
    res.write(`<html lang="en">    
    <body>
          
    </body>
    </html>`)

    res.end();
})

app.listen(3000)

stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:EBIKBF@42.116.55.240/H.264',
    wsPort: 9000 ,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 30 // options with required values specify the value after the key
    }
  })


/*

stream = new Stream({
   name: 'name',
   streamUrl: 'rtsp://192.168.2.202:554/stream1',
   wsPort: 9999
});

Stream = require('node-rtsp-stream');
stream = new Stream({
   name: 'name',
   streamUrl: 'rtsp://192.168.2.217:554/stream1',
   wsPort: 9998
});
Stream = require('node-rtsp-stream');
stream = new Stream({
   name: 'name',
   streamUrl: 'rtsp://192.168.2.205:554/stream1',
   wsPort: 9997
});*/
