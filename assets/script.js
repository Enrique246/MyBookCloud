$(document).ready(function () {
   $('#submit-btn2').click(function (resultObj) {
      event.preventDefault();
      var NYBooksAPIKey = '5DWunwN9QOM7uw5MKvFLET8jlI6cayHP';
      var author = $('#exampleFormControlInput2').val().trim().split(" ").join("+");
      //var history = document.querySelector('#format-input2').value;
      //var URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers?q=${history}.json?ran&api-key=${NYBooksAPIKey}`;
      var URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history/author.json.json?author=${author}&api-key=${NYBooksAPIKey}`

      console.log(author)
      //resultContentEl.text ("");

      //`https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorByGoogle}&orderBy=${orderBy}&key=${GoogleAPIKey}`;

      //https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=5DWunwN9QOM7uw5MKvFLET8jlI6cayHP



      //console.log(sResultBy);
      console.log(resultObj);

      // Alert if search is done with no input
      if (!author) {
         alert('You need a search input value!');
         return;
      }

      fetch(URL)
         .then(function (response) {
            return response.json();
         })
         .then(function (response) {
            $('#results-container').empty();
            for (var i = 0; i < response.results.length; i++) {
               var titleEl = response.results[i].title;
               var NYauthor = response.results[i].author;
               var NYdes = response.results[i].description;
               var NYpublisher = response.results[i].publisher;

               var resultCard = $("<div>");
               resultCard.addClass("card, background-success, color-dark")

               var titleElement = $("<h1 class='label primary' style='font-weight: bold; font-size: 30px'; 'text-align: center'>").html(titleEl + "<br/>")


               var bodyContentEl = $('<p>').html(
                  '<strong>Author:</strong> ' + NYauthor + '<br/>' +
                  '<strong>Description:</strong> ' + NYdes + '<br/>' +
                  '<strong>Publisher:</strong> ' + NYpublisher + '<br/>'
               );

               console.log(NYauthor);
               console.log(NYdes);
               //console.log (NYranks);

               //var NYResultTitle = $("</h3>").html(
               //    "Title: " + NYtitle + "<br>"
               //  );
               $('#results-container').append(titleElement, bodyContentEl);
               var author2 = $('#exampleFormControlInput2').val();
               var resultText =
               $('#result-text')
               resultText.text(author2)
               // console.log(NYResultTitle)

            }
         });

   });
});


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
         .then(function (response) {
            $('#results-container').empty();
            for (var i = 0; i < response.items.length; i++) {
               var GBtitle = response.items[i].volumeInfo.title;
               var GBauthor = response.items[i].volumeInfo.authors;
               var GBcategories = response.items[i].volumeInfo.categories;
               var GBdate = response.items[i].volumeInfo.publishedDate;
               // var GBlink = response.items[i].volumeInfo.previewLink;
               var GBimage = response.items[i].volumeInfo.imageLinks.smallThumbnail
               var GBbookImg = $("<img width='150' text-align: 'center'>").attr("src", GBimage).addClass("Search Image")
               var GBResultTitle = $("<h1 class='label primary' style='font-weight: bold; font-size: 30px'; 'text-align: center'>").html(
                  "Title: " + GBtitle + "<br>"
               );
               var GBResults = $("<h6 style='text-align: left'>").html(
                  "<strong>Author: </strong> " + GBauthor + "<br>" +
                  "<strong>Category: </strong> " + GBcategories + "<br>" +
                  "<strong>Date: </strong> " + GBdate + "<br>"
                  // "Link to Google Books site: " + "<p href='GBlink'></p>" + "<br> <hr hr-border 2px solid $black>"
               );
               console.log(GBResults);
               $('#result-text').html(authorByGoogle);
               $('#results-container').append(GBResultTitle, GBbookImg, GBResults);
               // // // // document.cookie = 'cross-site-cookie=bar; SameSite=Lax';
            };
         });         
         $('#like').remove();
         var GBlike = $("<button id='like' class='button' data-role='button' data-inline='true' data-mini='true' data-theme='b'><i class='far fa-thumbs-up'></i></button>").trigger('create');
         $('#btn-like').append(GBlike);

         $('#love').remove();
         var GBlove = $("<button id='love' class='button' onclick='clickCounting()' type='button' data-role='button' data-inline='true' data-mini='true' data-theme='b'><i class='far fa-heart'></i> <span id='NumberLoves' class='badge secondary'> <strong>  </strong> </span> <span class='sr-only'> number of likes </span>  </button>").trigger('create');
         $('#btn-love').append(GBlove);
         $('#NumberLoves').html("I like search experience: <strong>" + localStorage.clickcount + "</strong>");
   })
});
 
let savedBooks = [];
let sSearch = function () {
   localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
 };
 let bookTitleEl = $("#exampleFormControlInput1");
 let bookFormEl = $("#search-form-G");
 let pSearchEl = $("#p-search-b");

             console.log(bookTitleEl);
   // var inputValue1 = $("#exampleFormControlInput1").val();    
   // var currentSavedSearches = localStorage.getItem ("SavedSearches");          
   // localStorage.setItem ("SavedSearches", currentSavedSearches + "," + inputValue1);
  $('#like').click(function () {  
   let pSearch = function(pSearch) {
      pastSeEl = $("<button>");
      pastSeEl.text (pSearch);
        pastSeEl.attr("data-book", pSearch);
        pSearchEl.attr("type", "submit");
        pSearchEl.prepend(pastSeEl);
          }
   console.log(pSearch);
           
          let searchHandler = function (event) {
            console.log("click");
            event.preventDefault();
          
            let book = bookTitleEl.value().trim();
            console.log(book);
             if (book) {
         //  goTownWeather(town);
         //   go5Day(town);
              savedBooks.unshift({book});
         //       //The unshift() method 
         //       //Adds one or more elements to the beginning of an array and returns the new length of the array.
         //       //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
         //       townTitleEl.value = "";
             
             sSearch();
             pSearch(book);
          };
        }
          
        bookFormEl.addEventListener("click", searchHandler);
      });







function clickCounting(){
   if(typeof(Storage) !== "undefined"){
      if (localStorage.clickcount){
         localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
         localStorage.clickcount = 1;
      }
      $('#NumberLoves').html("I like search experience: <strong>" + localStorage.clickcount + "</strong>");
   } else {
      $('#NumberLoves').html("null");
   }
}


// $('#like').click(function (event) {
//    event.preventDefault();

//    let pSearch = function(pSearch) {
//       pastSeEl.attr("data-book", pSearch);
//       pSearchEl.attr("type", "submit");
//       pSearchEl.prepend(pastSeEl);
//     }

//     console.log(pSearch);

   //  let pSearchHand = function (e) {
   //    let town = e.target.attr("exampleFormControlInput1");
   //    if (town) {
   //      goTownWeather (town);
   //      go5Day (town);
   // //    }
   //  }


   //  let pSearch = function(pSearch) {
   //    pastSeEl = document.createElement("button");
   //    pastSeEl.textContent = pSearch;
   //    pastSeEl.classList = "d-flex w-100 btn-white border p-2";
   //    pastSeEl.setAttribute("data-town", pSearch);
   //    pSearchEl.setAttribute("type", "submit");
   //    pSearchEl.prepend(pastSeEl);
   //  }
   //  let pSearchHand = function (e) {
   //    let town = e.target.getAttribute("data-town");
   //    if (town) {
   //      goTownWeather (town);
   //      go5Day (town);
   //    }
   //  }
