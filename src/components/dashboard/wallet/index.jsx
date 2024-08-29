import { useState } from 'react';
import './wallet.css'
// import '../style.css'

export default function Wallet() {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setFileName(file.name);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
        setFileName(file.name);
        }
    };


    const [loading,selectedOption, setSelectedOption] = useState(false);

    const [formData, setFormData] = useState({
      first_name: "",
      phone_number: "08094562627",
      amount: "₦5,000",
      sharePin: "3546576433",
      role: "changePassword",
      
    
    });
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [activeTab, setActiveTab] = useState('changePassword');

    const handleSetRole = (role) => {
      const initialFormData = {
        first_name: "",
        phone_number: "08094562627",
        amount: "₦5,000",
        sharePin: "3546576433",
        role: role,
        
      };
  
      setFormData({ ...initialFormData });
    };
    const handleTabChange = (tab) => {
        handleSetRole(tab);
        setActiveTab(tab);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
      };
	return (
		<>			
           <div>
		   		<div className="main-content">

					<div className="page-content">
						<div className="container-fluid">
							<div className="row">
								<div className="col">

									<div className="h-100">
										
										<div className="row">
											<div className='column col-xl-5 col-md-5'>

												<div className="">
													
													<div className="card card-animate support-card">
														<div className="card-body d-flex align-items-center justify-content-between">
															{/* <div className="d-flex flex-column gap-2 align-items-center justify-content-center w-100">
																<div className="">
                                                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_1_1089)">
                                                                    <rect x="0.00012207" width="99.9998" height="99.9993" rx="49.9996" fill="#EFF5FB"/>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6468 99.9995H17.235C7.75557 99.9995 0.00012207 92.244 0.00012207 82.7646V43.6304C11.6245 44.5079 26.5984 51.5653 53.9622 67.1477C53.9622 67.1477 48.8543 86.7616 44.6468 99.9995Z" fill="#CDECFE"/>
                                                                    <path d="M25.2248 32.7549C29.5235 32.7549 33.0083 29.2701 33.0083 24.9714C33.0083 20.6728 29.5235 17.188 25.2248 17.188C20.9262 17.188 17.4414 20.6728 17.4414 24.9714C17.4414 29.2701 20.9262 32.7549 25.2248 32.7549Z" fill="#258AFF"/>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M99.9999 49.5227V82.7644C99.9999 92.2434 92.2444 99.9993 82.765 99.9993H17.235C7.75557 99.9993 0.00012207 92.2439 0.00012207 82.7644V76.8735C58.7967 46.3887 55.9617 27.9448 99.9994 49.5227H99.9999Z" fill="url(#paint0_linear_1_1089)"/>
                                                                    </g>
                                                                    <defs>
                                                                    <linearGradient id="paint0_linear_1_1089" x1="72.5471" y1="98.8393" x2="57.9472" y2="42.6162" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#007BFF"/>
                                                                    <stop offset="1" stop-color="#599EFF"/>
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1_1089">
                                                                    <rect x="0.00012207" width="99.9998" height="99.9993" rx="49.9996" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </div>

																
															</div> */}
                                                            <div
                                                                className="file-upload-container d-flex flex-column gap-2 align-items-center justify-content-center w-100"
                                                                onClick={() => document.getElementById('fileInput').click()}
                                                                onDragOver={(e) => e.preventDefault()}
                                                                onDrop={handleDrop}
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="fileInput"
                                                                    className="file-input"
                                                                    accept="image/*"
                                                                    onChange={handleFileChange}
                                                                />
                                                                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_1_1089)">
                                                                    <rect x="0.00012207" width="99.9998" height="99.9993" rx="49.9996" fill="#EFF5FB"/>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6468 99.9995H17.235C7.75557 99.9995 0.00012207 92.244 0.00012207 82.7646V43.6304C11.6245 44.5079 26.5984 51.5653 53.9622 67.1477C53.9622 67.1477 48.8543 86.7616 44.6468 99.9995Z" fill="#CDECFE"/>
                                                                    <path d="M25.2248 32.7549C29.5235 32.7549 33.0083 29.2701 33.0083 24.9714C33.0083 20.6728 29.5235 17.188 25.2248 17.188C20.9262 17.188 17.4414 20.6728 17.4414 24.9714C17.4414 29.2701 20.9262 32.7549 25.2248 32.7549Z" fill="#258AFF"/>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M99.9999 49.5227V82.7644C99.9999 92.2434 92.2444 99.9993 82.765 99.9993H17.235C7.75557 99.9993 0.00012207 92.2439 0.00012207 82.7644V76.8735C58.7967 46.3887 55.9617 27.9448 99.9994 49.5227H99.9999Z" fill="url(#paint0_linear_1_1089)"/>
                                                                    </g>
                                                                    <defs>
                                                                    <linearGradient id="paint0_linear_1_1089" x1="72.5471" y1="98.8393" x2="57.9472" y2="42.6162" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#007BFF"/>
                                                                    <stop offset="1" stop-color="#599EFF"/>
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1_1089">
                                                                    <rect x="0.00012207" width="99.9998" height="99.9993" rx="49.9996" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>
                                                                <div className="upload-message">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6 5.09922V5.84922C6.26675 5.84922 6.51343 5.70754 6.64783 5.47712L6 5.09922ZM7.4 2.69922V1.94922C7.13325 1.94922 6.88657 2.0909 6.75216 2.32132L7.4 2.69922ZM12.6 2.69922L13.2478 2.32132C13.1134 2.0909 12.8667 1.94922 12.6 1.94922V2.69922ZM14 5.09922L13.3522 5.47712C13.4866 5.70754 13.7332 5.84922 14 5.84922V5.09922ZM2.75 15.2992V7.09922H1.25V15.2992H2.75ZM4 5.84922H6V4.34922H4V5.84922ZM6.64783 5.47712L8.04783 3.07712L6.75216 2.32132L5.35217 4.72132L6.64783 5.47712ZM7.4 3.44922H12.6V1.94922H7.4V3.44922ZM11.9522 3.07712L13.3522 5.47712L14.6478 4.72132L13.2478 2.32132L11.9522 3.07712ZM14 5.84922H16V4.34922H14V5.84922ZM17.25 7.09922V15.2992H18.75V7.09922H17.25ZM17.25 15.2992C17.25 15.9896 16.6904 16.5492 16 16.5492V18.0492C17.5188 18.0492 18.75 16.818 18.75 15.2992H17.25ZM16 5.84922C16.6904 5.84922 17.25 6.40886 17.25 7.09922H18.75C18.75 5.58044 17.5188 4.34922 16 4.34922V5.84922ZM2.75 7.09922C2.75 6.40886 3.30964 5.84922 4 5.84922V4.34922C2.48122 4.34922 1.25 5.58043 1.25 7.09922H2.75ZM4 16.5492C3.30964 16.5492 2.75 15.9896 2.75 15.2992H1.25C1.25 16.818 2.48122 18.0492 4 18.0492V16.5492ZM12.25 10.6992C12.25 11.9419 11.2426 12.9492 10 12.9492V14.4492C12.0711 14.4492 13.75 12.7703 13.75 10.6992H12.25ZM10 12.9492C8.75736 12.9492 7.75 11.9419 7.75 10.6992H6.25C6.25 12.7703 7.92893 14.4492 10 14.4492V12.9492ZM7.75 10.6992C7.75 9.45658 8.75736 8.44922 10 8.44922V6.94922C7.92893 6.94922 6.25 8.62815 6.25 10.6992H7.75ZM10 8.44922C11.2426 8.44922 12.25 9.45658 12.25 10.6992H13.75C13.75 8.62815 12.0711 6.94922 10 6.94922V8.44922ZM16 16.5492H4V18.0492H16V16.5492Z" fill="#4169E1"/>
                                                                    </svg>
                                                                    Upload Image
                                                                </div>
                                                                <div id="fileName">{fileName && `Selected File: ${fileName}`}</div>
                                                            </div>
															
														</div>
													</div>
												</div>
												
												<div className="">
													
													<div className="card card-animate support-card">
														<div className="card-body">
															<div className="">
																
																<div className=" d-flex align-items-center justify-content-between w-100">
																	<p className="text-capitalize referral-text  text-truncate">Name</p>
																
																	<p className="text-capitalize referral-text fw-bold  text-truncate">Lawal Wahab Babatunde</p>
																</div>
                                                                <div className=" d-flex align-items-center justify-content-between w-100">
																	<p className="text-capitalize referral-text  text-truncate">Email</p>
																
																	<p className="referral-text fw-bold  text-truncate">wabdotmail@gmail.com</p>
																</div>
																
                                                                <div className=" d-flex align-items-center justify-content-between w-100">
																	<p className="text-capitalize referral-text  text-truncate">Phone Number</p>
																
																	<p className="text-capitalize referral-text fw-bold  text-truncate">09011234581</p>
																</div>
                                                                <div className=" d-flex align-items-center justify-content-between w-100">
																	<p className="text-capitalize referral-text  text-truncate">Account Status</p>
																
																	<p className="text-capitalize  fw-bold  text-truncate" style={{color: '#2DAE32'}}>Active</p>
																</div>
                                                                <div className=" d-flex align-items-center justify-content-between w-100">
																	<p className="text-capitalize referral-text  text-truncate">Referral link</p>
                                                                    <div className='text-end'>

                                                                        <p className="text-capitalize referral-text fw-bold  text-truncate">www.subsum.com/tre/wd..</p>
                                                                        <a href="#" className="home-action">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5.99997 14.4001L3.59997 14.4001C2.93723 14.4001 2.39997 13.8628 2.39997 13.2001L2.39997 4.4001C2.39997 3.29553 3.29541 2.4001 4.39997 2.4001L13.2 2.4001C13.8627 2.4001 14.4 2.93736 14.4 3.6001L14.4 6.0001M12 21.6001L19.2 21.6001C20.5255 21.6001 21.6 20.5256 21.6 19.2001L21.6 12.0001C21.6 10.6746 20.5255 9.6001 19.2 9.6001L12 9.6001C10.6745 9.6001 9.59997 10.6746 9.59997 12.0001L9.59997 19.2001C9.59997 20.5256 10.6745 21.6001 12 21.6001Z" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round"/>
                                                                            </svg>
                                                                            Copy
                                                                        </a>
                                                                    </div>
																</div>
																
															</div>

															


															<div className="d-flex align-items-end justify-content-between ">
																<div>
																	
																	<a href="#" className="fw-bold" style={{color: '#4169E1'}}>
																	
																		Edit Details
																		</a>
																</div>
																
															</div>
														</div>
													</div>
												</div>
											</div>


											

											<div className="container col-lg-7">
                                                <div className="row  d-flex justify-content-center rounded">
                                                    <div className=' col-md-10 col-lg-8 col-xl-9'>
                                                        <div className="card airtime-card " style={{borderRadius:'1000px'}}>
                                                            <div className="card-body p-2">

                                                                {/* Tab Switch Outside the Form */}

                                                                <ul className="nav nav-tabs justify-content-center" id="registrationTabs" role="tablist">
                                                                    <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className={`nav-link ${activeTab === 'changePassword' ? 'active' : ''}`}
                                                                        onClick={() => handleTabChange('changePassword')}
                                                                        type="button"
                                                                        style={{borderRadius:'1000px'}}
                                                                    >
                                                                        Change Password
                                                                        
                                                                    </button>
                                                                    </li>
                                                                    <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className={`nav-link ${activeTab === 'changePin' ? 'active' : ''}`}
                                                                        onClick={() => handleTabChange('changePin')}
                                                                        type="button"
                                                                        style={{borderRadius:'1000px'}}
                                                                    >
                                                                        Change Pin
                                                                        
                                                                    </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                        <div className="col-md-10 col-lg-8 col-xl-9">
                                                            <div className="card airtime-card ">
                                                                <div className="card-body p-4">
                                                                    

                                                                    <div className="tab-content" id="registrationTabsContent">
                                                                    {/* changePassword Tab */}
                                                                    <div className={`tab-pane fade ${activeTab === 'changePassword' ? 'show active' : ''} p-2 mt-2`}>
                                                                        <form className="needs-validation form" noValidate onSubmit={handleSubmit}>
                                                                        {/* Form Fields */}
                                                                            <div className='row mb-3'>
                                                                            
                                                                            

                                                                                <div className="col-md-12 col-sm-12 pb-sm-3">
                                                                                    <label htmlFor="current_password" className="form-label">
                                                                                    Current Password<span className="text-danger"></span>
                                                                                    </label>
                                                                                    <input type="text" value={formData.current_password} className="form-control" placeholder='Enter Current Password' name="amount" id="amount" required />
                                                                                    <div className="invalid-feedback">Enter Current Password</div>
                                                                                </div>

                                                                                <div className="col-md-12 col-sm-12 pb-sm-3">
                                                                                    <label htmlFor="new_password" className="form-label">
                                                                                    New Password<span className="text-danger"></span>
                                                                                    </label>
                                                                                    <input type="text" value={formData.new_password} placeholder='Enter New Password' className="form-control" name="sharePin" id="sharePin" required />
                                                                                    <div className="invalid-feedback">Please enter new password</div>
                                                                                </div>
                                                                                <div className="col-md-12 col-sm-12 pb-sm-3">
                                                                                    <label htmlFor="confirm_password" className="form-label">
                                                                                    Confirm New Password<span className="text-danger"></span>
                                                                                    </label>
                                                                                    <input type="text" value={formData.confirm_password} placeholder='Enter Confirm New Password' className="form-control" name="sharePin" id="sharePin" required />
                                                                                    <div className="invalid-feedback">Please enter confirm password</div>
                                                                                </div>

                                                                        
                                                                            </div>
                                                                            <button className="btn proceed-btn w-100" type="submit" disabled={loading}>
                                                                            {loading ? (
                                                                            <div className="spinner-border spinner-border-sm text-light" role="status">
                                                                                <span className="sr-only">Loading...</span>
                                                                            </div>
                                                                            ) : (
                                                                            'Submit'
                                                                            )}
                                                                        </button>

                                                                        </form>
                                                                    </div>

                                                                    {/* changePin Tab */}
                                                                    <div className={`tab-pane fade ${activeTab === 'changePin' ? 'show active' : ''} p-2 mt-3`}>
                                                                    <form className="needs-validation form" noValidate onSubmit={handleSubmit}>
                                                                        {/* Form Fields */}
                                                                            <div className='row mb-3'>
                                                                            
                                                                            

                                                                                <div className="col-md-12 col-sm-12 pb-sm-3">
                                                                                    <label htmlFor="current_pin" className="form-label">
                                                                                    Current pin<span className="text-danger"></span>
                                                                                    </label>
                                                                                    <input type="text" value={formData.current_pin} className="form-control" placeholder='Enter Current pin' name="amount" id="amount" required />
                                                                                    <div className="invalid-feedback">Enter Current pin</div>
                                                                                </div>

                                                                                <div className="col-md-12 col-sm-12 pb-sm-3">
                                                                                    <label htmlFor="new_pin" className="form-label">
                                                                                    New pin<span className="text-danger"></span>
                                                                                    </label>
                                                                                    <input type="text" value={formData.new_pin} placeholder='Enter New pin' className="form-control" name="sharePin" id="sharePin" required />
                                                                                    <div className="invalid-feedback">Please enter new pin</div>
                                                                                </div>
                                                                                <div className="col-md-12 col-sm-12 pb-sm-3">
                                                                                    <label htmlFor="confirm_pin" className="form-label">
                                                                                    Confirm New pin<span className="text-danger"></span>
                                                                                    </label>
                                                                                    <input type="text" value={formData.confirm_pin} placeholder='Enter Confirm New pin' className="form-control" name="sharePin" id="sharePin" required />
                                                                                    <div className="invalid-feedback">Please enter confirm pin</div>
                                                                                </div>

                                                                        
                                                                            </div>
                                                                            <button className="btn proceed-btn w-100 " type="submit" disabled={loading}>
                                                                            {loading ? (
                                                                            <div className="spinner-border spinner-border-sm text-light" role="status">
                                                                                <span className="sr-only">Loading...</span>
                                                                            </div>
                                                                            ) : (
                                                                            'Submit'
                                                                            )}
                                                                        </button>

                                                                        </form>
                                                                    </div>

                                                                    
                                                                    </div>

                                                                </div>
                                                            {/* end card body */}
                                                            </div>
                                                            {/* end card */}
                                                        </div>
                                                {/* end col */}
                                                </div>
                                            </div>
										</div> 

										

										

										
									</div> 

								</div>

								
							</div>

						</div>
						
					</div>


					
				</div>
		   </div>

		</>




	)
}