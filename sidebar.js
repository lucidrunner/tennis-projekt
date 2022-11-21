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

jQuery(function () {
  const mqMobile = window.matchMedia("(max-width: 425px)");
  mqMobile.addEventListener("change", mqHandler);

  mqHandler(mqMobile);

  function mqHandler(e) {
    if (e.matches) {
      closeNav();
      $("#sidenav-button").addClass("hidden");
    } else {
      $("#sidenav-button").removeClass("hidden");
    }
  }
});
