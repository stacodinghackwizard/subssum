import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';
import RemoveNotification from './removeNotification';
import {  UsersAvater2, UsersAvater3,} from "../../assets/images"
import './style.css'
export default function Header() {
	const navigate = useNavigate();
	

	const handleLogout = () => {
		localStorage.removeItem('auth_data');
		toast.success('Logged out! See you soon.', {
		  position: "top-right",
		  autoClose: 5000,
		  hideProgressBar: false,
		  closeOnClick: true,
		  pauseOnHover: true,
		  draggable: true,
		  progress: undefined,
		});
	
		setTimeout(() => {
		  navigate('/');  // Redirect after 2 seconds
		}, 2000);
	  };


	return (
		<>
            {/* <ToastContainer /> */}
			<header id="page-topbar">
				<ToastContainer />
				<div className="layout-width">
					<div className="navbar-header">
						<div className="d-flex">
							
							<div className="navbar-brand-box horizontal-logo">
								<a href="#" className="logo logo-dark">
									
									<span className='header-title d-flex login-breadcrum'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.4 16.7998L9.59998 11.9998L14.4 7.19981" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>

										<a href='#'>Home</a>
									</span>
								</a>

								<a href="#" className="logo logo-light">
									<span className='header-title d-flex login-breadcrum'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.4 16.7998L9.59998 11.9998L14.4 7.19981" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>

										<a href='#'>Home</a>
									</span>
								</a>
							</div>

							{/* <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
								<span className="hamburger-icon">
									<span></span>
									<span></span>
									<span></span>
								</span>
							</button> */}

							
							
						</div>

						<div className="d-flex align-items-center">

							<button className="btn text-white px-5 w-100" type="submit" style={{backgroundColor: '#4169E1'}}>Sign Up</button>
							

						
						</div>
					</div>
				</div>
			</header>
			<RemoveNotification/>
			

			
			{/* <container>
			</container> */}
			

			{/* <Footer /> */}
		</>




	)
}