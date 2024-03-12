import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('/api/signin', {
    //     email,
    //     password,
    //   });
    //   console.log(response.data);
    //   toast.success('Đăng nhập thành công');
    // } catch (error) {
    //   toast.error('Đăng nhập thất bại');
    // }
    toast.success('Đăng nhập thành công');
  };
  const handleForgotPass = async (e) => {
    if (!email) {
      toast.info('Vui lòng nhập email');
    } else if (email != db.email) {
      toast.error('Email không tồn tại');
    } else {
      toast.success(
        'Chúng tôi đã gửi link reset password vào tài khoản email của bạn'
      );
    }
  };
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="container-signin">
        <div className="signin">
          <div className="title">Sign In</div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a onClick={handleForgotPass}>Forget Password?</a>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Sign In
            </Button>
          </Form>

          <div className="text">
            {' '}
            Create New Account? <a href="/register"> Sign Up</a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        limit={1}
        style={{ width: '500px' }}
      />
    </div>
  );
}
