import DashboardHeader from '../../components/dashboard/header'
import HomePage from '../home'
import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';
export default function WalletPage() {
   
    const [title, setTitle] = useState('Welcome, Lawal Wahab');
	return (

		<>
			
            <div id="layout-wrapper">
            
                <DashboardHeader title={title} />
                <SideBar setTitle={setTitle} />
				<HomePage/>
           </div>


		</>




	)
}