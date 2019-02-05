const request = require("request");
const zomatoUserKey = process.env.zomatoUserKey;

module.exports = {
    results(req, res, next) {
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