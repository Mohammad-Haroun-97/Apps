import React from 'react';
import Form from 'react-bootstrap';
import Button  from 'react-bootstrap';


class Form extends React.Component {
   
    render() {
        return (
            <>
            <h3>How many horns</h3>
            <Form.Group  className="mb-3" controlId="selectedHorn" >
    
                <Form.Select style={{marginBottom: 40}} aria-label="Default select example"onChange= {this.props.filter}  >
                    
                    <option value="All">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Thee</option>
                    <option value="100">Randm</option>
                </Form.Select>
                
    </Form.Group>
            </>
        )
    }
}

export default Form;