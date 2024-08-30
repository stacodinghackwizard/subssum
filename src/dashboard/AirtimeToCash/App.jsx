import DashboardHeader from '../../components/dashboard/header'
import AirtimeToCash from '../../components/dashboard/AirtimeToCash/index'
import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';
import '../../components/dashboard/style.css'

export default function AirtimeTocash() {
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
				<AirtimeToCash/>
           </div>


		</>




	)
}