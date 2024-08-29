import { useState } from 'react';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSide } from '../../assets/images'; // Assuming you have the image here

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-menu navbar-menu ${isSidebarOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <span className="toggle-icon">&#9776;</span>
      </div>
      <div className={`sidebar-content ${isSidebarOpen ? 'show' : 'hide'}`}>
        <div className="sidebar-image-container">
          <img src={LoginSide} alt="Sidebar" className="sidebar-image" />
        </div>
        {/* Add your sidebar navigation links here */}
      </div>
    </div>
  );
}
