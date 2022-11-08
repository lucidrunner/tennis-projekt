function openNav(){
    document.getElementById("sidenav").style.width = "15%";
    let button = document.getElementById("sidenav-button");
    button.style.right = "15%";
    button.style.transform = "scaleX(-1)";
    button.onclick = closeNav;
}
function closeNav(){
    document.getElementById("sidenav").style.width = "0";
    let button = document.getElementById("sidenav-button");
    button.style.right = "3px";
    button.style.transform = "scaleX(1)";
    button.onclick = openNav;
}