import DashboardHeader from '../../components/dashboard/header'
import Support from '../../components/dashboard/support'

import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';

// import Footer from "../components/dashboard/footer"

// import SideBar from '../dashboard_header/sidebar'

export default function SupportPage() {
	const [title, setTitle] = useState('Welcome, Lawal Wahab');
	return (

		<>
			
            <div id="layout-wrapper">
            
				<DashboardHeader title={title} />
				<SideBar setTitle={setTitle} />
				<Support/>
           </div>


		</>




	)
}