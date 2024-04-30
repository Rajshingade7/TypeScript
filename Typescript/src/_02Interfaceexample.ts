interface Employee {
    id: number;
    name: string;
    role: string;
    department: string;
    salary: number;
}

interface Manager extends Employee {
    teamSize: number;
}

interface Executive extends Employee {
    stockOptions: number;
}
const regularEmployee: Employee = {
    id: 1,
    name: "John Doe",
    role: "Software Developer",
    department: "Engineering",
    salary: 60000
};

const manager: Manager = {
    id: 2,
    name: "Jane Smith",
    role: "Engineering Manager",
    department: "Engineering",
    salary: 80000,
    teamSize: 10
};

const executive: Executive = {
    id: 3,
    name: "Alice Johnson",
    role: "CEO",
    department: "Executive",
    salary: 200000,
    stockOptions: 10000
};
function displayEmployeeInfo(employee: Employee): void {
    console.log(`ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Role: ${employee.role}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Salary: ${employee.salary}`);
    console.log("-------------------");
}

displayEmployeeInfo(regularEmployee);
displayEmployeeInfo(manager);
displayEmployeeInfo(executive);
