// Write your solution in this file!

const employee = {
    name: "John Doe", 
    streetAddress: "4325 Congress Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeObjNew = {...employee}

    employeeObjNew[key] = value

    return employeeObjNew

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeObjNew = {...employee}

    delete employeeObjNew[key]

    return employeeObjNew
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}