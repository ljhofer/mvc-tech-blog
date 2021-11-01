const editEntryHandler = async (event) => {
  event.preventDefault();

  const entry_id = document.querySelector('#edit-entry-id').textContent;
  const entry_title = document.querySelector('#edited-title').value.trim();
  const entry_text = document.querySelector('#edited-text').value.trim();
  

  if (entry_title && entry_text) {
    const response = await fetch(`/api/entries/${entry_id}`, {
      method: 'PUT',
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

const deleteEntryHandler = async (event) => {
  event.preventDefault();

  const entry_id = document.querySelector('#edit-entry-id').textContent;
     
  const response = await fetch(`/api/entries/${entry_id}`, {
      method: 'DELETE',
    });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete project');
  }
};

document
  .querySelector('#edit-entry-form')
  .addEventListener('submit', editEntryHandler);

document
  .querySelector('.delete-button')
  .addEventListener('click', deleteEntryHandler);
