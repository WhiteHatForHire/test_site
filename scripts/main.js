var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/max.jpg') {
      myImage.setAttribute ('src','images/murray.jpg');
    } else {
      myImage.setAttribute ('src','images/max.jpg');
    }
}

var myButton = document.querySelector('button.jawn');
var commentButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function error() {
	alert("Feature not yet ready");
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to the site, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the site, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

commentButton.onclick = function() {
  error();
}