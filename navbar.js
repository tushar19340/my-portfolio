var icon = document.getElementsByClassName("nav_icon")[0];
icon.addEventListener("click", showNav);

function showNav(){
    document.querySelector("ul").classList.toggle("show");
}
