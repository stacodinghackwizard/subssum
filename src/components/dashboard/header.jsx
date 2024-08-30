import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';
import RemoveNotification from './removeNotification';
import {  UsersAvater2, UsersAvater3,} from "../../assets/images"
import './style.css'
export default function Header({ title, onToggleSidebar } ) {
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
									<span className="logo-sm">
										<h3>{ title }</h3>
									</span>
									<span className='header-title'>
										<h3>{ title }</h3>
									</span>
								</a>

								<a href="#" className="logo logo-light">
									<span className='header-title'>
										{title}
									</span>
									<span className='header-title'>
										{title}
									</span>
								</a>
							</div>

							 {/* Toggle button (visible on mobile) */}
							 <button className="toggle-button" onClick={onToggleSidebar}>
                                &#9776; {/* Hamburger menu icon */}
                            </button>

							
						</div>

						<div className="d-flex align-items-center justify-content-end w-100 gap-2">

							<a href="#" className="">
								<span className='upgrade-title'>
									Upgrade To Merchant
								</span>
								
							</a>
							<div className="dropdown topbar-head-dropdown  mx-0 px-0 header-item" id="notificationDropdown">
								<button type="button" className="btn px-0 " id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
									{/* <i className='bx bx-bell fs-22 '></i> */}
									{/* <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span className="visually-hidden">unread messages</span></span> */}
									<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.000244141" width="31.9999" height="31.9999" rx="15.9999" fill="#F7F9FD"/>
									<rect x="1.17313" y="0.959996" width="30.0799" height="30.0799" rx="15.0399" fill="#EFF3FB"/>
									<rect x="1.17313" y="0.959996" width="30.0799" height="30.0799" rx="15.0399" stroke="#D7E1F4" stroke-width="1.91999"/>
									<path d="M14.2931 21.5233C14.8026 21.9092 15.4755 22.1439 16.2131 22.1439C16.9507 22.1439 17.6236 21.9092 18.1331 21.5233M10.8186 19.5373C10.5151 19.5373 10.3455 19.0852 10.5291 18.834C10.9552 18.251 11.3665 17.3961 11.3665 16.3665L11.3841 14.8747C11.3841 12.1029 13.5461 9.85596 16.2131 9.85596C18.9194 9.85596 21.1133 12.136 21.1133 14.9486L21.0957 16.3665C21.0957 17.4031 21.4928 18.2628 21.9015 18.8459C22.0781 19.0978 21.9081 19.5373 21.6083 19.5373H10.8186Z" stroke="#4169E1" stroke-width="1.27999" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>

								</button>
								
							</div>

							<div className="dropdown px-0 mx-0 header-item">
								<button type="button" className="btn px-0" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									{/* <span className="d-flex align-items-center">
										<img className="rounded-circle header-profile-user" src={UsersAvater2} alt="" />
										<span className="text-start ms-xl-2">
											<span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">lawal Wahab</span>
											</span>
											
									</span> */}
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.960118" y="0.959996" width="30.0799" height="30.0799" rx="15.0399" fill="#EFF3FB"/>
									<rect x="0.960118" y="0.959996" width="30.0799" height="30.0799" rx="15.0399" stroke="#D7E1F4" stroke-width="1.91999"/>
									<path d="M18.5892 12.9878C18.5892 14.7175 17.4907 15.9805 16.1357 15.9805C14.7807 15.9805 13.6822 14.7175 13.6822 12.9878C13.6822 11.2581 14.7807 9.85596 16.1357 9.85596C17.4907 9.85596 18.5892 11.2581 18.5892 12.9878Z" stroke="#4169E1" stroke-width="1.27999" stroke-linejoin="round"/>
									<path d="M11.1362 18.486C11.3121 18.1653 11.6349 17.9681 11.9839 17.9681H20.0162C20.3652 17.9681 20.688 18.1653 20.8639 18.486L22.0089 20.5739C22.3905 21.2699 21.9186 22.1439 21.1612 22.1439H10.8389C10.0815 22.1439 9.6096 21.2699 9.99124 20.5739L11.1362 18.486Z" stroke="#4169E1" stroke-width="1.27999" stroke-linejoin="round"/>
								</svg>
								</button>
								

								<div className="dropdown-menu dropdown-menu-end">
								<h6 className="dropdown-header">Lawal Wahab</h6>
								<a className="dropdown-item" href="#">
									<i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Profile</span>
								</a>
								<a className="dropdown-item" href="#">
									<i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Messages</span>
								</a>
								<a className="dropdown-item" href="#">
									<i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Taskboard</span>
								</a>
								<a className="dropdown-item" href="#">
									<i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Help</span>
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="pages-profile.html">
									<i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Balance : <b>$5971.67</b></span>
								</a>
								<a className="dropdown-item" href="#">
									<span className="badge bg-success-subtle text-success mt-1 float-end">New</span>
									<i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Settings</span>
								</a>
								<a className="dropdown-item" href="#">
									<i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle">Lock screen</span>
								</a>
								<a onClick={handleLogout} style={{cursor: 'pointer'}} className="dropdown-item">
									<i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> 
									<span className="align-middle" data-key="t-logout">Logout</span>
								</a>
								</div>
							</div>
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