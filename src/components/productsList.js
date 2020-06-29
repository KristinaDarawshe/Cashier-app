import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product";
import { connect } from "react-redux";
class ProductList extends React.Component {
  render() {
    const poductsLi = (this.props.searchedProducts.length &&  this.props.searchedProducts) || (this.props.listOfProducts);
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="removeColumn"></th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {poductsLi.map((product, index) => {
            return (
              <Product
                key={index}
                index={index}
                name={product.productName}
                price={product.productPrice}
                amount={product.productAmount}
                total ={product.total}
              />
            );
          })}
        </tbody>
      </Table>
    );
  }
}
function mapStateToProps(state) {
  return {
    listOfProducts: state.products,
    searchedProducts: state.searchProducts,
  };
}

export default connect(mapStateToProps, null)(ProductList);
