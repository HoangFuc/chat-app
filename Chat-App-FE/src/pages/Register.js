import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   // Mật khẩu không khớp, yêu cầu người dùng nhập lại
    //   alert("Mật khẩu không khớp. Vui lòng nhập lại.");
    //   setPassword("");
    //   setConfirmPassword("");
    //   return;
    // }

    //   try {
    //     const response = await axios.post('/api/signup', {

    //       email,
    //       password,
    //     });

    //     console.log(response.data);
    //   } catch (error) {
    //       console.error(error);
    //   }
    toast.success('Đăng nhập thành công');
  };
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="container-register">
        <div className="signin">
          <div className="title">Register</div>
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </Form>

          <div className="text">
            {' '}
            <a href="/login"> Already have an account</a>
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
