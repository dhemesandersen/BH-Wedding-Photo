const https = require('https');

const pages = [
  'https://bhweddingphoto.com/foto-casamento/',
  'https://bhweddingphoto.com/fotografia-noivado/',
  'https://bhweddingphoto.com/'
];

function fetchImages(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /<img[^>]+src="([^">]+\.(jpg|jpeg|png|webp))"/g; // Added capturing group for extension
        let match;
        const imgs = new Set();
        while ((match = regex.exec(data)) !== null) {
          if (match[1].includes('wp-content')) {
             imgs.add(match[1]);
          }
        }
        resolve(Array.from(imgs));
      });
    }).on('error', (e) => {
      console.error(e);
      resolve([]);
    });
  });
}

async function run() {
  const allImages = new Set();
  for (const page of pages) {
    const imgs = await fetchImages(page);
    imgs.forEach(img => allImages.add(img));
  }
  
  console.log(Array.from(allImages).join('\n'));
}
run();
