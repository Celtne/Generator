let heading = document.getElementById("title");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");
let imageElem = document.getElementById("outputImage");

let times = ["Corgi!", "Golden Retriever", "Pitbull", "Chihuahua"];
let matchingImage = ["corgi.png", "retriever.png", "pitbull.png", "chihuahua.jpg"];


executeButton.addEventListener("click", function(){
  let currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
  let randomIndex = Math.floor(Math.random() * times.length);
  let selectedRandomTimeText = times[randomIndex];
  outputParagraph.innerText = incUserInput + " you are a " + selectedRandomTimeText;
  imageElem.src = matchingImage[randomIndex];
}


function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb("+randR+","+randG+","+randB+")";
  outputParagraph.style.backgroundColor = randOutputColor;
  var randRot = -10 + (Math.random() * 20 );
  outputParagraph.style.transform = "rotate(" + randRot + "deg)";
}