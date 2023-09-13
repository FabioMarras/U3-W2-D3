import React, { Component } from "react";
import TheLordOfRings1 from "./TheLordOfRings1";
import Loading from "./Loading";
import Error from "./Error";

class TheLordOfRings extends Component {
  state = {
    rings: [],
    Loading: true,
    Error: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=cfec1550&s=the+lord+of+the+rings", {
        headers: {},
      });
      if (response.ok) {
        let data = await response.json();
        this.setState({ rings: data.Search, Loading: false, Error: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    // console.log(this.state);
    const { rings } = this.state;
    // console.log(rings);

    return (
      <div>
        {this.state.Loading && <Loading />}
        {this.state.Error && <Error />}
        <TheLordOfRings1 Rings={rings} />;
      </div>
    );
  }
}

export default TheLordOfRings;
