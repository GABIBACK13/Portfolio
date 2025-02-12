const searchInput = document.getElementById('searchInput');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function displayResults(result) {
  resultPlaylist.classList.toggle("hidden", true); // Esconde playlists
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');
  const forceElement = result[0];
  console.log(forceElement);
  artistName.innerText = forceElement.name;
  artistImage.src = forceElement.urlImg;
  resultArtist.classList.toggle("hidden", false); // Mostra artistas
}

function requestArtistName(term) {
  const url = `http://localhost:3000/artists?name_like=${term}`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data)
    )
    .catch(error => console.error('Erro ao buscar artista:', error));
}

document.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase().trim();
  
  if (searchValue === '') {
    resultPlaylist.classList.toggle("hidden", false); // Mostra playlists
    resultArtist.classList.toggle("hidden", true); // Esconde artistas
  } else {
    requestArtistName(searchValue);
  }
});
