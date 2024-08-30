import { useEffect } from 'react';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSide } from '../../assets/images'; // Assuming you have the image here

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  // Close sidebar when the screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        toggleSidebar(false); // Close sidebar on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [toggleSidebar]);

  return (
    <div className={`app-menu navbar-menu ${isSidebarOpen ? 'open' : ''}`}>
      <div className={`sidebar-content ${isSidebarOpen ? 'show' : 'hide'}`}>
        {/* Close Button */}
        <button className="close-sidebar-btn" onClick={() => toggleSidebar(false)}>
          &times;
        </button>
        
        <div className="sidebar-image-container">
          <img src={LoginSide} alt="Sidebar" className="sidebar-image" />
        </div>
        {/* Add your sidebar navigation links here */}
      </div>
    </div>
  );
}
