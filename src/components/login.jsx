import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {LoginSide} from '../assets/images';


export default function LogIn() {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    login: 'wabdotmail@gmail.com',
    password: 'Gabon4351',
  });
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notifySuccess = (text) => toast.success(text, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyError = (text) => toast.error(text, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    const getAuth = JSON.parse(localStorage.getItem('auth_data'));
    if (getAuth) {
      notifySuccess("Authorized!");
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { login, password } = formData;
    
    // Static credentials for login
    const staticLogin = 'wabdotmail@gmail.com';
    const staticPassword = 'Gabon4351';
  
    if (login && password) {
      if (login === staticLogin && password === staticPassword) {
        notifySuccess("Login successful!");
  
        // Store static auth data in local storage
        localStorage.setItem('auth_data', JSON.stringify({
          user: { email: staticLogin },
          access_token: 'static_token',
          permissions: ['dashboard_access'],
        }));
  
        // Redirect to the dashboard
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        notifyError("Invalid login or password.");
      }
    } else {
      notifyError("All fields are required!");
    }
  };
  

  return (
    <div>
      
      <div className="auth-page-wrapper  pt-5">
        <Toaster />
        <div className="auth-one-bg-position" id="auth-particles">
          
          <div className="shape"></div>
        </div>

        <div className="auth-page-content">
         
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  {/* <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <span className='dase-logo' height="20">DASE</span>
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p> */}
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>

              <div className='col-md-8 col-lg-6 col-xl-5'>
                <div className="card airtime-card " style={{borderRadius:'12px'}}>
                  <div className="card-body p-2">
                    <div className='text-center d-flex align-items-center justify-content-center gap-2'>
                      <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 11.7615C23.04 10.946 22.9668 10.1619 22.8309 9.40918H12V13.8576H18.1891C17.9225 15.2951 17.1123 16.513 15.8943 17.3285V20.214H19.6109C21.7855 18.2119 23.04 15.2637 23.04 11.7615Z" fill="#4285F4"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 23.0001C15.1049 23.0001 17.7081 21.9703 19.6108 20.2139L15.8942 17.3285C14.8644 18.0185 13.5472 18.4262 11.9999 18.4262C9.00467 18.4262 6.46945 16.4032 5.56513 13.6851H1.72308V16.6646C3.61536 20.423 7.50445 23.0001 11.9999 23.0001Z" fill="#34A853"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 13.685C5.33523 12.995 5.20455 12.2579 5.20455 11.5C5.20455 10.742 5.33523 10.005 5.56523 9.31499V6.33545H1.72318C0.944318 7.88795 0.5 9.64431 0.5 11.5C0.5 13.3557 0.944318 15.112 1.72318 16.6645L5.56523 13.685Z" fill="#FBBC05"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 4.57386C13.6883 4.57386 15.2042 5.15409 16.396 6.29364L19.6944 2.99523C17.7029 1.13955 15.0997 0 11.9999 0C7.50445 0 3.61536 2.57705 1.72308 6.33545L5.56513 9.315C6.46945 6.59682 9.00468 4.57386 11.9999 4.57386Z" fill="#EA4335"/>
                          </svg>

                      <span className='login-subhead'>Login with Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row justify-content-center">

              <div className="col-md-8 col-lg-6 col-xl-5">
                
                <div className=" text-center">
                  
                  <div className="signin-other-title">
                    <h5 className="fs-13 text-transparent bg-transparent title">Or continue with</h5>
                  </div>
                  
                </div>
                    
              </div>
            </div>

            <div className="row justify-content-center">
              
              <div className="col-md-8 col-lg-6 col-xl-5">
                
                <div className="card mt-4">
                  
                  <div className="card-body p-4">
                    
                    <div className="p-2 mt-4">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="useremail" className="form-label" style={{color: '#4C689E'}}>
                            Email Address
                          </label>
                          <input
                            value={formData.login}
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            placeholder="Email / Phone No."
                            name="login"
                            required
                            style={{color: '#4C689E'}}
                          />
                        </div>

                        <div className="mb-3">
                          
                          <label className="form-label" htmlFor="password-input" style={{color: '#4C689E'}}>
                            Password
                          </label>
                          <div className="position-relative auth-pass-inputgroup">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={formData.password}
                              onChange={handleChange}
                              className="form-control pe-5 password-input"
                              placeholder="Enter password"
                              name="password"
                              required
                              style={{color: '#4C689E'}}
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              onClick={togglePasswordVisibility}
                            >
                              <i className={`ri-${showPassword ? 'eye-off-fill' : 'eye-fill'} align-middle`}></i>
                            </button>
                          </div>
                        </div>
                        <div className='d-flex align-item-center justify-content-between w-100'>

                          
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={{color: '#4C689E'}}>Remember me</label>
                          </div>
                          <div className="float-end">
                            <Link to="/" className=" text-danger cursor">
                              Recover Password
                            </Link>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button className="btn py-2 fw-bold text-white  w-100" type="submit" style={{backgroundColor: '#4169E1'}}>Log In</button>
                        </div>

                        
                      </form>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
