let index = 0;  
// window.location.href = "http://www.w3schools.com";

let img = document.getElementById("imageslider");
let imgArray = [
  "./images/lumbini.jpg",
  "./images/swayambhu.jpg",
  "./images/mteverest.jpg",
  "./images/para.webp",
  "./images/taj.jpg",
  "./images/pexels-photo-745243.jpg",
  "./images/mountains1.jpg",
];

setInterval(IncreaseIndex, 5000); //Slide image every 5 seconds
function IncreaseIndex() {
  index = Math.abs(index);
  img.src = imgArray[index];
  if (index >= imgArray.length - 1) {
    index = 0;
  }
  index += 1;
}
let indNew = 0;
function DecreaseIndex() {
  indNew = Math.abs(index);
  img.src = imgArray[indNew];
  if (indNew >= imgArray.length - 1) {
    index = 0;
  }
  index -= 1;
}
//show slider arrow
let arrow1 = document.getElementById("b1");
let arrow2 = document.getElementById("b2");
img.addEventListener("mouseover", showArrow);
arrow1.addEventListener("mouseover", showArrow);
arrow2.addEventListener("mouseover", showArrow);
function showArrow() {
  arrow1.style.right = "0";
  arrow2.style.left = "0";
}
//remove slider arrow
function hideArrow() {
  arrow1.style.right = "-50px";
  arrow2.style.left = "-50px";
}

img.addEventListener("mouseout", hideArrow);
