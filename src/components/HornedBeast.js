import React from 'react';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes : 0
        }
    }

    incrementNumberOfVotes = () => {
        this.setState({
            numberOfVotes : this.state.numberOfVotes + 1  
        })
    }



    render(){
        return(
            <>



            <h2> {this.props.title} </h2>

         <img src={this.props.imgUrl}  alt="HornedBeast"  title = {this.props.title} onClick={this.incrementNumberOfVotes} ></img>

         <p>
         {this.props.description}
         </p>

         <ul>
             <li>Number of Votes : {this.state.numberOfVotes}</li>
             <li>{this.props.keyword}</li>
             <li>{this.props.horns}</li>
         </ul>

            </>
        )
    }
}

export default HornedBeast;