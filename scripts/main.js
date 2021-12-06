const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
document.querySelector("html").onclick = function() {
  alert("Ouch! Stop poking me!");
};
let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute(
      "src",
      "images/https://cdn.glitch.me/e9a7366c-efb4-4ea1-b562-5aca3fce89cb%2F98933491-9bd3-4e13-88fd-4c9a88c8510f.image.png?1638789901742"
    );
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
