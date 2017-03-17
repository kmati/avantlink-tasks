const request = require('request');

request({
    url: 'http://homework.avantlink.com/applications', //URL to hit
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: 'Kimanzi',
      last_name: 'Mati',
      email: 'kimanzi_mati@hotmail.com'
    })
}, function (error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});
