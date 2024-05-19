function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('dark-mode', newTheme === 'dark');
  document.body.classList.toggle('light-mode', newTheme === 'light');
  localStorage.setItem('theme', newTheme);
  updateThemeToggleButton(newTheme);
}


function initializeTheme() {
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', storedTheme === 'dark');
  document.body.classList.toggle('light-mode', storedTheme === 'light');
  updateThemeToggleButton(storedTheme);
}

function updateThemeToggleButton(theme) {
  const button = document.getElementById('themeToggle');
  button.innerHTML = theme === 'dark' ? '🌞' : '🌙';
}

function displayBlogPosts() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const container = document.getElementById('blogPostsContainer');
  container.innerHTML = '';

  blogPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><h3>Author: ${post.name}</h3>`;
      container.appendChild(postDiv);
  });
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('backButton').addEventListener('click', () => {
  window.location.href = 'index.html';
});

window.onload = function() {
  initializeTheme();
  displayBlogPosts();

};

