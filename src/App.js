import React from 'react' ;

import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Button,Alert,Col,Row } from 'react-bootstrap' ;
import Menu from "./component/Menu" ;
import  LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide" ;

function App() {
  return (
    <div className="App">
      <Menu/>
      <Row className="landing">

        <Col> <LeftSide /> </Col>
         <Col> <RightSide /> </Col>
      </Row>
    
      
    </div>
  );
}

export default App;
