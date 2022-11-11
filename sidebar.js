function openNav() {
  document.getElementById("sidenav").style.width = "200px";
  let button = document.getElementById("sidenav-button");
  button.style.right = "200px";
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
