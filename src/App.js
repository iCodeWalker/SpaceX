import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import "./App.css";
import FilterView from "./components/filter";
import CardView from "./components/card";
import Loading from "./components/spinner";

class App extends React.Component {
  state = { books: null };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches/",
      {
        limit: 100,
      }
    );

    this.setState({ books: response.data });
  };

  onFilterClick = async (term) => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches/",
      {
        params: {
          limit: 100,
          launch_year: term,
        },
      }
    );
    this.setState({ books: response.data });
  };

  onLaunchClick = async (term) => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches/",
      {
        params: {
          limit: 100,
          launch_success: term,
        },
      }
    );
    this.setState({ books: response.data });
  };
  onLandClick = async (term) => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches/",
      {
        params: {
          limit: 100,
          launch_success: true,
          land_success: term,
        },
      }
    );
    this.setState({ books: response.data });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 style={{ textAlign: "center", textDecorationLine: "underline" }}>
          SpaceX Launch Programs
        </h3>
        <div className="row" style={{ backgroundColor: "#dee2e6" }}>
          <div className="col-xs-12 col-sm-12 col-md-5 col-xl-3">
            <FilterView
              onClick={this.onFilterClick}
              onLaunchClick={this.onLaunchClick}
              onLandClick={this.onLandClick}
            />
          </div>
          {this.state.books ? (
            <div className="col books mt-4">
              {this.state.books &&
                this.state.books.map((book, index) => {
                  return (
                    <div
                      style={{ marginBottom: 10, display: "grid" }}
                      key={book.flight_number}
                    >
                      <CardView
                        Name={book.mission_name}
                        flightNumber={book.flight_number}
                        imgSrc={book.links.mission_patch_small}
                        missionId={book.mission_id}
                        launchYear={book.launch_year}
                        launchSuccess={book.launch_success}
                        landSuccess={
                          book.rocket.first_stage.cores[0].land_success
                        }
                      />
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="spinner">
              <Loading />
            </div>
          )}
        </div>
        <div
          className="container-fluid"
          style={{
            //backgroundColor: "#dee2e6",
            padding: 30,
            textAlign: "center",
          }}
        >
          Developer Name: <p style={{ fontWeight: "bold" }}>Vaibhav Kadwey</p>
        </div>
      </div>
    );
  }
}

export default App;
