import './App.css';
import Item from './pages/Item';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import OtpVerification from './pages/OtpVerification';
import MainSection from './pages/MainSection';
import { UserProvider } from './context/userContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/" element={<MainSection />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
