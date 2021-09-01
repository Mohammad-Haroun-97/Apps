import React from 'react';
import {Modal ,Button } from 'react-bootstrap';
import HornedBeast from '../components/HornedBeast';
import data from '../data.json'; 
 



 class SelectedBeats extends React.Component{

    render(){
        return (
            <>
           
              
        
            <Modal
                show={this.props.state}
                onHide={this.props.hideFun}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton >
                  <Modal.Title id="example-custom-modal-styling-title">
                    
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
              <HornedBeast/>
                 
                 <Modal.Footer>
            <Button onClick={this.props.hideFun}>Close</Button>
          </Modal.Footer>
                </Modal.Body>
              </Modal>
            </>
          );
      }  

 }
  

export default SelectedBeats;