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
