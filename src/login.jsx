import { useState } from 'react';
import LoginPage from '../src/components/login';
import LoginSidebar from './components/dashboard/loginSidebar';
import LoginHeader from './components/dashboard/loginHeader';

export default function Login() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div id="layout-wrapper">
        <LoginHeader onToggleSidebar={handleToggleSidebar} />
        <LoginSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
        <LoginPage />
      </div>
    </>
  );
}
