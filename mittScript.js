//Canvas funksjoner
var canvas = document.getElementById("mittCanvas");
var ctx = canvas.getContext("2d");

function bakgrunn() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 200, 200);

  ctx.beginPath();
  ctx.moveTo(0, 200);
  ctx.lineTo(50, 150);
  ctx.lineTo(100, 200);
  ctx.lineTo(150, 150);
  ctx.lineTo(200, 200);
  ctx.strokeStyle = "rgb(115, 222, 244)";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 150);
  ctx.lineTo(50, 200);
  ctx.lineTo(100, 150);
  ctx.lineTo(150, 200);
  ctx.lineTo(200, 150);
  ctx.stroke();
}

function rødFirkant(x) {
  ctx.strokeStyle = "black";
  ctx.fillStyle = "red";
  ctx.fillRect(x, 0, 100, 150);
  ctx.strokeRect(x, 0, 100, 150);
}

function grønnFirkant(x) {
  ctx.strokeStyle = "black";
  ctx.fillStyle = "green";
  ctx.fillRect(x, 0, 100, 150);
  ctx.strokeRect(x, 0, 100, 150);
}

let solFarge = "yellow";

function sol(y) {
  ctx.strokeStyle = "lime";
  ctx.fillStyle = solFarge;
  ctx.beginPath();
  ctx.arc(100, y, 48, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function stjerner() {
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "lime";
  ctx.beginPath();
  ctx.moveTo(50, 0);
  ctx.lineTo(5, 145);
  ctx.lineTo(95, 75);
  ctx.lineTo(5, 75);
  ctx.lineTo(95, 145);
  ctx.lineTo(50, 0);
  ctx.stroke();
  ctx.fill();

  ctx.moveTo(150, 0);
  ctx.lineTo(105, 145);
  ctx.lineTo(195, 75);
  ctx.lineTo(105, 75);
  ctx.lineTo(195, 145);
  ctx.lineTo(150, 0);
  ctx.fill();
  ctx.stroke();
}

//Canvas kjøring
bakgrunn();
rødFirkant(0);
grønnFirkant(100);
sol(0);
stjerner();

//Canvas animasjon
let animation1;
let animation2;
let animation3;

let xrød = 0;
let dxrød = 1;

function redMove() {
  animation1 = requestAnimationFrame(redMove);
  if (xrød < 50) {
    ctx.clearRect(0, 0, 100, 150);
    bakgrunn();
  }

  rødFirkant(xrød);
  xrød += dxrød;

  if (xrød == 100) {
    dxrød = 0;
  }
}

let xgrønn = 100;
let dxgrønn = 1;

function greenMove() {
  animation2 = requestAnimationFrame(greenMove);
  if (xgrønn > 50) {
    ctx.clearRect(100, 0, 200, 150);
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 0, 200, 150);
  }

  grønnFirkant(xgrønn);
  xgrønn -= dxgrønn;

  if (xgrønn == 0) {
    dxgrønn = 0;
  }

  stjerner();
}

let ysol = 0;
let dysol = 2;

function sunMove() {
  animation3 = requestAnimationFrame(sunMove);

  if (ysol >= 150) {
    ctx.clearRect(0, 150, 200, 200);

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 150, 200, 200);
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(50, 150);
    ctx.lineTo(100, 200);
    ctx.lineTo(150, 150);
    ctx.lineTo(200, 200);
    ctx.strokeStyle = "rgb(115, 222, 244)";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(50, 200);
    ctx.lineTo(100, 150);
    ctx.lineTo(150, 200);
    ctx.lineTo(200, 150);
    ctx.stroke();
  }

  sol(ysol);
  ysol += dysol;

  if (ysol == 200) {
    dysol = 0;
  }
}

function changeSun() {
  if (solFarge == "yellow") {
    solFarge = "#8B0000";
  } else {
    solFarge = "yellow";
  }
}

function resetValues() {
  ysol = 0;
  dysol = 2;
  xrød = 0;
  dxrød = 1;
  xgrønn = 100;
  dxgrønn = 1;
}

function animerCanvas() {
  redMove();
  greenMove();
  sunMove();
  bakgrunn();
  stjerner();
}

function resetCanvas() {
  cancelAnimationFrame(animation1);
  cancelAnimationFrame(animation2);
  cancelAnimationFrame(animation3);
  resetValues();
  bakgrunn();
  rødFirkant(0);
  grønnFirkant(100);
  sol(0);
  stjerner();
}
