const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTML content of the cover letter with questions and answers
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Evald Spedzhev - Cover Letter</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 40px;
              line-height: 1.5;
              font-size: 14px;
          }
          h1 {
              font-size: 20px;
              margin-bottom: 5px;
          }
          p {
              margin: 10px 0;
              font-size: 14px;
          }
          ul {
              margin: 10px 0;
              padding-left: 20px;
          }
          ul li {
              margin-bottom: 5px;
          }
          .question {
              font-weight: bold;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <h1>Evald Spedzhev</h1>
      <p>Speke, Liverpool, UK<br>
      evald.spedzhev@gmail.com | +44 7403239956<br>
      Date: 10/09/2024</p>

      <p>Hiring Manager<br>
      Reincubate</p>

      <p>Dear Hiring Manager,</p>

      <p>I am writing to express my interest in the Software Engineer (Python/JS, remote GMT) position at Reincubate. 
      I am an experienced Full Stack Python Developer with expertise in Python, Django, JavaScript, and cloud-based infrastructures, 
      which aligns closely with the requirements of this role.</p>

      <p>In my previous position at Wazoku Ltd, I led one of the teams responsible for developing and maintaining multi-tenant SaaS applications, 
      focusing on robust backend systems and seamless integrations. Some relevant experiences I gained include:</p>

      <ul>
          <li>Front-end work based on the Angular (17) framework, involving extensive use of HTML, CSS (Tailwind CSS), and JavaScript (TypeScript). 
          We also started upgrading from AngularJS to Angular, with newer projects fully built in Angular.</li>
          <li>The back-end, built with Django/DRF, was recently upgraded to Django 4.2, while Python remains at version 3.9.</li>
          <li>My programming skills can be summarised as 60% Python/Django, 30% TypeScript, 5% PostgreSQL, 4% HTML, and 1% CSS.</li>
          <li>For CI/CD, we used Jenkins, supported by our DevOps team.</li>
      </ul>

      <p>Some key highlights of my work that align with your requirements:</p>
      <ul>
          <li>Our sprint lifecycle required regular communication and collaboration with various business areas, 
          including product owners, designers, and occasionally working directly with clients through our customer support gateway.</li>
          <li>The focus was on expanding the feature list, which often created challenges around introducing iterative 
          improvements with minimal refactoring or risky migrations.</li>
          <li>I found great satisfaction in delivering features from initial concept to release. The biggest challenge 
          was ensuring the implementation was as robust as possible to simplify future improvements.</li>
          <li>I relate strongly to your company’s values, especially integrity. I believe treating everything with respect 
          is one of the most important aspects of life.</li>
      </ul>

      <h2>Question and Answer Section</h2>
      <p class="question">Q: Tell us about a project, site or app you’ve built outside of work or education. What was hard? What was fun? Why did you build it? What do you plan to do next with it?</p>
      <p>A: I don’t have any finished public projects outside of work, but I can share my experience with a project I worked on at Wazoku. 
      I contributed to the development of the Challenge Builder V2, a flexible and configurable feature designed to improve user experience.</p>

      <p>We created a builder wizard that allowed users to configure default settings in just a few minutes, 
      while providing advanced users the option to customize through hidden sections in expandable accordions. 
      This approach simplified complex configurations into a user-friendly interface, making it adaptable for both casual and power users.</p>

      <p>Next, we plan to introduce tailored templates based on common use cases to improve the client onboarding process.</p>

      <p class="question">Q: Similarly, please share an example of a great application that solves a difficult UX/interface challenge? What makes it great?</p>
      <p>A: The key UX challenge was providing a balance between simplicity and flexibility. Users can breeze through the default settings in just a few minutes, while advanced users can access the more complex options through expandable sections.</p>

      <p>I am excited about the opportunity to join your team and contribute my experience to your projects. 
      I would appreciate your consideration of me as a candidate for this role.</p>

      <p>Thank you for your time, and I look forward to hearing from you.</p>

      <p>Sincerely,<br>Evald Spedzhev</p>
  </body>
  </html>
  `;

  // Set the content of the page
  await page.setContent(htmlContent);

  // Generate PDF with reduced font size and proper layout
  await page.pdf({
    path: 'reincubate_evald_spedzhev.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });

  await browser.close();
})();
