var myHeading = document.querySelector('h1');
myHeading.textContent = 'Nopuhlkhkhge';
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');


myImage.onmouseover = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/Greenery.gif');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'The Horde or the Alliance?` ' + storedName;
}