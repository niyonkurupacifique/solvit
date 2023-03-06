import React, { Component } from "react";
import Footer from "./listingComponent";
import Footerbody from "./footer";
class Quote extends Component {
  constructor() {
    super();
    this.state = {
      mydata: [],
    };
  }
  async componentDidMount() {
    const result = await fetch("https://zenquotes.io/api/quotes/");

    const mydata = await result.json();
    this.setState({ mydata: mydata });
  }

  render() {
    return (
      <div>
        <div>
          <Footer />
        </div>
        <div>{console.log(this.state.mydata)}</div>
        <div>
          <Footerbody />
        </div>
      </div>
    );
  }
}
export default Quote;
