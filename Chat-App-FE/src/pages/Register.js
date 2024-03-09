import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {

    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    // Mật khẩu không khớp, yêu cầu người dùng nhập lại
    alert("Mật khẩu không khớp. Vui lòng nhập lại.");
    setPassword("");
    setConfirmPassword("");
    return;
  }

    try { 
      const response = await axios.post('/api/signup', {
        username,
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  };
  return (
    <div className="register-container col-12 col-sm-4">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="title">Register</div>
      <div className="text">UserName</div>
      <input
        type="name"
        placeholder="UserName..."
        value={username}
        onChange={handleUserNameChange}
      />
      <div className="text">Email</div>
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={handleEmailChange}
      />
      <div className="text">Password</div>
      <input
        type="password"
        placeholder="Password..."
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="text">Confirm Password</div>
      <input
        type="password"
        placeholder="ConfirmPassword..."
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <button
        className={username && email && password && confirmPassword ? 'active' : ''}
        disabled={username && email && password && confirmPassword ? false : true}
        onClick={handleSubmit}
      >
        Register{' '}
      </button>
      <div className="back">
        <i className="fa-regular fa-circle-left"></i>{' '}
        <a href="/login">Go back</a>
      </div>
    </div>
  );
};

export default Register;
