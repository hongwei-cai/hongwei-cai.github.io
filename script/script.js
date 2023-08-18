// Accordion effect on work list
let workHeading = document.querySelectorAll(".workTitle");
let workPanel = document.querySelectorAll(".workContent");

for (let i = 0; i < workHeading.length; i++) {
  workHeading[i].onclick = function() {
    if (this.nextElementSibling.style.maxHeight) {
      hidePanels();
    } else {
      showPanel(this);
    }
  };
}
function showPanel(elem) {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}
function hidePanels() {
  for (let i = 0; i < workPanel.length; i++) {
    workPanel[i].style.maxHeight = null;
    workHeading[i].classList.remove("active");
  }
}
