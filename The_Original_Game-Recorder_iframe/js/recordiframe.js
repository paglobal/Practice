let videoStream;
let mediaRecorder;
let chunks = [];
let video;
let iframeEl;
let canvas;
let link;

addEventListener("DOMContentLoaded", initiate);

function initiate() {
  iframeEl = document.querySelector("iframe");
  video = document.querySelector("video");
  link = document.querySelector("a");

  window.addEventListener(
    "message",
    () => {
      canvas = iframeEl.contentDocument.querySelector("canvas");
      videoStream = canvas.captureStream(120);
      mediaRecorder = new MediaRecorder(videoStream);

      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = function (e) {
        const blob = new Blob(chunks, { type: "video/mp4" });
        chunks = [];
        const videoURL = URL.createObjectURL(blob);
        video.src = videoURL;
        link.href = videoURL;
      };

      mediaRecorder.start();

      setTimeout(function () {
        mediaRecorder.stop();
      }, 60000);
    },
    false
  );
}
