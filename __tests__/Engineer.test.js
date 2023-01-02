const Engineer = require("../lib/Engineer");

const name = "Zoe";
const id = 2;
const email = `test@email.com`;
const github = "ZoeRorvig";

describe("Engineer", () => {
    it(`Grabs github username`, () => {
        const newEmployee = new Engineer(name, id, email, github);
        expect(newEmployee.github).toBe(github);
    });
});

describe("getGithub", () => {
    it(`Return github username from getGithub()`, () => {
        const newEmployee = new Engineer(name, id, email, github);
        expect(newEmployee.getGithub()).toBe(github);
    });
});

describe("getRole", () => {
    it(`Return role from getRole()`, () => {
        const role = "Engineer";
        const newEmployee = new Engineer(name, id, email, github);
        expect(newEmployee.getRole()).toBe(role);
    });
});

