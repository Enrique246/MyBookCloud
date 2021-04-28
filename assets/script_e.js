var resultTextEl = document.querySelector('#result-text');
 var resultContentEl = document.querySelector('#selected-book-box');
 var searchFormEl = document.querySelector('#search-form-nyt');
 var searchTitleEl = document.querySelector('sResultBy')

 // NY Times Books API: by best sellers (YA FUNCIONA)
function searchApi () {
    var NYBooksAPIKey = '5DWunwN9QOM7uw5MKvFLET8jlI6cayHP';
    var URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?=ran&api-key=${NYBooksAPIKey}`;
    fetch(URL)
       .then(function (response) {
           return response.json();
       })
       .then(function (locRes) {
    
           console.log(locRes);
    
           if (!locRes.results.length){
               console.log('No results found!');
               resultContentEl.innerHTML='<h3>No results found, search again!</h3>'
           }
         else {
            resultContentEl.textContent = '';
            for (var i = 0; i < locRes.results.length; i++) {
              printResults(locRes.results[i]);
              console.log(locRes);
              //console.log(results)
              console.log("Results go here", locRes.results[i]);
            }
          }
        })
       };
    
    // Print Results
       function printResults(resultObj) {
           resultContentEl.textContent = "";
        var bookSearched = document.getElementById("search-form-nyt").value;
        var sResultBy = document.getElementById("sResultBy");
        sResultBy.innerHTML = bookSearched;
    
          
            console.log(resultObj);
    
           //Book result container ('div')
           var resultCard = document.createElement('div');
           resultCard.classList = "card, background-success, color-dark"
           var resultBody = document.createElement('div');
           resultBody.classList.add('card-body');
           resultCard.append(resultBody);
         
           var titleEl = document.createElement('h3');
           titleEl.textContent = resultObj.title;
         
            var bodyContentEl = document.createElement('p');
           bodyContentEl.innerHTML =
           // resultObj.ranks_history.published_date
              '<strong>Publish Date:</strong> ' + resultObj.ranks_history.publish_date + '<br/>';
         
           if (resultObj.author) {
             bodyContentEl.innerHTML +=
               '<strong>Author:</strong> ' + resultObj.author + '<br/>';
           } else {
             bodyContentEl.innerHTML +=
               '<strong>Author:</strong> No subject for this entry.';
           }
         
           if (resultObj.description) {
             bodyContentEl.innerHTML +=
               '<strong>Description:</strong> ' + resultObj.description;
           } else {
             bodyContentEl.innerHTML +=
               '<strong>Description:</strong>  No description for this entry.';
           }
         
           var linkButtonEl = document.createElement('a');
           linkButtonEl.textContent = 'Read More';
           linkButtonEl.setAttribute('href', resultObj.url);
           linkButtonEl.classList.add('button', 'button-dark');
    
           var likeButtonEl = document.createElement('button');
           likeButtonEl.textContent = ('src', "/Users/enrique/Coding-Bootcamp/project1/assets/thumb-up.png") + '<br/>';
           //likeButtonEl.setAttribute('href', "https://pngimg.com/uploads/like/like_PNG51.png") + '<br/>';
           likeButtonEl.classList.add('button','hollow', 'secondary')
           
         
           resultBody.append(titleEl, bodyContentEl, linkButtonEl,likeButtonEl );
         
           resultContentEl.append(resultCard);
         };
       
    
       // Search Handler
       function handleSearchFormSubmit(event) {
        event.preventDefault();
      
        var searchInputVal = document.querySelector('#search-input-nyt').value;
        //var formatInputVal = document.querySelector('#format-input').value;
      
        if (!searchInputVal) {
          console.error('You need a search input value!');
          return;
        }
        //searchApi(searchInputVal, formatInputVal);
        searchApi(searchInputVal);
      }
    
    searchFormEl.addEventListener("click", handleSearchFormSubmit);