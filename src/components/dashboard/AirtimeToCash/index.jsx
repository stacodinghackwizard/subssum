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
