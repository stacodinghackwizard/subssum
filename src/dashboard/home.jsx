import { Link } from 'react-router-dom'
import './style.css'
import '../components/dashboard/responsive.css'
import { WalletCard } from '../assets/images'


export default function Home() {

	return (

		<>
			
           <div>
		   		<div className="main-content">

					<div className="page-content pe-lg-5">
						<div className="container-fluid pe-lg-5">

							<div className="row">
								<div className="col">

									<div className="h-100">
										
										<div className="row">
											<div className='column col-xl-6 col-md-6'>

												<div className="">
													<Link to="/wallet">
														<div className="card card-animate support-card">
															<div className="card-body d-flex align-items-center justify-content-between">
																<div className="d-flex flex-column gap-2">
																	<div className="flex-grow-1 overflow-hidden ">
																		<p className=" fw-medium text-muted text-truncate mb-0"> Wallet Balance</p>
																	</div>
																	<div className=''>
																		<h4 className="fs-22 fw-semibold ff-secondary ">₦<span className="counter-value" data-target="559.25">3000</span></h4>
																		
																	</div>
																	
																</div>
																<div className="">
																	
																	<div className="fund-wallet  flex-shrink-0 ">
																		<Link to="/wallet">
																			<span className="avatar-title  rounded fs-3">
																				
																					Fund Wallet
																			</span>
																		</Link>
																	</div>
																</div>
															</div>
														</div>
													</Link>
												</div>
												<div className="">
													
													<div className="card card-animate support-card">
														<div className="card-body">
															<div className="d-flex align-items-center">
																<div className="flex-grow-1 overflow-hidden">
																<p className=" referral-text  text-truncate mb-0">Referral</p>
																<p className=" referral-text   text-truncate mt-2 mb-0">Referral Code <span className='fw-medium'>18/52ha089</span></p>
																</div>
																
															</div>

															


															<div className="d-flex align-items-end justify-content-between mt-3">
																<div className='d-flex align-items-center gap-2'>
																	
																	<a href="#" className="home-action">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M5.99997 14.4001L3.59997 14.4001C2.93723 14.4001 2.39997 13.8628 2.39997 13.2001L2.39997 4.4001C2.39997 3.29553 3.29541 2.4001 4.39997 2.4001L13.2 2.4001C13.8627 2.4001 14.4 2.93736 14.4 3.6001L14.4 6.0001M12 21.6001L19.2 21.6001C20.5255 21.6001 21.6 20.5256 21.6 19.2001L21.6 12.0001C21.6 10.6746 20.5255 9.6001 19.2 9.6001L12 9.6001C10.6745 9.6001 9.59997 10.6746 9.59997 12.0001L9.59997 19.2001C9.59997 20.5256 10.6745 21.6001 12 21.6001Z" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round"/>
																		</svg>
																		Copy
																	</a>
																	<a className="home-action">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<path d="M13.8 19.5514H19.8M4.20007 19.5514L8.56606 18.6717C8.79784 18.625 9.01065 18.5109 9.17779 18.3437L18.9515 8.56461C19.4201 8.09576 19.4197 7.33577 18.9508 6.86731L16.8803 4.79923C16.4115 4.33097 15.6519 4.33129 15.1835 4.79995L5.40884 14.58C5.24202 14.7469 5.12812 14.9593 5.08138 15.1906L4.20007 19.5514Z" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
																		</svg>Edit

																	</a>
																	<a className="home-action">
																		<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M19.0001 7.45912L9.40007 1.1001L9.40007 4.7001C0.999878 6.5001 0.999878 14.9001 0.999878 14.9001C0.999878 14.9001 4.59988 10.1001 9.40007 10.7001L9.40007 14.4201L19.0001 7.45912Z" stroke="#4169E1" stroke-width="1.5" stroke-linejoin="round"/>
																		</svg>
																		Share

																	</a>

																</div>
																
															</div>
														</div>
													</div>
												</div>



												<div className="">
													<Link to="/wallet">
														<div className="card card-animate support-card">
															<div className="card-body">
																<div className="d-flex align-items-center">
																	
																	<div className="flex-grow-1 overflow-hidden">
																		<p className=" referral-text  text-truncate mb-0">Total referral made</p>
																	
																		<h4 className="fs-22 fw-semibold ff-secondary "><span className="counter-value" data-target="36894">0</span></h4>
																	</div>
																	<div className="flex-grow-1 overflow-hidden">
																		<p className=" referral-text  text-truncate mb-0">Current wallet bonus</p>
																	
																		<h4 className="fs-22 fw-semibold ff-secondary "><span className="counter-value" data-target="36894">₦0.00</span></h4>
																	</div>
																	
																</div>

																


																<div className="d-flex align-items-end justify-content-between ">
																	<div>
																		
																		<a href="#" className="home-action">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<path d="M21.6 16.5599L21.6 17.3099C22.0142 17.3099 22.35 16.9741 22.35 16.5599H21.6ZM21.6 11.2799H22.35C22.35 10.8657 22.0142 10.5299 21.6 10.5299V11.2799ZM7.27446 6.32901C6.92603 6.553 6.82515 7.01703 7.04914 7.36546C7.27313 7.71389 7.73716 7.81477 8.08559 7.59078L7.27446 6.32901ZM14.4 2.63989L14.992 2.17944C14.7537 1.87303 14.321 1.7991 13.9945 2.00901L14.4 2.63989ZM17.168 7.42035C17.4223 7.74731 17.8935 7.80621 18.2205 7.55191C18.5474 7.29761 18.6063 6.8264 18.352 6.49944L17.168 7.42035ZM21.6 15.8099H18.48L18.48 17.3099H21.6L21.6 15.8099ZM18.48 12.0299H21.6V10.5299L18.48 10.5299V12.0299ZM20.85 11.2799V16.5599H22.35V11.2799H20.85ZM16.59 13.9199C16.59 12.8761 17.4362 12.0299 18.48 12.0299V10.5299C16.6078 10.5299 15.09 12.0476 15.09 13.9199H16.59ZM18.48 15.8099C17.4362 15.8099 16.59 14.9637 16.59 13.9199H15.09C15.09 15.7921 16.6078 17.3099 18.48 17.3099L18.48 15.8099ZM8.08559 7.59078L14.8056 3.27078L13.9945 2.00901L7.27446 6.32901L8.08559 7.59078ZM13.808 3.10035L17.168 7.42035L18.352 6.49944L14.992 2.17944L13.808 3.10035ZM3.36002 7.70989L19.68 7.70989V6.20989L3.36002 6.20989L3.36002 7.70989ZM19.68 20.6099L3.36002 20.6099V22.1099L19.68 22.1099V20.6099ZM3.15002 20.3999L3.15002 7.91989H1.65002L1.65002 20.3999H3.15002ZM3.36002 20.6099C3.24405 20.6099 3.15002 20.5159 3.15002 20.3999H1.65002C1.65002 21.3443 2.41562 22.1099 3.36002 22.1099V20.6099ZM19.89 20.3999C19.89 20.5159 19.796 20.6099 19.68 20.6099V22.1099C20.6244 22.1099 21.39 21.3443 21.39 20.3999H19.89ZM19.68 7.70989C19.796 7.70989 19.89 7.80391 19.89 7.91989L21.39 7.91989C21.39 6.97549 20.6244 6.20989 19.68 6.20989V7.70989ZM3.36002 6.20989C2.41562 6.20989 1.65002 6.97549 1.65002 7.91989H3.15002C3.15002 7.80391 3.24404 7.70989 3.36002 7.70989L3.36002 6.20989ZM19.89 17.2799V20.3999H21.39V17.2799H19.89ZM19.89 7.91989V10.4399L21.39 10.4399V7.91989L19.89 7.91989Z" fill="#4169E1"/>
																			</svg>

																			Cashout
																			</a>
																	</div>
																	
																</div>
															</div>
														</div>
													</Link>
												</div>
											</div>


											

											<div className="col-xl-6 col-md-6">
												<Link to="/wallet">
													<div className="card card-animate card-rounded px-4 pb-4 pt-2 position-relative wallet_card_wrap" style={{
														background: '#EFF3FB',
														overflow: 'hidden',
														minHeight: '240px',
														}}>
														<div className="card-body">
															<div className="d-flex align-items-center">
																<div className="flex-grow-1 overflow-hidden">
																<p className="fw-medium  text-truncate card-text mb-0">Cards</p>
																</div>
																
															</div>
															<div className="d-flex align-items-end justify-content-between mt-4">
																<div className='mt-3'>
																	<h4 className="fs-22 save-text fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="36894">You Have No <br/> Saved card</span></h4>
																	
																</div>

																
															</div>
														</div>
														<div className="floating_img">
															<img src={WalletCard} alt="Wallet Card" />
														</div>
													</div>
												</Link>
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