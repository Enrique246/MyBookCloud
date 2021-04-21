let gfetch {
fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
  .then(response => response.json())
  .then(data => console.log(data));

}

  console.log (gfetch);