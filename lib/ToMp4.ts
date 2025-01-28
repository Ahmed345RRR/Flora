import {  FFmpeg } from '@ffmpeg/ffmpeg';

const ffmpeg = FFmpeg

async function convertBlobToMP4(inputBlob: Blob, outputFileName: string) {
  // Load FFmpeg core
  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load();
  }

  // Write the input Blob to FFmpeg's file system
  ffmpeg.FS('writeFile', 'input.webm', await fetchFile(inputBlob));

  // Run the conversion command
  await ffmpeg.run('-i', 'input.webm', 'output.mp4');

  // Read the output file
  const data = ffmpeg.FS('readFile', 'output.mp4');

  // Create a Blob from the output file
  const mp4Blob = new Blob([data.buffer], { type: 'video/mp4' });

  // Trigger the download
 
}


