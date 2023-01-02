const Employee = require("../lib/Employee");

const name = "Zoe";
const id = 2;
const email = `test@email.com`;

describe("Employee", () => {
    it(`Creates an employee object`, () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });

    it(`Grabs employee's name`, () => {
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    });

    it(`Grabs employee's id`, () => {
        const newEmployee = new Employee(name, id);
        expect(newEmployee.id).toBe(id);
    });

    it(`Grabs employee's email`, () => {
        const newEmployee = new Employee(name, id, email);
        expect(newEmployee.email).toBe(email);
    });
});

describe("getName", () => {
    it(`Return name from getName()`, () => {
        const newEmployee = new Employee(name, id, email);
        expect(newEmployee.getName()).toBe(name);
    });
});

describe("getID", () => {
    it(`Return id from getID()`, () => {
        const newEmployee = new Employee(name, id, email);
        expect(newEmployee.getID()).toBe(id);
    });
});

describe("getEmail", () => {
    it(`Return email from getEmail()`, () => {
        const newEmployee = new Employee(name, id, email);
        expect(newEmployee.getEmail()).toBe(email);
    });
});

describe("getRole", () => {
    it(`Return role from getRole()`, () => {
        const role = "Employee";
        const newEmployee = new Employee(name, id, email);
        expect(newEmployee.getRole()).toBe(role);
    });
});
