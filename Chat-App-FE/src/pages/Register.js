import { useState } from 'react';
import { Helmet } from 'react-helmet';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserNameChange = (e) => {
    setName(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
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
        value={name}
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
        className={name && email && password && confirmPassword ? 'active' : ''}
        disabled={name && email && password && confirmPassword ? false : true}
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
