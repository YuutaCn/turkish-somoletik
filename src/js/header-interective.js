window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('ul li a');
  let fromTop = window.scrollY;
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('item-active');
    } else {
      link.classList.remove('item-active');
    }
  });
});
