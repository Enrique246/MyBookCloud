// Get the query and format values
var query = searchParamsArr[0].split('=').pop();
var format = searchParamsArr[1].split('=').pop();

let gfetch = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
{
fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')

 .then(response => response.json())
 .then(data => console.log(data));

};

 console.log (gfetch);

 var URL = 'https://www.googleapis.com/books/v1/volumes?q=tuna'
fetch(URL)
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       console.log(data);
   });



   function searchApi(query, format) {
       var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
     
       if (format) {
         locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
       }
     
       locQueryUrl = locQueryUrl + '&q=' + query;
     
       fetch(locQueryUrl)
         .then(function (response) {
           if (!response.ok) {
             throw response.json();
           }
     
           return response.json();
         })
         .then(function (locRes) {
           // write query to page so user knows what they are viewing
           resultTextEl.textContent = locRes.search.query;
     
           console.log(locRes);
     
           if (!locRes.results.length) {
             console.log('No results found!');
             resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
           } else {
             resultContentEl.textContent = '';
             for (var i = 0; i < locRes.results.length; i++) {
               printResults(locRes.results[i]);
             }
           }
         })
         .catch(function (error) {
           console.error(error);
         });
     }