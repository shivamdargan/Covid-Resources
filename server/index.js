const express = require('express');
const app = express();
const port = 3001;
const unirest = require("unirest");
require('dotenv').config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/tweets/:query/:pagination_token', (req, res) => {

  const request = unirest("GET", "https://api.twitter.com/2/tweets/search/recent");
  if(req.params.pagination_token === "null"){
    request.query({ "query": req.params.query, "max_results": 25 });
  }
  else{
    request.query({ "query": req.params.query, "next_token": req.params.pagination_token , "max_results": 25 });
  }
  console.log(request);
  request.headers({
    "Authorization": "Bearer " + process.env.BEARER_TOKEN,
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.})   AppleWebKit/{WebKit Rev} (KHTML, like Gecko) Chrome/{Chrome Rev} Mobile Safari/{WebKit Rev}"
  });
  request.end(function (response) {
    if (response.error) {
        console.log(response.error);
        throw new Error(response.error);
    }
    res.json(response.body);
  });
});
app.listen(port, () => {
  console.log(`Twitter API server listening at http://localhost:${port}`);
});
