const accordionHeaders = document.querySelectorAll('.accordion-header');


accordionHeaders.forEach((item) => {
  item.addEventListener('click', toggleItem, false);
});

function toggleItem() {

  const selectedElement = this.nextElementSibling;
  const isCollapsed = selectedElement.classList.contains("collapse");

  const closeSymbol = this.lastElementChild;

  accordionHeaders.forEach((item) => {
    const openSection = item.nextElementSibling;
    
    if (!openSection.classList.contains("collapse")) {
      openSection.classList.add("collapse");    
      closeSymbol.classList.remove("open-dropdown");
    } 
  });
    if (isCollapsed) {
      selectedElement.classList.remove("collapse");
      closeSymbol.classList.add("open-dropdown");

    }
}
