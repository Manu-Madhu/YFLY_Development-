import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './layout/Layout';
import Dashboard from './pages/admin/Dashboard';
import Logout from './pages/Logout';
import Employee from './pages/admin/Employee'
import Student from './pages/admin/Student'
import TrackStudent from './pages/admin/TrackStudent';
import AdminProtectedRoute from './routes/AdminProtectedRoute';


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
              <Route path='admin/student' element={<Student />} />
              <Route path='admin/track_student' element={<TrackStudent />} />
            </Route>
          </Route>
          <Route path='*' element={<div>Pages Not Found</div>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
