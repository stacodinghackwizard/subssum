import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';
import RemoveNotification from './removeNotification';
import { ProfileIcon, NotificationIcon } from "../../assets/images"
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
					<div className="navbar-header ">
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

						<div className="d-flex align-items-center gap-2">

							<a href="#" className="">
								<span className='upgrade-title'>
									Upgrade To Merchant
								</span>
								
							</a>
							<div className="dropdown topbar-head-dropdown  mx-0 px-0 header-item" id="notificationDropdown">
								<button type="button" className="btn px-0 " id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
									{/* <i className='bx bx-bell fs-22 '></i> */}
									{/* <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span className="visually-hidden">unread messages</span></span> */}
									<img src={NotificationIcon} style={{width: '32px', height: '32px'}}/>

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
									
									<img src={ProfileIcon} style={{width: '32px', height: '32px'}} />
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