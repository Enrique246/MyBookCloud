// var resultTextEl = document.querySelector('#result-text');
// var resultContentEl = document.querySelector('#result-content');
// var searchFormEl = document.querySelector('#search-form');


// let gfetch = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
// {
// fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')

//  .then(response => response.json())
//  .then(data => console.log(data));

// };

//  console.log (gfetch);

//  var URL = 'https://www.googleapis.com/books/v1/volumes?q=tuna'
// fetch(URL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        console.log(data);
//    });



//      }

//  searchApi();

//  function printResults(resultObj) {
//     console.log(resultObj);

//     // set up `<div>` to hold result content
//     var resultCard = document.createElement('div');
//     resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//  }


// Google API: subject  (YA FUNCIONA)

// var GoogleAPIKey = 'AIzaSyBjBtdqp8hFmjH8MUjGWcgMXITnOJ0pZkU';

// var URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${}&key=${GoogleAPIKey}`;
// fetch(URL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        console.log(data);
//    });


// Google API: author / newest  (YA FUNCIONA)

// var authorByGoogle = document.querySelector('#authorByGoogle');
// var orderBy = document.querySelector('#orderBy');
// var authorByGoogle = document.querySelector('#exampleFormControlInput1'); // "Octavio Paz";
// var orderBy = "newest";

$(document).ready(function(){

   // Submit function to search
   $('#submit-btn').click(function(event) {
      event.preventDefault();
      
      // Search by author and order by relevance (default) or newest
      var authorByGoogle = $('#exampleFormControlInput1').val().trim();
      var orderBy = document.querySelector('#format-input').value;
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
      .then(function (response){
         $('#results-container').empty();
         for(var i = 0; i < response.items.length; i++){
            var GBtitle = response.items[i].volumeInfo.title;
            var GBauthor = response.items[i].volumeInfo.authors;
            var GBdate = response.items[i].volumeInfo.publishedDate;
            var GBimage = response.items[i].volumeInfo.imageLinks.smallThumbnail
            var GBbookImg = $("<img>").attr("src", GBimage).addClass("Search Image")
            var GBResultTitle = $("<h4>").html(
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

// // var URL = `https://www.googleapis.com/books/v1/volumes?q=subtitle:fiction&inauthor:keyes&orderBy=newest&key=${GoogleAPIKey}`;

// var authorByGoogle = document.querySelector('#exampleFormControlInput1');
// var GoogleAPIKey = 'AIzaSyBjBtdqp8hFmjH8MUjGWcgMXITnOJ0pZkU';

// var filledForm = function (event) {
    
//    var authorSelected = authorByGoogle
//        .value
//        .trim()
//        .toLowerCase()

//        if (authorSelected){
//           console.log(data);
//        }};

// // // Google API: search by author with no order / order by newest or relevance

// var authorByGoogle = "Octavio Paz";

// function testGroup() {
//    if (document.getElementById('exampleRadioSwitch1').checked == true) {
//       var URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorByGoogle}&key=${GoogleAPIKey}`;
//       fetch(URL)
//       .then(function (response) {
//          return response.json();
//       })
//       .then(function (data) {
//          console.log(data);
//       });
//    } else if (document.getElementById('exampleRadioSwitch2').checked == true) {
//       var URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorByGoogle}&orderBy=newest&key=${GoogleAPIKey}`;
//       fetch(URL)
//       .then(function (response) {
//          return response.json();
//       })
//       .then(function (data) {
//          console.log(data);
//       });
//    }  else if (document.getElementById('exampleRadioSwitch3').checked == true) {
//       var URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorByGoogle}&orderBy=relevance&key=${GoogleAPIKey}`;
//       fetch(URL)
//       .then(function (response) {
//          return response.json();
//       })
//       .then(function (data) {
//          console.log(data);
//       });
// }}

// Google API: subtitle & author / newest  (YA FUNCIONA)

// var GoogleAPIKey = 'AIzaSyBjBtdqp8hFmjH8MUjGWcgMXITnOJ0pZkU';

// var URL = `https://www.googleapis.com/books/v1/volumes?q=subtitle:fiction&inauthor:keyes&orderBy=newest&key=${GoogleAPIKey}`;
// // var URL = `https://www.googleapis.com/books/v1/volumes?q=subtitle:${}&inauthor:${}&orderBy=${}&key=${GoogleAPIKey}`;
// fetch(URL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        console.log(data);
//    });



//  for (var i = 0; i < locRes.results.length; i++) {
//     printResults(locRes.results[i]);
//   }

//   function handleSearchFormSubmit(event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('#search-input').value;
//     var formatInputVal = document.querySelector('#format-input').value;

//     if (!searchInputVal) {
//       console.error('You need a search input value!');
//       return;
//     }

//     searchApi(searchInputVal, formatInputVal);
//   }

//   searchFormEl.addEventListener('submit', handleSearchFormSubmit);