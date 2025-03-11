import React from 'react';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap';
import './tablebook.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TableBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tables: [],
      tableType: '',
      tableCount: 0,
    };
  }

  addTable = () => {
    const { tableType, tableCount, tables } = this.state;

    // Predefined chair counts for specific table types
    const tableOptions = {
      '2-chair table': 2,
      '4-chair table': 4,
      '6-chair table': 6,
    };

    if (tableType && tableOptions[tableType] && tableCount > 0) {
      const newTables = Array.from({ length: tableCount }, () => ({
        name: tableType,
        chairs: tableOptions[tableType],
      }));
      this.setState({
        tables: [...tables, ...newTables],
        tableType: '',
        tableCount: 0,
      });
    }
  };

  removeTable = (index) => {
    const updatedTables = this.state.tables.filter((_, i) => i !== index);
    this.setState({ tables: updatedTables });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { tables, tableType, tableCount } = this.state;

    return (
      <Container className="mt-5">
        <h1 className="text-center mb-4">Restaurant Table & Chair Customizer</h1>
        <Row>
          <Col md={4}>
            <Card className="p-3 shadow">
              <Form>
                <Form.Group>
                  <Form.Label>Select Table Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="tableType"
                    value={tableType}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Choose...</option>
                    <option value="2-chair table">2-Chair Table</option>
                    <option value="4-chair table">4-Chair Table</option>
                    <option value="6-chair table">6-Chair Table</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>How Many?</Form.Label>
                  <Form.Control
                    type="number"
                    name="tableCount"
                    value={tableCount}
                    onChange={this.handleInputChange}
                    placeholder="Enter number of tables"
                    min="1"
                  />
                </Form.Group>
                <Button variant="primary" onClick={this.addTable} className="w-100">
                  Add Tables
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={8}>
            <div className="d-flex flex-wrap justify-content-center">
              {tables.map((table, index) => (
                <Card key={index} className="m-2 p-3 shadow table-card animate__animated animate__fadeIn">
                  <Card.Body>
                    <Card.Title>{table.name}</Card.Title>
                    <Card.Text>{`Chairs: ${table.chairs}`}</Card.Text>
                    <Button variant="danger" onClick={() => this.removeTable(index)} size="sm">
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TableBook;
