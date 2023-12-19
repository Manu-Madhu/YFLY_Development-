import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './layout/Layout';
import Dashboard from './pages/admin/Dashboard';
import Logout from './pages/Logout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route index path='/logout' element={<Logout />} />
          <Route path='/' element={<Layout />}>
            <Route path='admin/dashboard' element={<Dashboard />} />
            <Route path='admin/employee' element={<Dashboard />} />
            <Route path='admin/student' element={<Dashboard />} />
            <Route path='admin/track_student' element={<Dashboard />} />
          </Route>
          <Route path='*' element={<div>Pages Not Found</div>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
