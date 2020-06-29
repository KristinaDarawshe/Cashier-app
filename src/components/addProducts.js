import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { connect } from "react-redux";

class AddProducts extends React.Component {
  state = {
    productName: "",
    productPrice: 0,
    productAmount: 0,
    total:0
    
  };
  addName = (e) => {
    this.setState({ productName: e.target.value });
  };
  addPrice = (e) => {
    this.setState({ productPrice: e.target.value });
  };
  addAmount = (e) => {
    this.setState({ productAmount: e.target.value });
  };
  insertProducts =() => {
   const total=Number(this.state.productPrice)*Number(this.state.productAmount);
    this.setState({total})
    setTimeout(() => {
      this.props.insertProducts(this.state);
    }, 100);
  }
  render() {
    return (
      <InputGroup className="mb-3 addProductStyle">
        <FormControl
          placeholder="Product Name"
          aria-label="Product Name"
          aria-describedby="basic-addon2"
          type = "text"
          onChange={(e) => {
            this.addName(e);
          }}
        />
        <FormControl
          placeholder="Amount"
          aria-label="Amount"
          aria-describedby="basic-addon2"
          type ="number"
          onChange={(e) => {
            this.addAmount(e);
          }}
        />
        <FormControl
          placeholder="Price"
          aria-label="Price"
          aria-describedby="basic-addon2"
          type ="number"
          onChange={(e) => {
            this.addPrice(e);
          }}
        />
        <InputGroup.Append>
          <Button variant="dark" onClick= { () => this.insertProducts()}>ADD</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    insertProducts: (data) => dispatch({type: "INSERT" , data})
  };
}

export default connect (null,mapDispatchToProps)(AddProducts);
