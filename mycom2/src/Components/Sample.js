import React, { Component } from 'react'
import { connect } from "react-redux";
import { carded, named } from "../actions";

export class Sample extends Component {
  carded= ()=>{
    this.props.carded({
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    })
  }
  render() {
    return (
      <div>
        <h1>hiii</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const cardetails = state.cardetails;
  console.log("cards recieved", cardetails);

  return {
    cardetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    carded: (payload) => dispatch(carded(payload)),
    named: (payload) => dispatch(named(payload)),

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Sample);

