import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './layout/Layout';
import Dashboard from './pages/admin/Dashboard';
import Logout from './pages/Logout';
import Employee from './pages/admin/Employee'
import AssignedWork from './pages/employee/AssignedWork'
import Student from './pages/admin/Student'
import AdminProtectedRoute from './routes/AdminProtectedRoute';
import ViewEmployees from './components/employee/ViewEmployees';
import EmployeeProfile from './components/employee/EmployeeProfile';
import Application from './components/application/Application';
import AllApplications from './components/application/AllApplications';
import UserProtectedRoute from './routes/UserProtectedRoute';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route index path='/logout' element={<Logout />} />
          <Route path='/' element={<Layout />}>
            <Route element={<AdminProtectedRoute />}>
              <Route path='admin/dashboard' element={<Dashboard />} />
              <Route path='admin/employee' element={<Employee />} />
              <Route path='admin/employee/list/:role' element={<ViewEmployees />} />
              <Route path='admin/employee/profile/:id' element={<EmployeeProfile />} />
              <Route path='admin/application/:id' element={<Application />} />
              <Route path='admin/applications' element={<AllApplications />} />
              <Route path='admin/student' element={<Student />} />
            </Route>
            <Route element={<UserProtectedRoute />}>
              <Route path='employee/dashboard' element={<EmployeeDashboard />} />
              <Route path='employee/application' element={<AssignedWork />} />
              <Route path='employee/application/:id' element={<Application />} />
            </Route>
          </Route>
          <Route path='*' element={<div>Pages Not Found</div>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
