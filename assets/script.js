var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');


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


// Pulling info from API
   function searchApi() {
    
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    
    .then(response => response.json())
    .then(data => console.log(data));
     
       
         
     }

 searchApi();
  
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
  