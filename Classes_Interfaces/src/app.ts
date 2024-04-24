class Department {
  static fiscalYear = 2024;
  //? Public
  //? Readonly
  // private readonly id: string;
  // private name: string;
  //? Private
  // private employees: string[] = [];
  //? Protected
  protected employees: string[] = [];
  //? Shortcut
  //? constructor(public readonly id: string, private name: string)
  constructor(public readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employees: string) {
    // this.id = 'db'
    this.employees.push(employees);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
    console.log(Department.fiscalYear);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReports: string;

  get mostRecentReport() {
    if (this.lastReports) {
      return this.lastReports;
    }
    throw new Error('No report found');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReports = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Anh') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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
accounting.printReports();
accounting.printEmployeeInformation();
