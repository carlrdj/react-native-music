const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=b7cb3d3982924f7ed743495c9beaed4c&format=json`

function getArtists() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => ({
      id: artist.mbid,
      name: artist.name,
      image: artist.image[3]['#text'],
      likes: 200,
      comments: 140
    })))
}

export { getArtists }