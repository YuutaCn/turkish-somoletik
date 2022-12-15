document.querySelectorAll('.go-demo').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('[data-demo]').innerHTML = '<iframe id="demo" scrolling="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"src="https://demo.spribe.io/launch/aviator?currency=USD&amp;lang=EN&amp;return_url=https://spribe.co/games"></iframe>';
  });
});
