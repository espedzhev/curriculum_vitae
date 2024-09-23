const puppeteer = require('puppeteer');
const markdown = require('markdown').markdown;
const fs = require('fs');
const path = require('path');

// Path to your Markdown file
const markdownFilePath = path.join(__dirname, 'v2.md');

// Read the Markdown file
fs.readFile(markdownFilePath, 'utf8', async (err, markdownContent) => {
  if (err) {
    console.error('Error reading Markdown file:', err);
    return;
  }

  // Convert Markdown to HTML
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Evald Spedzhev - CV</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 40px;
                line-height: 1.5;
                font-size: 14px;
            }
            h1, h2, h3 {
                font-size: 20px;
                margin-bottom: 10px;
            }
            p, ul {
                margin: 10px 0;
                font-size: 14px;
            }
            ul {
                padding-left: 20px;
            }
            ul li {
                margin-bottom: 5px;
            }
        </style>
    </head>
    <body>
        ${markdown.toHTML(markdownContent)}
    </body>
    </html>
  `;

  // Launch Puppeteer to generate the PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the content of the page
  await page.setContent(htmlContent);

  // Generate PDF with A4 format and margins
  await page.pdf({
    path: 'evald_spedzhev_v3_js.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });

  await browser.close();
  console.log('PDF generated successfully.');
});
