const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#new-comment-text').value.trim();
  const entry_id = document.querySelector('#entry-id').textContent;

  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, entry_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create comment');
    }
  }
};


document
  .querySelector('.comment-submit-form')
  .addEventListener('submit', newCommentHandler);


