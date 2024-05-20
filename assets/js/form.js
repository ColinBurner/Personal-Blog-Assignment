// this function collects user data from the form upon the event of a click on the submit button
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

// if name, title and content sections are filled out, the data is pushed to local storage
    if (name && title && content) {
        const blogPost = { name: name, title: title, content: content };
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href = 'blog.html';
    } else {
        alert('Please fill in all fields.');
    }
});

// ^ else alert happens if a section is not filled out

