import React, { useState } from 'react';
import './Chat.css';
import { Container, Row, Col, ListGroup, Card, Form, Button } from 'react-bootstrap';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
  };

  const handleCreateGroup = () => {
    if (newGroup) {
      setGroups([...groups, newGroup]);
      setNewGroup('');
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message) {
      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  };

  return (
    <div className="app">
      <Container>
        <Row>
          <Col md={4}>
            {/* Left section */}
            <Card>
              <Card.Body className="d-flex flex-column">
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" className="avatar" />
                  <h5>User Name</h5>
                </div>
                <ListGroup className="flex-grow">
                  {groups.map((group, index) => (
                    <ListGroup.Item
                      key={index}
                      active={selectedGroup === group}
                      onClick={() => handleGroupSelection(group)}
                    >
                      {group}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="text-center">
                  <div className="d-flex">
                    <Form className="col-8">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="New Group"
                          value={newGroup}
                          onChange={(e) => setNewGroup(e.target.value)} 
                        />
                      </Form.Group>
                    </Form>
                    <div className="col-4">
                      <Button variant="primary" onClick={handleCreateGroup}>Create Group</Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            {selectedGroup && (
              <Card>
                <Card.Header>
                  <h4>{selectedGroup}</h4>
                </Card.Header>
                <Card.Body className="chat-body d-flex flex-column">
                  <div className="chat-messages">
                    {chatMessages.map((msg, index) => (
                      <p key={index}>{msg}</p>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Form onSubmit={handleSendMessage}>
                      <Form.Group className="d-flex">
                        <Form.Control 
                          type="text"
                          placeholder="Type your message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-grow-1"
                        />
                        <Button variant="primary" type="submit">Send</Button>
                      </Form.Group>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;