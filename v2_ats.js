const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTML content for the ATS-friendly CV
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
              margin-bottom: 5px;
          }
          h3 {
              font-size: 18px;
          }
          p, li {
              font-size: 14px;
              margin: 10px 0;
          }
          ul {
              margin: 10px 0;
              padding-left: 20px;
          }
          ul li {
              margin-bottom: 5px;
          }
      </style>
  </head>
  <body>
      <h1>Evald Spedzhev</h1>
      <p>Full Stack Python Software Engineer<br>Speke, Liverpool, UK<br>
      evald.spedzhev@gmail.com | +44 7403239956<br>
      <a href="https://www.linkedin.com/in/e-spedzhev/">LinkedIn</a> | <a href="https://github.com/espedzhev">GitHub</a></p>

      <h2>Summary</h2>
      <p>Experienced Full Stack Python Software Engineer with over 10 years of experience in building and maintaining high-performance web applications. Proficient in designing scalable solutions, implementing RESTful APIs, and working with modern front-end frameworks. Strong experience in leading projects, collaborating with cross-functional teams, and mentoring junior developers.</p>

      <h2>Professional Experience</h2>

      <h3>Software Engineering Technical Team Lead</h3>
      <p><strong>Wazoku Ltd</strong> - Remote<br><em>August 2023 – Present</em></p>
      <ul>
          <li>Lead a team of engineers, guiding them on technical direction, project management, and code quality.</li>
          <li>Collaborated with QA, product, and design teams to ensure seamless delivery.</li>
          <li>Provided mentorship to junior developers and implemented continuous improvement in development processes.</li>
      </ul>

      <h3>Senior Software Engineer</h3>
      <p><strong>Wazoku Ltd</strong> - Remote<br><em>November 2022 – August 2023</em></p>
      <ul>
          <li>Led technical projects and mentored other developers.</li>
          <li>Played a key role in translating business requirements into technical solutions.</li>
          <li>Focused on scaling multi-tenant SaaS applications and integrating third-party services.</li>
      </ul>

      <h3>Software Engineer</h3>
      <p><strong>Wazoku Ltd</strong> - Remote<br><em>October 2017 – November 2022</em></p>
      <ul>
          <li>Developed and maintained RESTful APIs for multi-tenant SaaS applications.</li>
          <li>Worked closely with frontend developers on Angular integration with Django REST Framework (DRF).</li>
          <li>Delivered regular sprint cycles and worked closely with stakeholders to meet project requirements.</li>
      </ul>

      <h3>Software Engineer</h3>
      <p><strong>The Realbuzz Group Ltd</strong> - Chester, UK<br><em>October 2015 – October 2017</em></p>
      <ul>
          <li>Built a new REST API for the project and collaborated with mobile developers for seamless integration.</li>
          <li>Contributed to the company's main product, providing solutions to the active endurance sector.</li>
      </ul>

      <h2>Education</h2>
      <h3>BSc Computer Science</h3>
      <p><strong>Swansea University</strong> - Swansea, UK<br><em>2010 – 2013</em></p>

      <h2>Technical Skills</h2>
      <ul>
          <li><strong>Languages:</strong> Python, JavaScript, HTML5, CSS3, SQL</li>
          <li><strong>Frameworks/Libraries:</strong> Django, Django REST Framework, Angular, AngularJS, jQuery, Bootstrap</li>
          <li><strong>Databases:</strong> PostgreSQL, Redis</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Tools & Platforms:</strong> Jira, Jenkins, Celery, AWS</li>
          <li><strong>Testing:</strong> Unit Testing, Selenium, pytest</li>
          <li><strong>Coding Practices:</strong> DRY, SOLID, TDD, CI/CD, Agile Methodologies</li>
          <li><strong>Other:</strong> RESTful API Design, GraphQL</li>
      </ul>

      <h2>References</h2>
      <p>Available upon request.</p>
  </body>
  </html>
  `;

  // Set the content of the page
  await page.setContent(htmlContent);

  // Generate PDF with A4 format and reduced font size for better layout
  await page.pdf({
    path: 'evald_spedzhev_v2_ats_cv.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });

  await browser.close();
})();
