$(document).ready(function () {

   // Submit function to search
   $('#submit-btn1').click(function (event) {
      event.preventDefault();

      // Search by author and order by relevance (default) or newest
      var authorByGoogle = $('#exampleFormControlInput1').val().trim();
      var orderBy = document.querySelector('#format-input1').value;
      var GoogleAPIKey = 'AIzaSyBjBtdqp8hFmjH8MUjGWcgMXITnOJ0pZkU';

      // URL for Google Book API + author + order
      var URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorByGoogle}&orderBy=${orderBy}&key=${GoogleAPIKey}`;

      // Alert if search is done with no input
      if (!authorByGoogle) {
         alert('You need a search input value!');
         return;
      }

      fetch(URL)
         .then(function (response) {
            return response.json();
         })
         // .then(function (data) {
         //    console.log(data);
         // });

         // $.ajax({
         //    url: URL,
         //    method: "GET"
         // })
         .then(function (response) {
            $('#results-container').empty();
            for (var i = 0; i < response.items.length; i++) {
               var GBtitle = response.items[i].volumeInfo.title;
               var GBauthor = response.items[i].volumeInfo.authors;
               var GBdate = response.items[i].volumeInfo.publishedDate;
               var GBimage = response.items[i].volumeInfo.imageLinks.smallThumbnail
               var GBbookImg = $("<img>").attr("src", GBimage).addClass("Search Image")
               var GBResultTitle = $("<h1 class='label primary'>").html(
                  "Title: " + GBtitle + "<br>"
               );
               var GBResults = $("<h6>").html(
                  "Author: " + GBauthor + "<br>" +
                  "Date: " + GBdate + "<br> <hr hr-border 2px solid $black>"
               );
               console.log(GBResults);
               $('#results-container').append(GBResultTitle, GBbookImg, GBResults);
               // // // // document.cookie = 'cross-site-cookie=bar; SameSite=Lax';
            };
         });
   })
});