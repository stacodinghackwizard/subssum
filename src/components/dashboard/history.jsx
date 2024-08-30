import { Link } from 'react-router-dom';
import './rmtableborder.css'

export default function DashboardInvoice() {
    return (
        <>
            <div>
                <div className="main-content px-0">

                    <div className="page-content">
                        <div className="container-fluid">
 

                            <div className="row px-0">
                                <div className="col-lg-12">
                                    <div className="card" id="invoiceList">
                                        
                                        <div className="card-body bg-light-subtle border border-dashed border-start-0 border-end-0">
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-xxl-3 col-sm-4">
                                                        <div className="search-box">
                                                            <input type="text" className="form-control search bg-light border-light" placeholder="Filter"/>
                                                            <i className="ri-search-line search-icon"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                    
                                                </div>
                                            
                                            </form>
                                        </div>
                                        <div className="card-body">
                                            <div>
                                                <div className="table-responsive  table-card border-none">
                                                    <table className="table no-side-borders  align-middle table-nowrap" id="invoiceTable" style={{borderTop: '0'}}>
                                                        <thead className="text-muted">
                                                            <tr>
                                                                
                                                                <th className='text-start' data-sort="service">Service</th>
                                                                <th className='text-start' data-sort="invoice_amount">Amount</th>
                                                                <th className='text-start' data-sort="invoice_amount">Total Amount</th>
                                                                <th className='text-start' data-sort="status">Status</th>
                                                                <th className='text-start' data-sort="payment_method">Payment Method</th>
                                                                <th className='text-start' data-sort="transaction_no">Transaction No</th>
                                                          
                                                                <th className='text-start' data-sort="action">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="list form-check-all" id="invoice-list-data">
                                                            <tr style={{borderTop: 'none'}}>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>

                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Mtn Airtime VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white text-warning fw-medium">Initiated</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">Transfer</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.4 6.39998L6.82022 9.59998L5.59998 8.50918M14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4 1.59998 13.3255 1.59998 12V3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998H12C13.3255 1.59998 14.4 2.67449 14.4 3.99998Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>


                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Airtel Data VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦2000.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white  fw-medium" style={{color: '#2DAE32'}}>Successful</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">wallet</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>

                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Mtn Airtime VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white text-warning fw-medium">Initiated</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">Transfer</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr style={{borderTop: 'none'}}>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>

                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Mtn Airtime VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white text-warning fw-medium">Initiated</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">Transfer</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.4 6.39998L6.82022 9.59998L5.59998 8.50918M14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4 1.59998 13.3255 1.59998 12V3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998H12C13.3255 1.59998 14.4 2.67449 14.4 3.99998Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>


                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Airtel Data VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦2000.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white  fw-medium" style={{color: '#2DAE32'}}>Successful</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">wallet</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>

                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Mtn Airtime VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white text-warning fw-medium">Initiated</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">Transfer</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr style={{borderTop: 'none'}}>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>

                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Mtn Airtime VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white text-warning fw-medium">Initiated</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">Transfer</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.4 6.39998L6.82022 9.59998L5.59998 8.50918M14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4 1.59998 13.3255 1.59998 12V3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998H12C13.3255 1.59998 14.4 2.67449 14.4 3.99998Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>


                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Airtel Data VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦2000.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white  fw-medium" style={{color: '#2DAE32'}}>Successful</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">wallet</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="id d-flex gap-3 ">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>

                                                                    <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>Mtn Airtime VTU</span> <span>09063536635</span></a>
                                                                </td>
                                                                <td className="customer_name">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a>
                                                                    </div>
                                                                </td>
                                                                <td className="email"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary" ><span>₦100.00</span></a></td>
                                                                <td className="status"><span className="badge bg-white text-warning fw-medium">Initiated</span></td>
                                                                <td className="payment_method"><span className="badge bg-white text-primary fw-medium">Transfer</span></td>
                                                                <td className="transaction_no"><a href="javascript:void(0);" onClick="ViewInvoice(this);"  className="fw-medium link-primary d-flex" style={{flexDirection: 'column'}}><span>17045621860850336938179613</span> <span>6th January, 2024, 06:29PM</span></a></td>
                                                                <td className="action"><span className="badge bg-primary-subtle text-primary">Open</span>
                                                                </td>
                                                                
                                                            </tr>
                                                           
                                                        </tbody>
                                                    </table>
                                                    <div className="noresult" style={{display: "none"}}>
                                                        <div className="text-center">
                                                            {/* <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{"width:75px;height:75px"></lord-icon> */}
                                                            <h5 className="mt-2">Sorry! No Result Found</h5>
                                                            <p className="text-muted mb-0">We ve searched more than 150+ invoices We did not find any invoices for you search.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end mt-3">
                                                    <div className="pagination-wrap hstack gap-2">
                                                        <a className="page-item pagination-prev disabled" href="#">
                                                            Previous
                                                        </a>
                                                        <ul className="pagination listjs-pagination mb-0"></ul>
                                                        <a className="page-item pagination-next" href="#">
                                                            Next
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <div className="modal fade flip" id="deleteOrder" tabIndex="-1" aria-labelledby="deleteOrderLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-body p-5 text-center">
                                                            {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#405189,secondary:#f06548" style={{"width:90px;height:90px"></lord-icon> */}
                                                            <div className="mt-4 text-center">
                                                                <h4>You are about to delete a order ?</h4>
                                                                <p className="text-muted fs-15 mb-4">Deleting your order will remove all of your information from our database.</p>
                                                                <div className="hstack gap-2 justify-content-center remove">
                                                                    <button className="btn btn-link link-success fw-medium text-decoration-none" id="deleteRecord-close" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i> Close</button>
                                                                    <button className="btn btn-danger" id="delete-record">Yes, Delete It</button>
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
                            

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}