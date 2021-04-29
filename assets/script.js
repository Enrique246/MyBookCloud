 // var resultTextEl = document.querySelector('#result-text');
//  var resultContentEl = document.querySelector('#selected-book-box');
//  var searchFormEl = document.querySelector('#search-form-nyt');
//  var searchTitleEl = document.querySelector('sResultBy')


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
// function searchApi () {
// var NYBooksAPIKey = '5DWunwN9QOM7uw5MKvFLET8jlI6cayHP';
// var URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?=ran&api-key=${NYBooksAPIKey}`;
// fetch(URL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (locRes) {

//        console.log(locRes);

//        if (!locRes.results.length){
//            console.log('No results found!');
//            resultContentEl.innerHTML='<h3>No results found, search again!</h3>'
//        }
//      else {
//         resultContentEl.textContent = '';
//         for (var i = 0; i < locRes.results.length; i++) {
//           printResults(locRes.results[i]);
//           console.log(locRes);
//           //console.log(results)
//           console.log("Results go here", locRes.results[i]);
//         }
//       }
//     })
//    };

   //Display of input in search space
// function displayTitle(){
//    var bookSearched = document.getElementById("search-form-nyt").value;
//    var sResultBy = document.getElementById("sResultBy");
//    sResultBy.innerHTML = bookSearched;
//    console.log(sResultBy);   
// };
// displayTitle();
 //    var bookSearched = document.getElementById("search-form-nyt").value;
    //    var sResultBy = document.getElementById("sResultBy");
    //    sResultBy.innerHTML = bookSearched;
   //console.log(bookSearched);

// Print Results
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
             resultCard.addClass ("card, background-success, color-dark")

            var titleElement = $("<h1 class='label primary'>").html(titleEl + "<br/>")
           

            var bodyContentEl = $('<p>').html (
                '<strong>Author:</strong> ' + NYauthor + '<br/>'+
                '<strong>Description:</strong> ' + NYdes + '<br/>'+
              '<strong>Publisher:</strong> ' + NYpublisher + '<br/>'
              );
           
            console.log(NYauthor);
            console.log (NYdes);
            //console.log (NYranks);

            //var NYResultTitle = $("</h3>").html(
            //    "Title: " + NYtitle + "<br>"
            //  );
            $('#results-container').append(titleElement,bodyContentEl);

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
