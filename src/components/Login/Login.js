import React, { useState } from "react";
import './Login.scss';
import itracIcon from "../../images/icons/itrac.svg";

function Login({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleUserName = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const validate = () => {
    let errors = {};

    if (!username.trim()) {
      errors.username = "Please enter your username.";
    }

    if (!password.trim()) {
      errors.password = "Please enter your password.";
    }

    return errors;
  }

  const getData = async (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        setLoading(true);
        const response = await fetch('http://54.73.58.228:100/api/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: 'Admin', password: 'Medical2021' })
        });
        const responseData = await response.json();
        if (response.ok) {
          if (responseData.success) {
            const token = responseData.data.token;
            localStorage.setItem('token', token);
            console.log('Token:', token);
            history.push('/app/home'); 
          } else {
            setErrors({ password: responseData.message || "Something went wrong. Please try again later." });
          }
        } else {
          setErrors({ password: "Something went wrong. Please try again later." });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrors({ password: "Something went wrong. Please try again later." });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(errors);
    }
  }
    

  return (
    <div className="login-section">
      <div className="flex">
        <div className="login-firstsecion">
          <div className="detailswhole-section">
            <form onSubmit={getData}>
              <div>
                <img className="logo-imgcontent" src={itracIcon} alt="itracIcon" />
                <div className="login-content">Login to your account</div>
                <div><input type="text" onChange={handleUserName} className={errors.username ? 'username-inputcontent error-border' : 'username-inputcontent normal-border'} name="username" placeholder="Username" /></div>
                <div className="text-danger">{errors.username}</div>
                <div><input type="password" onChange={handlePassword} className={errors.password ? 'password-inputcontent error-border' : 'username-inputcontent normal-border'} name="password" placeholder="Password" /></div>
                <div className="text-danger">{errors.password}</div>
                <div><button type="submit" value="submit" disabled={loading} className="signinbutton-content">{loading ? 'Logging in...' : 'Login'}</button></div>
              </div>
            </form>
          </div>
        </div>
        <div className="login-seconsection">
          <div className="secondwhole-section">
            <div className="detailswhole-section">
              <div>
                <div className="new-content">New to iTrac?</div>
                <div className="started-content">Get started to unleash your new potential <br /> in your product Monitoring and Tracking, </div>
                <div className="expbutton-content"><button type="submit" value="submit" className="explorebutton-content">Explore Product</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
