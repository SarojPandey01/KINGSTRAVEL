let hamButton = document.getElementById("hb");
let mobMenu = document.getElementById("mobileList");
var show = true;
function toggleMenu() {
  if (show) {
    mobMenu.style.left = "0";
  } else {
    mobMenu.style.left = "-200px";
  }
  show = !show;
}
