import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    navigate('/login');
  };
  return (
    <div>
      {' '}
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <div className="container-resetpassword">
        <div className="resetpassword">
          <div className="title">Reset Password</div>
          <Form>
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
              Update
            </Button>
          </Form>
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
