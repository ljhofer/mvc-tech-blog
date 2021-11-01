const newEntryHandler = async (event) => {
  event.preventDefault();

  const entry_title = document.querySelector('#new-entry-title').value.trim();
  const entry_text = document.querySelector('#new-entry-text').value.trim();
  

  if (entry_title && entry_text) {
    const response = await fetch(`/api/entries`, {
      method: 'POST',
      body: JSON.stringify({ entry_title, entry_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create entry');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.entry-submit-form')
  .addEventListener('submit', newEntryHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
