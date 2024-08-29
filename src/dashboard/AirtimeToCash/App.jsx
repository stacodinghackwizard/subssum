import DashboardHeader from '../../components/dashboard/header'
import AirtimeToCash from '../../components/dashboard/AirtimeToCash/index'
import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';
import '../../components/dashboard/style.css'

export default function AirtimeTocash() {
	const [title, setTitle] = useState('Welcome, Lawal Wahab');
	return (

		<>
			
            <div id="layout-wrapper">
				<DashboardHeader title={title} />
				<SideBar setTitle={setTitle} />
				<AirtimeToCash/>
           </div>


		</>




	)
}