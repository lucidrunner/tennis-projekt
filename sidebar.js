function openNav() {
  document.getElementById("sidenav").style.width = "min(200px, 70%)";
  let button = document.getElementById("sidenav-button");
  button.style.right = "min(200px, 70%)";
  button.style.transform = "scaleX(-1)";
  button.onclick = closeNav;
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  let button = document.getElementById("sidenav-button");
  button.style.right = "3px";
  button.style.transform = "scaleX(1)";
  button.onclick = openNav;
}
