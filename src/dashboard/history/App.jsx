import DashboardHeader from '../../components/dashboard/header'
import HistoryPage from '../../components/dashboard/history'
import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';


export default function Invoice() {
	const [title, setTitle] = useState('Welcome, Lawal Wahab');
	return (

		<>
			
            <div id="layout-wrapper">
            
				<DashboardHeader title={title} />
				<SideBar setTitle={setTitle} />
				<HistoryPage/>
           </div>


		</>




	)
}