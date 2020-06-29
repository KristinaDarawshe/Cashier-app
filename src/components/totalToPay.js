import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "../App.css";
class TotalToPay extends React.Component {
  render() {
    return (
      <Card border="dark" className="totalCard">
        <Card.Body>
          <Card.Text>Total to Pay<span className="flaot">{this.props.totalToPay}$</span> </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
function mapStateToProps(state) {
  return {
    totalToPay: state.totalToPay,
  };
}
export default connect(mapStateToProps, null)(TotalToPay);
