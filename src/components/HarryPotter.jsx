import React, { Component } from "react";
import Harry1 from "./Harry1";
import Loading from "./Loading";
import Error from "./Error";

class HarryPotter extends Component {
  state = {
    harry: [],
    Loading: true,
    Error: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=cfec1550&s=Harry+Potter", {
        headers: {},
      });
      if (response.ok) {
        let data = await response.json();
        this.setState({ harry: data.Search, Loading: false, Error: false });
      } else {
        console.log("error");
        this.setState({ Loading: false, Error: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ Loading: false, Error: true });
    }
  };

  render() {
    // console.log(this.state);
    const { harry } = this.state;
    // console.log(harry);

    return (
      <div>
        {this.state.Loading && <Loading />}
        {this.state.Error && <Error />}
        <Harry1 harry={harry} />
      </div>
    );
  }
}

export default HarryPotter;
