import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0,
    };
  }

  incrementNumberOfVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.imgUrl}  alt="HornedBeast"
          title={this.props.title}
          onClick={this.incrementNumberOfVotes} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            <ul>
          <li>Number of Votes : {this.state.numberOfVotes}</li>
          <li>{this.props.keyword}</li>
          <li>{this.props.horns}</li>
        </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

       
      </>
    );
  }
}

export default HornedBeast;   

  
///////////////////
