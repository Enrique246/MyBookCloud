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



// Functional fetch for Google API  (YA FUNCIONA)

// var GoogleAPIKey = 'AIzaSyBjBtdqp8hFmjH8MUjGWcgMXITnOJ0pZkU';

// var URL = `https://www.googleapis.com/books/v1/volumes?q=search+terms&key=${GoogleAPIKey}`;
// fetch(URL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        console.log(data);
//    });



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



// NY Times Books API  (YA FUNCIONA)

// var NYBooksAPIKey = '5DWunwN9QOM7uw5MKvFLET8jlI6cayHP';
// var URL = `https://api.nytimes.com/svc/books/v3/lists.json?list=tacos&api-key=${NYBooksAPIKey}`;
// fetch(URL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        console.log(data);
//    });


// NY Times Books API: by best sellers (YA FUNCIONA)

var NYBooksAPIKey = '5DWunwN9QOM7uw5MKvFLET8jlI6cayHP';
var URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?=ran&api-key=${NYBooksAPIKey}`;
fetch(URL)
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       console.log(data);
   });




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
  