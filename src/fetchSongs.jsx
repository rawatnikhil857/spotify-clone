const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '53cf488c48mshcd46c1bb968361cp1a1173jsnfa336d9d9092',
      'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
  };
  genre="Pop"
  fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre='+genre, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

