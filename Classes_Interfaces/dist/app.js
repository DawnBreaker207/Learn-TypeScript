"use strict";
class Department {
    //? Shortcut
    //? constructor(public readonly id: string, private name: string)
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //? Public
        //? Readonly
        // private readonly id: string;
        // private name: string;
        //? Private
        // private employees: string[] = [];
        //? Protected
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    // {
    //   // console.log(`Department (${this.id}): ${this.name}`);
    // }
    addEmployee(employees) {
        // this.id = 'db'
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
        console.log(Department.fiscalYear);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReports) {
            return this.lastReports;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReports = reports[0];
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Anh') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReports = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
// const accounting = new Department('D1', 'Accounting');
// const accounting = new Department('D1', ['MAX']);
// // console.log(accounting);
// accounting.addEmployee('Tung');
// accounting.addEmployee('Anh');
// // accounting.employees[2] = 'Anna';
// // accounting.name = 'NEW NAME';
// accounting.describe();
// accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
const employee1 = Department.createEmployee('Anh');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('D1', ['MAX']);
// console.log(it);
it.addEmployee('Tung');
it.addEmployee('Anh');
// it.employees[2] = 'Anna';
// it.name = 'NEW NAME';
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Anh');
accounting.addEmployee('Tung');
accounting.describe();
// accounting.printReports();
// accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map