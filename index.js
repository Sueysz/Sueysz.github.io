const toggleBtn = document.getElementById('dark-btn');
const body = document.body;

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});