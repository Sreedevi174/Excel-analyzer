import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Sidebar from './components/Sidebar';
import SummaryCard from './components/SummaryCard';
import SalesChart from './components/SalesChart';
import ProductTable from './components/ProductTable';
import Finance from './components/Pages/Fileuploader';
import Sales from './components/Pages/Sales';
import Users from './components/Pages/Users';
import Dashboard from './components/Pages/Dashboard';
import Help from './components/Pages/Help';
import Signin from './components/Pages/Signin';
import Signup from './components/Pages/Signup';
import NavBar from './components/NavBar';
import FileUploader from './components/Pages/Fileuploader';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', backgroundColor: "#e3f2fd" }}>
        <NavBar />
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/fileuploader" element={<FileUploader />} />
              {/* <Route path="/sales" element={<Sales />} /> */}
              <Route path="/users" element={<Users />} />
              <Route path="/help" element={<Help />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
