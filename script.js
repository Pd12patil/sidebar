
const sidebarElement = document.getElementById("sidebar");
const hamburgerMenuElement = document.getElementById("hamburger-menu");

function openSidebar() {
  sidebarElement.style.visibility = "visible";
  hamburgerMenuElement.style.visibility = "hidden";
}

function closeSidebar() {
  sidebarElement.style.visibility = "hidden";
  hamburgerMenuElement.style.visibility = "visible";
}

