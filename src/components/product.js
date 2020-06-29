import React from "react";
import { Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
class Product extends React.Component {

  render() {
    return (
      <tr>
        <td className="removeColumn">
          {" "}
          <Button
            variant="outline-danger"
            className="removebutton"
            onClick={() => this.props.deleteProduct(this.props.index)}
          >
            X
          </Button>
        </td>
        <td>{this.props.name}</td>
        <td>
          {" "}
          <FormControl
            value={this.props.amount}
            aria-label={this.props.amount}
            aria-describedby="basic-addon2"
            type="number"
            min="0"
            onChange={(e) => {
                this.props.updateAmount({"newAmount":Number(e.target.value),index:this.props.index});
            }}
          />
        </td>
        <td>
          {" "}
          <FormControl
           value={this.props.price}
            aria-label={this.props.price}
            aria-describedby="basic-addon2"
            type="number"
            min="0"
            onChange={(e) => {
                this.props.updatePrice({"newPrice":Number(e.target.value),index:this.props.index});
            }}
          />
        </td>
        <td >{this.props.total}</td>
      </tr>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: (data) => dispatch({ type: "DELETE", data }),
    updateAmount: (data) => dispatch({ type: "UPDATEAMOUNT", data }),
    updatePrice : (data) => dispatch({ type: "UPDATEPRICE", data })
  };
}
export default connect(null, mapDispatchToProps)(Product);
