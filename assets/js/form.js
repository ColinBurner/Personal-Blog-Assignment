document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    localStorage.setItem('name', name);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);

    window.location.href = 'blog.html';

});



