var ie = document.all;
var ns6 = document.getElementById && !document.all;

var dragapproved = false;
var z, x, y;

function move(e) {
  if (dragapproved) {
    z.style.left = ns6 ? temp1 + e.clientX - x : temp1 + event.clientX - x;
    z.style.top = ns6 ? temp2 + e.clientY - y : temp2 + event.clientY - y;
    return false;
  }
}

function drags(e) {
  if (!ie && !ns6) return;
  var firedobj = ns6 ? e.target : event.srcElement;
  var topelement = ns6 ? "HTML" : "BODY";

  while (firedobj.tagName != topelement && firedobj.className != "drag") {
    firedobj = ns6 ? firedobj.parentNode : firedobj.parentElement;
  }

  if (firedobj.className == "drag") {
    dragapproved = true;
    z = firedobj;
    temp1 = parseInt(z.style.left + 0);
    temp2 = parseInt(z.style.top + 0);
    x = ns6 ? e.clientX : event.clientX;
    y = ns6 ? e.clientY : event.clientY;
    if (drgbl === true) {
      document.onmousemove = move;
    } else {
      document.getElementById("title").innerHTML = "Press Ctrl!!";
    }
    return false;
  }
}
var drgbl = false;
document.onkeydown = function (e) {
  if (e.key === "Control") {
    drgbl = true;
  }
}
document.onkeyup = function (e) {
    drgbl = false;
}
document.onmousedown = function (e) {
    if (drgbl === true) {
      drags(e)
    }
}
document.onmouseup = function(e) {
  dragapproved = false;
  document.getElementById("title").innerHTML = "Calculator";
}
