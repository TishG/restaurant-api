const request = require("request");
const zomatoUserKey = process.env.zomatoUserKey;

module.exports = {
    results(req, res, next) {
      //API CALLS DO NOT WORK ON HEROKU, TO TEST UI ON HEROKU YOU MAY UNCOMMENT THE CODE BELOW AND COMMENT OUT ALL OTHER CODE IN THIS FUNCTION.
    //   res.render('results', {data: 
    //     {restaurants: [
    //       {restaurant: {name: "Way 2 Cheezy", location: {address: "404 imaginary drive"}}},
    //       {restaurant: {name: "Pizza and things", location: {address: "405 imaginary drive"}}}
    //     ]
    //   }
    // });
      const entry = req.query.entry;
      const entity = req.query.entity;
      const options = { 
      url: `https://developers.zomato.com/api/v2.1/search?q=entity_${entity}%3D${entry}%3D`,
      headers: 
       { 'cache-control': 'no-cache',
         'user-key': zomatoUserKey }
        };
      request(options, (err, response, body) => {
          if(!err && response.statusCode == 200) {
              const data = JSON.parse(body);
              res.render('results', {data: data});
          }
      })
    }
  }