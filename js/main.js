const themeToggle = document.getElementById('theme-toggle');
const accessibilityToggle = document.getElementById('accessibility-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerText = 'light_mode'; // sol
  } else {
    themeToggle.innerText = 'dark_mode'; // lua
  }
});

accessibilityToggle.addEventListener('click', () => {
  document.body.classList.toggle('large-font');
});
