const https = require('https');

https.get('https://bhweddingphoto.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Regex to find image sources
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (match[1].includes('wp-content')) {
         console.log(match[1]);
      }
    }
  });
});
