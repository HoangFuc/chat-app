import { useState } from 'react';
import { Helmet } from 'react-helmet';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi yêu cầu đăng nhập đến máy chủ hoặc xử lý logic đăng nhập ở đây
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="login-container col-12 col-sm-4">
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <div className="title">Log in</div>
      <div className="text">Email or Username</div>
      <input
        type="text"
        placeholder="Email or username ... "
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <div className="input-2">
        <input
          type={isShowPassword === true ? 'text' : 'password'}
          placeholder="Password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <i
          className={
            isShowPassword === true
              ? 'fa-regular fa-eye'
              : 'fa-regular fa-eye-slash'
          }
          onClick={() => setIsShowPassword(!isShowPassword)}
        ></i>{' '}
      </div>

      <button
        className={email && password ? 'active' : ''}
        disabled={email && password ? false : true}
        onClick={handleSubmit}
      >
        Log in{' '}
      </button>
      <div className="mb-3">
        <a href="/register">Create your account</a>
      </div>
      <div className="back">
        <i className="fa-regular fa-circle-left"></i> <a href="/">Go back</a>
      </div>
    </div>
  );
};

export default Login;
