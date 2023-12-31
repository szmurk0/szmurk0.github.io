document.addEventListener('DOMContentLoaded', function () {
  var kodContainer = document.getElementById('kod-container');

  fetch('kod.txt')
    .then(response => response.text())
    .then(data => {
      // Zamień znaki nowej linii na znaczniki <br>
      var formattedData = data.replace(/\n/g, '<br>');

      // Wstaw sformatowaną zawartość pliku do elementu <p> z użyciem innerHTML
      kodContainer.innerHTML = formattedData;
    })
    .catch(error => {
      console.error('Błąd pobierania pliku:', error);
    });
});
