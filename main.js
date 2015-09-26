document.querySelector('.webview-selected .webview-show-sidebar-button').addEventListener('click', e => {
  console.log(42);
  document.body.classList.toggle('mode2');
});

document.body.addEventListener('keypress', e => {
  if (e.keyCode == 27) {
    document.body.classList.toggle('mode2');
  }
});
