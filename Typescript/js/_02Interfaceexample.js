var regularEmployee = {
    id: 1,
    name: "John Doe",
    role: "Software Developer",
    department: "Engineering",
    salary: 60000
};
var manager = {
    id: 2,
    name: "Jane Smith",
    role: "Engineering Manager",
    department: "Engineering",
    salary: 80000,
    teamSize: 10
};
var executive = {
    id: 3,
    name: "Alice Johnson",
    role: "CEO",
    department: "Executive",
    salary: 200000,
    stockOptions: 10000
};
function displayEmployeeInfo(employee) {
    console.log("ID: ".concat(employee.id));
    console.log("Name: ".concat(employee.name));
    console.log("Role: ".concat(employee.role));
    console.log("Department: ".concat(employee.department));
    console.log("Salary: ".concat(employee.salary));
    console.log("-------------------");
}
displayEmployeeInfo(regularEmployee);
displayEmployeeInfo(manager);
displayEmployeeInfo(executive);
