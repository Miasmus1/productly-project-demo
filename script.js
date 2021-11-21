const items = document.querySelectorAll(".carousel-item");

items.forEach((el) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = items[0]; // restart carousel from first element
    }
    let cloneChild = next.cloneNode(true); // deep clone
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
