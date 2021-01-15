const supportsVideo = !!document.createElement("video").canPlayType;

if (supportsVideo) {
  const $videoContainer = document.getElementById("videoContainer");
  const $video = document.getElementById("video");
  const $videoControls = document.getElementById("video-controls");

  // Hide the default controls
  $video.controls = false;

  // Display the user defined video controls
  $videoControls.style.display = "block";

  // Setup controls and buttons
  const $playpause = document.getElementById("playpause");
  const $stop = document.getElementById("stop");
  const $mute = document.getElementById("mute");
  const $volinc = document.getElementById("volinc");
  const $voldec = document.getElementById("voldec");
  const $progress = document.getElementById("progress");
  const $progressBar = document.getElementById("progress-bar");
  const $fullscreen = document.getElementById("fs");

  // Play/Pause button event listener
  $playpause.addEventListener("click", function (e) {
    if (video.paused || video.ended) video.play();
    else video.pause();
  });

  // Stop button event listener
  $stop.addEventListener("click", function (e) {
    $video.pause();
    $video.currentTime = 0;
  });

  // Mute button event listener
  $mute.addEventListener("click", function (e) {
    $video.muted = !$video.muted;
  });

  // Volume up button event listener
  $volinc.addEventListener("click", function (e) {
    alterVolume("+");
  });

  // Volume down button event listener
  $voldec.addEventListener("click", function (e) {
    alterVolume("-");
  });
}

// AlterVolume function
const alterVolume = function (dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;

  if (dir === "+") {
    if (currentVolume < 1) video.volume += 0.1;
  } else if (dir === "-") {
    if (currentVolume > 0) video.volume -= 0.1;
  }
};
