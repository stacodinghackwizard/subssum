import { useState } from 'react';
import DashboardHeader from '../../components/dashboard/header';
import SideBar from '../../components/dashboard/sidebar';
import HomePage from '../home';

export default function HomeView() {
    const [title, setTitle] = useState('Welcome, Lawal Wahab');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div id="layout-wrapper">
            <DashboardHeader title={title} onToggleSidebar={toggleSidebar} />
            <SideBar setTitle={setTitle} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <HomePage />
        </div>
    );
}
