import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signin', {
        username,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-container col-12 col-sm-4">
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <div className="title">Log in</div>
      <input
        type="text"
        placeholder="Username ... "
        value={username}
        onChange={(event) => setUserName(event.target.value)}
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
        className={username && password ? 'active' : ''}
        disabled={username && password ? false : true}
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
