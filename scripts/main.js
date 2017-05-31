var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/max.jpg') {
      myImage.setAttribute ('src','images/murray.jpg');
    } else {
      myImage.setAttribute ('src','images/max.jpg');
    }
}