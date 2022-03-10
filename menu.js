var vid = document.getElementById("video2");
var vidmessage = document.getElementById("videoMessage2");
var vidcont = document.getElementById("videoDiv2")

function playVid() {
  if (vidmessage.style.transform == "translateX(0%)") {
    vidmessage.style.transform = "translateX(-100%)";   
    vid.classList.remove('preel')  
    vid.classList.add('creel')
    vid.currentTime = 0 
  } else {
    vidmessage.style.transform = "translateX(0%)";
    vid.classList.remove('creel')  
    vid.classList.add('preel')
  }
  vid.muted = !vid.muted;
}

function pauseVid() {
  if (vidmessage.style.transform == "translateX(-100%)") {
    vidmessage.style.transform = "translateX(0%)";
    vid.classList.remove('creel')  
    vid.classList.add('preel')
    vid.muted = !vid.muted;
  }
}

var vidwork = document.getElementById("my-video");


// Media Query

var maxW = "50vw";

function maxWidth(x) {
  if (x.matches) {
    // If media query matches
    maxW = "100vw";
  } else {
    maxW = "50vw";
  }
}

var x = window.matchMedia("(max-width: 960px)");
maxWidth(x); // Call listener function at run time
Menu;

function toggleNavPanel(x) {
  var panel = document.getElementById(x);

  if (panel.style.width == maxW) {
    //menu open
    panel.style.width = "0px";
  } else {
    //menu closed
    panel.style.width = maxW;
  }
}
