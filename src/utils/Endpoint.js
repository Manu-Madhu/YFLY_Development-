// export const baseUrl = "https://server.emtsolutions.online"
export const baseUrl = "http://localhost:8800"

// Login page
export const loginPost = '/api/auth/login'

// Logout
export const userLogout = '/api/auth/logout'

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

// Get Route to refresh token;
export const refreshTokenRoute = '/api/auth/refresh-token';

// Post Route to Send Otp;
export const sendOtpRoute = '/api/auth/send-otp'

// Post Route to verify email;
export const verifyOtpRoute = '/api/auth/verify-mail'

//Put Update employee
export const updateEmployeeRoute = '/api/employee/update'

//Put change-Password of Employee
export const changeEmpPwdRoute = '/api/employee/change-password'

//Put Deactivate-Employee
export const deactivateEmployeeRoute = '/api/employee/deactivate';

//Get A Student
export const getAStudentRoute = '/api/student/get';

//Put Update-Student
export const updateStudentRoute = '/api/student/update';

//Put Change-Password of Student
export const changeStdtPwdRoute = '/api/student/change-password';

//Put Change-Password of Admin
export const changeAdmnPwdRoute = '/api/admin/change-password';

//Get Admin;
export const getAdminRoute = '/api/admin/get'; //<== + AdminId

//Put Update Admin;
export const updateAdminRoute = '/api/admin/update';

//Put Assign Work;
export const workAssignRoute = '/api/admin/assign-work';

//Put Remove Assignee;
export const removeAssigneeRoute = '/api/admin/remove-assignee';

//Post Create application
export const createApplicationRoute = '/api/application/create';

//Delete Delete Application
export const deleteApplicationRoute = '/api/application/delete'; //<== + ApplicationId

//Put Update Application;
export const updateApplicationRoute = '/api/application/update';

//Post Upload Documents of an Application;
export const uploadDocumentRoute = '/api/application/upload-document'; //<== + ApplicationId

//Get All comments in an Application;
export const getAllComments = '/api/comment/get-all'; //<== + ApplicationId

//Post a Comment;
export const postComment = '/api/comment/add';

// Get Employee Task Metrics;
export const getEmpTaskMetrics = "/api/employee/get-task-metrics"; //<== + EmployeeId

// Put Change Step Status;
export const changeStepStatus = "/api/application/change-status";