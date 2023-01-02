const Manager = require("../lib/Manager");

const name = "Zoe";
const id = 2;
const email = `test@email.com`;
const officeNumber = 23;

describe("Manager", () => {
    it(`Grabs office number`, () => {
        const newEmployee = new Manager(name, id, email, officeNumber);
        expect(newEmployee.officeNumber).toBe(officeNumber);
    });
});

describe("getOfficeNumber", () => {
    it(`Return office number from getOfficeNumber()`, () => {
        const newEmployee = new Employee(name, id, email, officeNumber);
        expect(newEmployee.getOfficeNumber()).toBe(officeNumber);
    });
});

describe("getRole", () => {
    it(`Return role from getRole()`, () => {
        const role = "Manager";
        const newEmployee = new Employee(name, id, email, officeNumber);
        expect(newEmployee.getRole()).toBe(role);
    });
});
