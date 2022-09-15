const axios = require('axios');

// axios.get(
//   'https://api.api-ninjas.com/v1/randomword', process.env.X_Api_Key
// , function(error, response, body) {
//     console.log('taco', body)
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });


const api = async () => {
    try {
       const resp = await axios.get('https://api.api-ninjas.com/v1/randomword') 
       console.log('taco', resp.data)
    } catch (err) {
        console.warn(err)
    }
}
api()
