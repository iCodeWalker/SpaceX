import React from "react";
import "./filter.css";

class FilterView extends React.Component {
  state = { term: "" };

  onButtonClick = (event) => {
    event.preventDefault();
    const buttonValue = event.target.value;
    this.setState({ term: buttonValue });
    this.props.onClick(this.state.term);
    console.log(buttonValue, this.state.term);
  };
  onLaunchButtonClick = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
    this.props.onLaunchClick(this.state.term);
  };
  onLandButtonClick = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
    this.props.onLandClick(this.state.term);
  };

  render() {
    return (
      <div
        className=" mt-4"
        style={{
          backgroundColor: "white",
          width: "18rem",
          border: 1,
          marginLeft: 20,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <h2 style={{ textDecorationLine: "underline", textAlign: "center" }}>
          Filters
        </h2>
        <h3 style={{ textAlign: "center", textDecorationLine: "underline" }}>
          Launch Year
        </h3>
        <div>
          <div>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2006"
            >
              2006
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2007"
            >
              2007
            </button>
          </div>
          <div>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2008"
            >
              2008
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2009"
            >
              2009
            </button>
          </div>
          <div style={{ flexDirection: "row" }}>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2010"
            >
              2010
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2011"
            >
              2011
            </button>
          </div>
          <div style={{ flexDirection: "row" }}>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2012"
            >
              2012
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2013"
            >
              2013
            </button>
          </div>
          <div style={{ flexDirection: "row" }}>
            <button
              className="fetch-button "
              onClick={this.onButtonClick}
              value="2014"
            >
              2014
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2015"
            >
              2015
            </button>
          </div>
          <div style={{ flexDirection: "row" }}>
            <button
              className="fetch-button "
              onClick={this.onButtonClick}
              value="2016"
            >
              2016
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2017"
            >
              2017
            </button>
          </div>
          <div style={{ flexDirection: "row" }}>
            <button
              className="fetch-button "
              onClick={this.onButtonClick}
              value="2018"
            >
              2018
            </button>
            <button
              className="fetch-button"
              onClick={this.onButtonClick}
              value="2019"
            >
              2019
            </button>
          </div>
          <div style={{ flexDirection: "row" }}>
            <button
              className="fetch-button "
              onClick={this.onButtonClick}
              value="2020"
            >
              2020
            </button>
          </div>
        </div>
        <h4 style={{ textAlign: "center", textDecorationLine: "underline" }}>
          Successfull Launch
        </h4>
        <button
          className="fetch-button"
          onClick={this.onLaunchButtonClick}
          value="true"
        >
          True
        </button>
        <button
          className="fetch-button"
          onClick={this.onLaunchButtonClick}
          value="false"
        >
          False
        </button>
        <h4 style={{ textDecorationLine: "underline", textAlign: "center" }}>
          Successfull Landing
        </h4>
        <button
          className="fetch-button"
          onClick={this.onLandButtonClick}
          value="true"
        >
          True
        </button>
        <button
          className="fetch-button"
          onClick={this.onLandButtonClick}
          value="false"
        >
          False
        </button>
      </div>
    );
  }
}
export default FilterView;
