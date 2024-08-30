import DashboardHeader from '../../components/dashboard/header'
import HistoryPage from '../../components/dashboard/history'
import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';


export default function Invoice() {
	const [title, setTitle] = useState('Welcome, Lawal Wahab');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
	return (

		<>
			
            <div id="layout-wrapper">
            
			<DashboardHeader title={title} onToggleSidebar={toggleSidebar} />
            <SideBar setTitle={setTitle} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				<HistoryPage/>
           </div>


		</>




	)
}