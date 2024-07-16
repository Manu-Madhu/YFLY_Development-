import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './layout/Layout';

import AdminProtectedRoute from './routes/AdminProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import ViewEmployees from './components/employee/ViewEmployees';
import EmployeeProfile from './components/employee/EmployeeProfile';
import Application from './components/application/Application';
import AllApplications from './components/application/AllApplications';
import Student from './pages/admin/Student'

import UserProtectedRoute from './routes/UserProtectedRoute';
import Employee from './pages/admin/Employee'
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import AssignedWork from './pages/employee/AssignedWork'

import StudentProtectedRoute from './routes/StudentProtectedRoute';
import StudentDashboard from './pages/student/StudentDashboard';
import Project from './pages/admin/Project';
import SearchApplication from "./components/search/Application"
import Team from './components/projeect/Team';
import Stepper from './pages/admin/Stepper';
import StaffProtectedRoute from './routes/StaffProtectedRoute';
import StudentApplication from './pages/student/StudentApplication';
import Followups from './pages/employee/Followups';
import { useDispatch, useSelector } from 'react-redux';
import { dataRoute } from './utils/Endpoint';
import axios from './api/axios';
import { useEffect } from 'react';
import { setAdminDefinedData } from './redux/slices/CommonDataReducer';
import Settings from './pages/settings/Settings';
import { messaging } from './configs/firebase';
import { getToken, onMessage, onTokenRefresh } from "firebase/messaging";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.userInfo)
  const userId = user?._id;

  const getAdminDefinedData = async () => {
    try {
      const response = await axios.get(dataRoute)
      const adminDefinedData = response?.data?.data || [];
      dispatch(setAdminDefinedData(adminDefinedData))

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAdminDefinedData()
  }, [])


  useEffect(() => {
    if (userId) {
      const requestPermissionAndGetToken = async () => {
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            const token = await getToken(messaging, {vapidKey: "BMzUxQCa4DAvV9C_yEynasBeBT4BvGXHNyzUWo3Dvi-4TCTb-q565aZMvPlDjgWzFlwkRYd_XRWa-9ncf6jkAzE"});

            if(token){
              console.log('FCM Token:', token);
              saveTokenToServer(userId, token);
            }else{
              console.log("Failed to generate the app registration token")
            }
          
          }
          else{
            console.log('user permission denied')
          }


        } catch (error) {
          console.error('Error getting FCM token:', error);
        }
      };

      requestPermissionAndGetToken();

    }
  }, [userId]);

  const saveTokenToServer = async (userId, token) => {
    try {
      await axios.post('/api/notification/save-token', { userId, token });
      console.log('Token sent to server successfully');
    } catch (error) {
      console.error('Error sending token to server:', error);
    }
  };

  console.log({ userId, user })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/' element={<Layout />}>


            {/* Admin Routes */}
            <Route element={<AdminProtectedRoute />}>
              <Route path='admin/dashboard' element={<Dashboard />} />
              <Route path='admin/employee' element={<Employee />} />
              <Route path='admin/employee/list/:role' element={<ViewEmployees />} />
              <Route path='admin/employee/profile/:id' element={<EmployeeProfile />} />
              <Route path='admin/applications' element={<AllApplications />} />
              <Route path='admin/followups' element={<Followups />} />
              <Route path='admin/student' element={<Student />} />
              <Route path='admin/project' element={<Project />} />
              <Route path='admin/project/team/:proId' element={<Team />} />
              <Route path='admin/settings' element={<Settings />} />
            </Route>

            <Route element={<StaffProtectedRoute />}>
              <Route path='applications/stepper/:id' element={<Stepper />} />
              <Route path='applications/:id/:stepperId' element={<Application />} />
              <Route path='/applications/search' element={<SearchApplication />} />
            </Route>

            {/* Employee Routes */}
            <Route element={<UserProtectedRoute />}>
              <Route path='employee/dashboard' element={<EmployeeDashboard />} />
              <Route path='employee/task' element={<AssignedWork />} />
              <Route path='employee/application/:id/:stepperId' element={<Application />} />
              <Route path='employee/applications' element={<AllApplications />} />
              <Route path='employee/followups' element={<Followups />} />
              <Route path='employee/students' element={<Student />} />
              <Route path='employee/projects' element={<Project />} />
              <Route path='employee/project/team/:proId' element={<Team />} />
            </Route>

            {/* Student Routes */}
            <Route element={<StudentProtectedRoute />}>
              <Route path='student/dashboard' element={<StudentDashboard />} />
              <Route path='student/application/:id' element={<StudentApplication />} />
            </Route>
          </Route>
          <Route path='*' element={<div>Pages Not Found</div>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
