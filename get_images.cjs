const https = require('https');

const urls = [
  "https://bhweddingphoto.com/andreia-jose/",
  "https://bhweddingphoto.com/sruti-srijith/",
  "https://bhweddingphoto.com/francisca-ines/",
  "https://bhweddingphoto.com/gloria-patrick/",
  "https://bhweddingphoto.com/cindy-david/",
  "https://bhweddingphoto.com/alicia-sebastien-2/",
  "https://bhweddingphoto.com/diana-luis/"
];

async function fetchOgImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const match = data.match(/<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"/i) || 
                      data.match(/<img\s+[^>]*src="([^"]+wp-content\/uploads[^"]+)"/i);
                      
        if (match && match[1]) {
          resolve(match[1]);
        } else {
          resolve("Not found");
        }
      });
    }).on('error', err => reject(err));
  });
}

async function run() {
  for (const url of urls) {
    const img = await fetchOgImage(url);
    console.log(`${url} -> ${img}`);
  }
}

run();
