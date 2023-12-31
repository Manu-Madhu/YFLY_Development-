export const baseUrl = "http://localhost:8800"


// Login page
export const loginPost = '/api/auth/login'

// Logout
export const userLogout = './api/auth/logout'

// employee Dashboard data
export const dashData = '/api/admin/get-application-metrics'

// Register Student
export const studentRegisterRoute = '/api/student/create'

//Register Employee
export const employeeRegisterRoute = '/api/employee/create'

// Get Employee list by department;
export const getEmployeesRoute = '/api/employee/get-all';

//Get an Employee;
export const getAnEmployeeRoute = '/api/employee/get';

//Get an Application;
export const getAnApplicationRoute = '/api/application/get';

// Get all Applications;
export const getAllApplications ='/api/application/get-all';

// Get all StudentData;
export const getAllStudent ='/api/student/get-all';

// Get an employee data;
export const getAEmployeeData ='/api/employee/get'

//Get Assigned works;
export const getAssignedWorksRoute = '/api/employee/get-assigned-works'