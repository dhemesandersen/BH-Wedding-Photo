const https = require('https');
const fs = require('fs');

https.get('https://destination-wedding.bhweddingphoto.com/assets/index-CgnO9iGA.js.map', (res) => {
  if (res.statusCode === 200) {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        fs.writeFileSync('map.json', data);
        console.log('Downloaded Map');
      });
  } else {
      console.log('No map found: ' + res.statusCode);
  }
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
