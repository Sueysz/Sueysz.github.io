const toggleBtn = document.getElementById('dark-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    toggleBtn.innerHTML = '☀️';
  } else {
    body.classList.add('dark-mode');
    toggleBtn.innerHTML = '🌙';
  }
});
