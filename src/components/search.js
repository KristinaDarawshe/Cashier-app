import React from "react";
import {Card,Button,Accordion,FormControl} from "react-bootstrap";
import {connect} from "react-redux";
class Search extends React.Component{
    render(){
        return(
        <Accordion className="searchStyle">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="outline-dark" eventKey="0">
                  Find Product
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
              <FormControl
          placeholder="Product Name"
          aria-label="Product Name"
          aria-describedby="basic-addon2"
          type = "text"
          onChange ={(e)=>{
              this.props.searchProduct(e.target.value);
          }}
        />
              </Accordion.Collapse>
            </Card>
          </Accordion>);
    }
}
function mapDispatchToProps(dispatch){
    return{
        searchProduct : (data) => dispatch({type:"SEARCH",data})
    };
}
export default connect(null,mapDispatchToProps)(Search);