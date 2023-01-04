const htmlArray = [];

// create the team
const generateTeamMembers = (team) => {
generateManager(team[0]);
console.log(htmlArray);
return htmlArray;
};

const generateManager = (manager) => {
  htmlArray.push(`
<article>
<h2>${manager.name}</h2>
<p>${manager.role}</p>
<ul>
  <li>ID: ${manager.id}</li>
  <li>Email: ${manager.email}</li>
  <li>Office Number: ${manager.officeNumber}</li>
</ul>
</article>
`)};

// export function to generate entire page
module.exports = (team) => {
   return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <!-- Minified version -->
      <style>
        @import "https://cdn.simplecss.org/simple.min.css";
    
        main {
          display: grid;
          grid-column: 1/-1;
          justify-items: center;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          max-width: 1140px;
          margin: auto;
        }
    
        article {
          background-color: rgb(1, 39, 39);
        }
    
        @media screen and (max-width: 1140px) {
          main {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width: 720px) {
          main {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        ${generateTeamMembers(team)}
      </main>
      <footer>
        &copy; 2022-2023
      </footer>
    </body>
    </html>
    `
};
