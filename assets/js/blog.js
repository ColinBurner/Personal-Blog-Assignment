// toggle theme function controls what happens when the dark/light mode button is clicked based on which one is currently active
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('dark-mode', newTheme === 'dark');
  document.body.classList.toggle('light-mode', newTheme === 'light');
  localStorage.setItem('theme', newTheme);
  updateThemeToggleButton(newTheme);
}

// initialize theme function switches to the stored theme to make the button consistently interactive
function initializeTheme() {
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', storedTheme === 'dark');
  document.body.classList.toggle('light-mode', storedTheme === 'light');
  updateThemeToggleButton(storedTheme);
}

// this function makes the button emojis of a moon and sun to represent dark and light mode
function updateThemeToggleButton(theme) {
  const button = document.getElementById('themeToggle');
  button.innerHTML = theme === 'dark' ? '🌞' : '🌙';
}

// this function gets the input data from the landing page form and displays it in the form of a blog post on the secondary page
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

// these event listeners listen for the dark/light mode button and the back button to be clicked in order to execute the proper function
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('backButton').addEventListener('click', () => {
  window.location.href = 'index.html';
});

window.onload = function() {
  initializeTheme();
  displayBlogPosts();

};

