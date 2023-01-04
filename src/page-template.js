const htmlArray = [];

// Create the team
const generateTeamMembers = (team) => {
for (let i = 0; i < team.length; i++){
  if(team[i].role === "Manager"){
    generateManager(team[i]);
  }else if(team[i].role === "Engineer"){
    generateEngineer(team[i]);
  } else{
    generateIntern(team[i]);
  }
}

return htmlArray.join("");
};

// Create the managers card
const generateManager = (manager) => {
  htmlArray.push(`
<article>
<h2>${manager.name}</h2>
<p>${manager.role}</p>
<ul>
  <li>ID: ${manager.id}</li>
  <li>Email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
  <li>Office Number: ${manager.officeNumber}</li>
</ul>
</article>
`)};

// Create the engineer card
const generateEngineer = (engineer) => {
  htmlArray.push(`
<article>
<h2>${engineer.name}</h2>
<p>${engineer.role}</p>
<ul>
  <li>ID: ${engineer.id}</li>
  <li>Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
  <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
</ul>
</article>
`)};

// Create the intern card
const generateIntern = (intern) => {
  htmlArray.push(`
<article>
<h2>${intern.name}</h2>
<p>${intern.role}</p>
<ul>
  <li>ID: ${intern.id}</li>
  <li>Email: <a href = "mailto: ${intern.email}">${intern.email}</a></li>
  <li>School: ${intern.school}</li>
</ul>
</article>
`)};

// Export function to generate entire page
module.exports = (team) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
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
      margin: 10px;
      width: 100%;
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
