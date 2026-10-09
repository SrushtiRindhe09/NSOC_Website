const https = require('https');

https.get('https://www.nsoc.in/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const linkRegex = /<link[^>]+href="([^">]+\.(png|svg|ico|jpg))"/g;
    
    let match;
    console.log("--- IMAGES ---");
    while ((match = imgRegex.exec(data)) !== null) {
      console.log(match[1]);
    }
    
    console.log("--- ICONS ---");
    while ((match = linkRegex.exec(data)) !== null) {
      console.log(match[1]);
    }
  });
});
