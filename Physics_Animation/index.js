let canvas;
let c;

document.addEventListener("DOMContentLoaded", initiate);

function initiate() {
  canvas = document.querySelector("canvas");
  c = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  drawAnimation();
}

//time
let t = 0;

//height
let yPos;

//velocity
let v = 0.2;

//acceleration
let a = 0.01;

function drawAnimation() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  //Formula
  yPos = v * t + (a * t * t) / 2;

  t++;
  c.beginPath();
  c.arc(canvas.width / 2, yPos, 40, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();

  requestAnimationFrame(drawAnimation);
}
