const toggleBtn = document.getElementById('dark-btn');
const body = document.body;

toggleBtn.addEventListener('click', () =>{
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    
    const moonIcon = document.createElement('span');
    moonIcon.id = 'dark-btn';
    moonIcon.innerHTML = '🌙';
    toggleBtn.parentNode.replaceChild(moonIcon, toggleBtn);
  } else {
    
    const sunIcon = document.createElement('span');
    sunIcon.id = 'dark-btn';
    sunIcon.innerHTML = '☀️';
    toggleBtn.parentNode.replaceChild(sunIcon, toggleBtn);
  }
});
