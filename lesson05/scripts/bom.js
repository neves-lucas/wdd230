const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// finish this later
// will grab info from the json to limit the scripture reference the user can insert.
fetch('book-of-mormon.json')
  .then(response => response.json())
  .then(data => {
    const book = data.book;
    const chapter = data.chapter;
    const reference = data.reference;
    const verse = data.verse;
  });


button.addEventListener('click', () => {
  if (input.value === '') {
    window.alert('You need to enter a chapter.');
  }

  else {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.focus();
    input.value = '';
  }
});