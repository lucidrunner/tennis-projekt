jQuery(function () {
  const mqMobile = window.matchMedia("(max-width: 425px)");
  const navIndexText = "Om STF";
  const navBanorText = "Banor";
  const navOmklText = "Omklädningsrum";
  const navBastuText = "Bastu";
  const navSponsText = "Våra Sponsorer";

  mqMobile.addEventListener("change", mqHandler);

  mqHandler(mqMobile);

  function mqHandler(e) {
    console.log(e.matches ? "small" : "not small");

    if (e.matches) {
      // Without jquery
      // document.getElementById("nav-index").textContent = "";
      // document.getElementById("nav-index").classList.add("fa-solid", "fa-volleyball", "fa-lg");
      //With Jquery
      $("#nav-index").text("").addClass("fa-solid fa-house fa-lg");
      $("#nav-banor").text("").addClass("fa-solid fa-volleyball fa-lg");
      $("#nav-omkl").text("").addClass("fa-solid fa-restroom fa-lg");
      $("#nav-bastu").text("").addClass("fa-solid fa-hot-tub-person fa-lg");
      $("#nav-spons").text("").addClass("fa-solid fa-medal fa-lg");
    } else {
      $("#nav-index").text(navIndexText).removeClass("fa-solid fa-house fa-lg");
      $("#nav-banor")
        .text(navBanorText)
        .removeClass("fa-solid fa-volleyball fa-lg");
      $("#nav-omkl")
        .text(navOmklText)
        .removeClass("fa-solid fa-restroom fa-lg");
      $("#nav-bastu")
        .text(navBastuText)
        .removeClass("fa-solid fa-hot-tub-person fa-lg");
      $("#nav-spons").text(navSponsText).removeClass("fa-solid fa-medal fa-lg");
    }
  }
});
