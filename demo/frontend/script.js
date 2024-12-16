document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    // Create new post
    const newPost = document.createElement('article');
    newPost.classList.add('post');
    newPost.innerHTML = `
      <h2 class="post-title">${title}</h2>
      <p class="post-content">${content}</p>
    `;
  
    // Add post to the blog
    document.getElementById('blog-posts').appendChild(newPost);
  
    // Clear form inputs
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  });
  