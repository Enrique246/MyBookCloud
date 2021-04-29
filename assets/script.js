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
               var GBcategories = response.items[i].volumeInfo.categories;
               var GBdate = response.items[i].volumeInfo.publishedDate;
               // var GBlink = response.items[i].volumeInfo.previewLink;
               var GBimage = response.items[i].volumeInfo.imageLinks.smallThumbnail
               var GBbookImg = $("<img width='120' text-align: 'center'>").attr("src", GBimage).addClass("Search Image")
               var GBResultTitle = $("<h1 class='label success' style='font-weight: bold; font-size: 30px'>").html(
                  "Title: " + GBtitle + "<br>"
               );
               var GBResults = $("<h6>").html(
                  "Author: " + GBauthor + "<br>" +
                  "Category: " + GBcategories + "<br>" +
                  "Date: " + GBdate + "<br>"
                  // "Link to Google Books site: " + "<p href='GBlink'></p>" + "<br> <hr hr-border 2px solid $black>"
               );
               var GBlike = $("<div id='like' class='button' data-role='button' data-inline='true' data-mini='true' data-theme='b'><i class='far fa-thumbs-up'></i></button>").trigger('create');
               console.log(GBResults);
               $('#result-text').html(authorByGoogle);
               $('#results-container').append(GBResultTitle, GBbookImg, GBResults, GBlike);
               // // // // document.cookie = 'cross-site-cookie=bar; SameSite=Lax';
            };
         });
   })
});

$('#like').click(function (event) {
   event.preventDefault();
})