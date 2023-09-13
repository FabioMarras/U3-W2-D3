import React, { Component } from "react";
import JohnWick1 from "./JohnWick1";
import Loading from "./Loading";
import Error from "./Error";

class JohnWick extends Component {
  state = {
    wick: [],
    Loading: true,
    Error: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=cfec1550&s=john+wick", {
        headers: {},
      });
      if (response.ok) {
        let data = await response.json();
        this.setState({ wick: data.Search, Loading: false, Error: false });
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
    const { wick } = this.state;
    // console.log(wick);

    return (
      <div>
        {this.state.Loading && <Loading />}
        {this.state.Error && <Error />}
        <JohnWick1 wick={wick} />;
      </div>
    );
  }
}

export default JohnWick;
