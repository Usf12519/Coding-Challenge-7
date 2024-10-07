// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Parker',
                    salary: 80000,
                    subordinates: [
                        {
                            name: 'Collin'
                            salary: 95000,
                            subordinates: []
                         }
                    ]
                }
            ]
        }
},
                {
                    name: 'Alex',
                    salary: 65000,
                    subordinates: []

                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Rachael',
                    salary: 150000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 40000,
                            subordinates: []
                        }
                    ]
                }
                {   
                    name: 'Samantha',
                    salary: 70000,
                    subordinates: []
                 }
            ]
        }
    ]
;

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary (employee) {
let departmentsalary = employee.subordinates}

for (let subordinate of employee.subordinates) {
    departmentsalary += calculateDepartmentSalary (subordinate);
}


        

        
            
        