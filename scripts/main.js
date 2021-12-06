const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
document.querySelector("html").onclick = function() {
  alert("Ouch! Stop poking me!");
};
let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/firefox-icon.png") {
    myImage.setAttribute("assets/download.jpeg");
  } else {
    myImage.setAttribute("assets/firefox-icon.png");
  }
};
