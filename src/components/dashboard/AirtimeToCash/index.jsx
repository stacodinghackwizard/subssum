import { useState } from 'react';
import '../style.css';

export default function Register() {
  const [loading,selectedOption, setSelectedOption] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    phone_number: "08094562627",
    amount: "₦5,000",
    sharePin: "3546576433",
    role: "fillIn",
    
  
  });
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [activeTab, setActiveTab] = useState('fillIn');

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
    <div>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-page-content display-center">
          <div className="container col-lg-7">
            <div className="row mt-5 d-flex justify-content-center">
                 {/* Tab Switch Outside the Form */}
                 <ul className="nav nav-tabs justify-content-center" id="registrationTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'fillIn' ? 'active' : ''}`}
                          onClick={() => handleTabChange('fillIn')}
                          type="button"
                        >
                          Fill Info
                          <div className={`tab-loader ${activeTab === 'fillIn' ? 'active-loader' : ''}`}></div>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'makePayment' ? 'active' : ''}`}
                          onClick={() => handleTabChange('makePayment')}
                          type="button"
                        >
                          Make Payment
                          <div className={`tab-loader ${activeTab === 'makePayment' ? 'active-loader' : ''}`}></div>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'viewReport' ? 'active' : ''}`}
                          onClick={() => handleTabChange('viewReport')}
                          type="button"
                        >
                          View Receipt
                          <div className={`tab-loader ${activeTab === 'viewReport' ? 'active-loader' : ''}`}></div>
                        </button>
                      </li>
                    </ul>
              <div className="col-md-10 col-lg-8 col-xl-9">
                <div className="card airtime-card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary airtime-text">Airtime to Cash</h5>
                    </div>

                    <div className="tab-content" id="registrationTabsContent">
                      {/* fillIn Tab */}
                      <div className={`tab-pane fade ${activeTab === 'fillIn' ? 'show active' : ''} p-2 mt-2`}>
                        <form className="needs-validation form" noValidate onSubmit={handleSubmit}>
                          {/* Form Fields */}
                          <div className='row mb-3'>
                         
                            <div className="col-md-6 col-sm-12 pb-sm-3">
                                <label htmlFor="exampleSelect" className="form-label">
                                Select Network 
                                </label>
                                <select
                                id="exampleSelect"
                                className="form-select"
                                value={selectedOption}
                                onChange={handleSelectChange}
                                required
                                >
                                <option value="" disabled>
                               
                                  Etisalat</option>
                                <option value="etisalat">
                                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80039 26.8266C10.1852 26.8266 10.4664 26.9081 10.644 27.0711C10.8216 27.2341 10.9105 27.4876 10.9107 27.8316V29.6754H10.3335V27.9096C10.3335 27.5208 10.1155 27.3264 9.67949 27.3264C9.49117 27.3248 9.30627 27.3769 9.14639 27.4764C9.17406 27.5927 9.18706 27.712 9.1851 27.8316V29.6754H8.60789V27.9096C8.60789 27.5208 8.38989 27.3264 7.95389 27.3264C7.75495 27.3266 7.55765 27.3623 7.37129 27.432V29.6754H6.79439V27.1155C6.98539 27.0205 7.18758 26.95 7.39619 26.9055C7.61871 26.8536 7.84631 26.8267 8.07479 26.8251C8.43479 26.8251 8.70229 26.8951 8.87729 27.0351C9.16552 26.8974 9.48097 26.8262 9.80039 26.8266ZM12.8883 29.76C12.4483 29.76 12.1176 29.6341 11.8962 29.3823C11.6748 29.1305 11.564 28.764 11.5638 28.2828C11.5638 27.309 12.0038 26.8222 12.8838 26.8224C13.3272 26.8224 13.6606 26.9473 13.884 27.1971C14.1074 27.4469 14.2192 27.8088 14.2194 28.2828C14.2194 28.7564 14.104 29.121 13.8732 29.3766C13.6424 29.6322 13.3141 29.76 12.8883 29.76ZM12.8826 29.2656C13.3884 29.2656 13.6412 28.938 13.641 28.2828C13.641 27.957 13.581 27.7136 13.461 27.5526C13.341 27.3916 13.1486 27.311 12.8838 27.3108C12.6164 27.3108 12.425 27.3932 12.3096 27.558C12.1942 27.7228 12.1365 27.9644 12.1365 28.2828C12.1365 28.601 12.196 28.8444 12.315 29.013C12.434 29.1816 12.6232 29.2654 12.8826 29.2644V29.2656ZM16.1463 26.8278C16.5567 26.8278 16.8681 26.9518 17.0805 27.1998C17.2929 27.4478 17.3994 27.7991 17.4 28.2537C17.4 28.8017 17.2727 29.1895 17.0181 29.4171C16.7635 29.6447 16.4399 29.759 16.0473 29.76C15.2595 29.76 14.8656 29.549 14.8656 29.127V25.7715H15.4374V27C15.5524 26.9451 15.6731 26.9031 15.7974 26.8749C15.9115 26.8456 16.0285 26.8294 16.1463 26.8266V26.8278ZM16.0032 29.2545C16.3032 29.2545 16.5132 29.1675 16.6332 28.9935C16.7532 28.8195 16.8132 28.5807 16.8132 28.2771C16.8132 27.9663 16.75 27.7294 16.6236 27.5664C16.4972 27.4034 16.3095 27.322 16.0605 27.3222C15.952 27.3229 15.844 27.3368 15.7389 27.3636C15.6337 27.389 15.5326 27.4294 15.4389 27.4836V28.9836C15.4379 29.1636 15.626 29.2535 16.0032 29.2533V29.2545ZM18.0522 25.917H18.6678V26.4447H18.0522V25.917ZM18.0687 26.9055H18.6459L18.6513 29.6766H18.0687V26.9055ZM19.4637 29.6766V25.8327H20.0355V29.6754L19.4637 29.6766ZM21.969 26.82C22.3978 26.82 22.712 26.96 22.9116 27.24C23.1112 27.52 23.2092 27.9115 23.2056 28.4145H21.27C21.2886 28.6885 21.3686 28.8968 21.51 29.0394C21.6514 29.182 21.852 29.2532 22.1118 29.253C22.423 29.2533 22.7293 29.175 23.0022 29.0253V29.5695C22.7164 29.6965 22.389 29.76 22.02 29.76C21.606 29.76 21.2808 29.6332 21.0444 29.3796C20.808 29.126 20.6899 28.766 20.6901 28.2996C20.6901 27.822 20.8018 27.4565 21.0252 27.2031C21.2486 26.9497 21.5632 26.822 21.969 26.82ZM21.9525 27.3C21.7583 27.3 21.6063 27.3519 21.4965 27.4557C21.3867 27.5595 21.3152 27.7353 21.282 27.9831H22.6176C22.5918 27.7461 22.5258 27.5731 22.4196 27.4641C22.3134 27.3551 22.1577 27.3004 21.9525 27.3ZM16.44 4.4538C15.8034 4.2964 15.3134 4.2176 14.97 4.2174C12.4083 4.2174 10.3314 6.2874 10.3314 8.8401C10.3314 11.3928 12.4092 13.4631 14.97 13.4631C17.5308 13.4631 19.6089 11.3931 19.6089 8.8401C19.6091 8.46715 19.5641 8.09555 19.4751 7.7334L23.163 6.7401C23.4617 7.87581 23.5182 9.06167 23.3288 10.2206C23.1394 11.3796 22.7083 12.4858 22.0635 13.4673L15.9567 24.789H10.2993L14.3193 17.379C14.3412 17.3382 14.2767 17.2482 14.2227 17.2434C9.92699 16.8534 6.56219 13.2534 6.56219 8.8707C6.56219 4.227 10.3392 0.462896 14.9988 0.462896C15.8518 0.461958 16.7 0.590109 17.5146 0.842996L16.44 4.4538Z" fill="#006E53"/>
                                    <path d="M14.9421 11.3824C16.3463 11.3824 17.4846 10.244 17.4846 8.83986C17.4846 7.43568 16.3463 6.29736 14.9421 6.29736C13.5379 6.29736 12.3996 7.43568 12.3996 8.83986C12.3996 10.244 13.5379 11.3824 14.9421 11.3824Z" fill="#D6E806"/>
                                    <path d="M19.3338 7.10669C18.8933 6.00406 18.0444 5.11393 16.9638 4.62179M20.952 6.41309C20.3299 4.88383 19.1537 3.64565 17.6583 2.94599M22.5123 5.89319C21.7199 3.87712 20.1617 2.25668 18.1782 1.38599" stroke="#D6E806" stroke-width="0.577859" stroke-linecap="round"/>
                                  </svg>

                                  Etisalat
                                </option>
                                <option value="mtn">Mtn</option>
                                <option value="airtel">Airtel</option>
                                </select>
                                <div className="invalid-feedback">Please select an option.</div>
                            </div>
                            <div className="col-md-6 col-sm-12 pb-sm-3">
                              <label htmlFor="phone_number" className="form-label">
                                Phone Number 
                              </label>
                              <input type="number" value={formData.phone_number} onChange={handleChange} className="form-control" name="phone_number" id="phone_number" required />
                              <div className="invalid-feedback">Please enter Phone Number</div>
                            </div>
                          </div>

                          <div className="col-md-12 col-sm-12 pb-sm-3">
                            <label htmlFor="amount" className="form-label">
                              Amount<span className="text-danger"></span>
                            </label>
                            <input type="text" value={formData.amount} onChange={handleChange} className="form-control" name="amount" id="amount" required />
                            <div className="invalid-feedback">Please enter amount</div>
                          </div>

                          <div className="col-md-12 col-sm-12 pb-sm-3">
                            <label htmlFor="sharePin" className="form-label">
                              Airtime Share Pin<span className="text-danger"></span>
                            </label>
                            <input type="text" value={formData.sharePin} onChange={handleChange} className="form-control" name="sharePin" id="sharePin" required />
                            <div className="invalid-feedback">Please enter Pin</div>
                          </div>

                          <button className="btn proceed-btn w-100" type="submit" disabled={loading}>
                            {loading ? (
                              <div className="spinner-border spinner-border-sm text-light" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              'Proceed'
                            )}
                          </button>
                        </form>
                      </div>

                      {/* makePayment Tab */}
                      <div className={`tab-pane fade ${activeTab === 'makePayment' ? 'show active' : ''} p-2 mt-3`}>
                        <form className="needs-validation form" noValidate onSubmit={handleSubmit}>
                          {/* Form Fields */}
                          <div className='row mb-3'>
                         
                            <div className="col-md-6 col-sm-12 pb-sm-3">
                                <label htmlFor="exampleSelect" className="form-label">
                                Select Network 
                                </label>
                                <select
                                id="exampleSelect"
                                className="form-select"
                                value={selectedOption}
                                onChange={handleSelectChange}
                                required
                                >
                                <option value="" disabled>Etisalat</option>
                                <option value="etisalat">Etisalat</option>
                                <option value="mtn">Mtn</option>
                                <option value="airtel">Airtel</option>
                                </select>
                                <div className="invalid-feedback">Please select an option.</div>
                            </div>
                            <div className="col-md-6 col-sm-12 pb-sm-3">
                              <label htmlFor="phone_number" className="form-label">
                                Phone Number 
                              </label>
                              <input type="number" value={formData.phone_number} onChange={handleChange} className="form-control" name="phone_number" id="phone_number" required />
                              <div className="invalid-feedback">Please enter Phone Number</div>
                            </div>
                          </div>

                          <div className="col-md-12 col-sm-12 pb-sm-3">
                            <label htmlFor="amount" className="form-label">
                              Amount<span className="text-danger"></span>
                            </label>
                            <input type="text" value={formData.amount} className="form-control" name="amount" id="amount" required />
                            <div className="invalid-feedback">Please enter amount</div>
                          </div>

                          <div className="col-md-12 col-sm-12 pb-sm-3">
                            <label htmlFor="sharePin" className="form-label">
                              Airtime Share Pin<span className="text-danger"></span>
                            </label>
                            <input type="text" value={formData.sharePin} className="form-control" name="sharePin" id="sharePin" required />
                            <div className="invalid-feedback">Please enter Pin</div>
                          </div>

                          <button className="btn proceed-btn w-100" type="submit" disabled={loading}>
                            {loading ? (
                              <div className="spinner-border spinner-border-sm text-light" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              'Proceed'
                            )}
                          </button>
                        </form>
                      </div>

                      {/* viewReport Tab */}
                      <div className={`tab-pane fade ${activeTab === 'viewReport' ? 'show active' : ''} p-2 mt-3`}>
                        <form className="needs-validation form" noValidate onSubmit={handleSubmit}>
                          {/* Form Fields */}
                          <div className='row mb-3'>
                         
                            <div className="col-md-6 col-sm-12 pb-sm-3">
                                <label htmlFor="exampleSelect" className="form-label">
                                Select Network 
                                </label>
                                <select
                                id="exampleSelect"
                                className="form-select"
                                value={selectedOption}
                                onChange={handleSelectChange}
                                required
                                >
                                <option value="" disabled>Etisalat</option>
                                <option value="etisalat">Etisalat</option>
                                <option value="mtn">Mtn</option>
                                <option value="airtel">Airtel</option>
                                </select>
                                <div className="invalid-feedback">Please select an option.</div>
                            </div>
                            <div className="col-md-6 col-sm-12 pb-sm-3">
                              <label htmlFor="phone_number" className="form-label">
                                Phone Number 
                              </label>
                              <input type="number" value={formData.phone_number} onChange={handleChange} className="form-control" name="phone_number" id="phone_number" required />
                              <div className="invalid-feedback">Please enter Phone Number</div>
                            </div>
                          </div>

                          <div className="col-md-12 col-sm-12 pb-sm-3">
                            <label htmlFor="amount" className="form-label">
                              Amount<span className="text-danger"></span>
                            </label>
                            <input type="text" value={formData.amount} className="form-control" name="amount" id="amount" required />
                            <div className="invalid-feedback">Please enter amount</div>
                          </div>

                          <div className="col-md-12 col-sm-12 pb-sm-3">
                            <label htmlFor="sharePin" className="form-label">
                              Airtime Share Pin<span className="text-danger"></span>
                            </label>
                            <input type="text" value={formData.sharePin} className="form-control" name="sharePin" id="sharePin" required />
                            <div className="invalid-feedback">Please enter Pin</div>
                          </div>

                          <button className="btn proceed-btn w-100" type="submit" disabled={loading}>
                            {loading ? (
                              <div className="spinner-border spinner-border-sm text-light" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              'Proceed'
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
        {/* end auth page content */}
      </div>
      {/* end auth page-wrapper */}
    </div>
  );
}
