document.addEventListener('DOMContentLoaded', function () {
  var kodContainer = document.getElementById('kod-container');

  fetch('kod.txt')
    .then(response => response.text())
    .then(data => {
      // Wstaw zawartość pliku do elementu <p> z użyciem innerHTML
      kodContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Błąd pobierania pliku:', error);
    });
});
