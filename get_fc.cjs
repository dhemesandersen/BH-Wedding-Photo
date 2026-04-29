const https = require('https');

https.get('https://bhweddingphoto.com/foto-casamento/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = new Set(data.match(/https?:\/\/[^"']*\.(jpg|jpeg|png|webp)/g));
    console.log(Array.from(urls).join('\n'));
  });
});
