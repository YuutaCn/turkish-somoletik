document.querySelectorAll('.faq__drop').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('drop--active')
  });
});
