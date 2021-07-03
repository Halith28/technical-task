import React from "react";
import { withNavBars } from "../../HOCs";
import HomeComp from "./home";

class Home extends React.Component {
  render() {
    return (
      <>
        <HomeComp />
      </>
    );
  }
}

export default withNavBars(Home);
