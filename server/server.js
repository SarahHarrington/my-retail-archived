var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const http = require('http');

app.use(express.static('server/public'));

http.get('http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics', (resp) =>{
  let data = '';

  resp.on('data', (chunk) => {
    data = chunk;
  });

  resp.on('end', () => {
    console.log(data);
  });
  
}).on('error', (err) => {
  console.log('Error:' + err.message);
})


app.listen(port, function(req, res) {
  console.log('Listening on port', port);
})