const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  // Wait for the "Starting app" overlay to disappear, or just wait a few seconds
  console.log("Navigating to projects...");
  await page.goto('https://www.nsoc.in/projects', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 5000)); // Give React time to render
  
  const projectsText = await page.evaluate(() => document.body.innerText);
  console.log("PROJECTS TEXT:");
  console.log(projectsText.substring(0, 1000)); // First 1000 chars

  console.log("Navigating to sponsors...");
  await page.goto('https://www.nsoc.in/sponsors', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 5000));
  
  const sponsorsText = await page.evaluate(() => document.body.innerText);
  console.log("SPONSORS TEXT:");
  console.log(sponsorsText.substring(0, 1000));

  await browser.close();
})();
