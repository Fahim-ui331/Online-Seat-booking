import React, { useState } from 'react';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap';
import './userSearch.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserSearch = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    members: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    // Simulate search action
    console.log('Searching with the following details:', formData);
    alert('Booked');
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Restaurants Resevation</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <Form>
              <Form.Group>
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Select Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="custom-input"
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Label>Enter Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  className="custom-input"
                />
              </Form.Group> */}
              <Form.Group>
                <Form.Label>Number of Members</Form.Label>
                <Form.Control
                  type="number"
                  name="members"
                  value={formData.members}
                  onChange={handleInputChange}
                  placeholder="Enter number of members"
                  min="1"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group>
  <Form.Label>Special Instruction</Form.Label>
  <Form.Control
    type="text"
    name="specialInstruction"
    value={formData.specialInstruction || ''}
    onChange={handleInputChange}
    placeholder="Enter special instructions (optional)"
    className="custom-input"
  />
</Form.Group>
              <Button variant="primary" onClick={handleSearch} className="w-100 custom-button">
                Take Reservation
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserSearch;
