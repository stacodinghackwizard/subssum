import { Routes, Route } from 'react-router-dom';
import DashboardHome from './dashboard/home/App';
import History from './dashboard/history/App';
import AirtimeToCash from './dashboard/AirtimeToCash/App';
import Support from './dashboard/support/App'
import Wallet from './dashboard/wallet/App';
import LoginPage from './login';

import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      {/* Protected routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/transaction-history" 
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/support" 
        element={
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/wallet" 
        element={
          <ProtectedRoute>
            <Wallet />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/airtime-to-cash" 
        element={
          <ProtectedRoute>
            <AirtimeToCash />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;
