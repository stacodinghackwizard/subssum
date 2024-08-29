import LoginPage from '../src/components/login'
import SideBar from './components/dashboard/sidebar'
import LoginHeader from './components/dashboard/loginHeader'
import LoginSidebar from './components/dashboard/loginSidebar'
// import DashboardHeader from './components/dashboard/header'
// import SideBar from '../../components/dashboard/sidebar'
import { useState } from 'react';


export default function Login() {
	const [title, setTitle] = useState('Welcome, Lawal Wahab');
	return (

		<>
			<div id="layout-wrapper">
				<LoginHeader title={title}/>
				<LoginSidebar/>
                <LoginPage/>
            </div>
		</>




	)
}