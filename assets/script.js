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
               $('#result-text').html(author).val().trim().split(" ").join("+");
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
                  var GBbookImg = $("<img width='120' text-align: 'center'>").attr("src", GBimage).addClass("Search Image")
                  var GBResultTitle = $("<h1 class='label success' style='font-weight: bold; font-size: 30px'; 'text-align: center'>").html(
                     "Title: " + GBtitle + "<br>"
                  );
                  var GBResults = $("<h6 style='text-align: center'>").html(
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
   