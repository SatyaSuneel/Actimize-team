import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Workexperience from './Workexperience';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="App">
      <Topbar />
      <Row>
      <Col lg={2}>
      <Sidebar />
      </Col>
      <Col lg={10}>
      <Workexperience />
      </Col>
      </Row>
      </div>
    </Router>
  );
}

export default App;