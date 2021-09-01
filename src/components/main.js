import React from 'react';
import HornedBeast from './HornedBeast'
import Col from 'react-bootstrap/Col';


class Main extends React.Component{
    render(){
        return(
            <>
            
           
           

           {this.props.data.map((item ,i)=>{
        return <>
     
     <Col xs ={{ order: 1 }}><HornedBeast title={item.title} imgUrl={item.image_url} description={item.description } keyword={item.keyword}  horns={item.horns}
            showFun={this.props.showFun} hideFun={this.props.hideFun}  i={i}  />
            
            </Col>


            
          </>
      })}
       
       
     </>
    )

  }
}
export default Main;
