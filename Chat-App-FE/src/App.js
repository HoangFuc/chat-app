import { Routes, Route, Navigate } from 'react-router-dom';

import TableUsers from './components/TableUsers';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Register from './pages/Register';

function App() {
  return (
    <div className="app-container">
      <TableUsers />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
