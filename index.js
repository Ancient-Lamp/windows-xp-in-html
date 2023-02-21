function hideWindow(object) {
  document.getElementById(object).style = "display: none;";
}
function showWindow(object) {
  document.getElementById(object).style = "display: block;";
}
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m;// + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

var menuOpen = false;
function toggleMenu () {
  if (menuOpen) {
    document.getElementById("menu").style = "display: none;";
    menuOpen = false;
  } else {
    document.getElementById("menu").style = "display: block;";
    menuOpen = true;
  }
}