const trash = document.querySelector('a.delete');
trash.addEventListener('click', (e) => {
    const endpoint = `/blogs/${trash.dataset.doc}`;
    fetch(endpoint, {
    method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));
});

const edit = document.querySelector('a.edit');
edit.addEventListener('click', (e) => {
    const endpoint = `/blogs/${edit.dataset.doc}`;
    fetch(endpoint, {
    method: 'PUT',
    })
    .then(response => response.json())
    .then(data => {
    window.location.href = data.redirect;
    })
    .catch(err => console.log(err));
});