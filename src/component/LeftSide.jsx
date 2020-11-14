import React from 'react';

import { Form, Button } from 'react-bootstrap';


const LeftSide = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
           <Form style={{widih:"80%", marginLeft:"10%",ùarginTop:"10%"}}>
               <Form.Group>
                   <Form.Label> Enter your email</Form.Label>
                   <Form.Control type="email" placeholder="Enter your email" />
               </Form.Group>
               <Form.Group>
                   <Form.Label> Enter your Password</Form.Label>
                   <Form.Control type="Password" placeholder="Enter your Password" />
               </Form.Group>
               <Button type="Submit">Submit</Button>
               
           </Form>
        </div>
    )
}

export default  LeftSide;
