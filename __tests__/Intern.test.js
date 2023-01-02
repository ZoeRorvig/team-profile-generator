const Intern = require("../lib/Intern");

const name = "Zoe";
const id = 2;
const email = `test@email.com`;
const school = "NC State"

describe("Intern", () => {
    it(`Grabs school`, () => {
        const newEmployee = new Intern(name, id, email, school);
        expect(newEmployee.school).toBe(school);
    });
});

describe("getGithub", () => {
    it(`Return school from getSchool()`, () => {
        const newEmployee = new Intern(name, id, email, school);
        expect(newEmployee.getSchool()).toBe(school);
    });
});

describe("getRole", () => {
    it(`Return role from getRole()`, () => {
        const role = "Intern";
        const newEmployee = new Intern(name, id, email, school);
        expect(newEmployee.getRole()).toBe(role);
    });
});