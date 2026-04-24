const https = require('https');
const fs = require('fs');

https.get('https://destination-wedding.bhweddingphoto.com/assets/index-CgnO9iGA.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('live.js', data);
    console.log('Downloaded JS');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
