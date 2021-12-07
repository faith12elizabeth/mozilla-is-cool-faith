// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://cdn.glitch.me/b30c9a68-761a-4d57-a59b-3a0a7d76f50a%2Ffirefox-icon.png?1637566654977') {
    myImage.setAttribute ('src','https://cdn.glitch.me/e9a7366c-efb4-4ea1-b562-5aca3fce89cb%2Fdownload.jpeg?1638788767948');
  } else {
    myImage.setAttribute ('src','https://cdn.glitch.me/b30c9a68-761a-4d57-a59b-3a0a7d76f50a%2Ffirefox-icon.png?1637566654977');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}