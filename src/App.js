import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import "./App.css";
import FilterView from "./components/filter";
import CardView from "./components/card";
import Loading from "./components/spinner";

class App extends React.Component {
  state = { program_data: null };
  componentDidMount() {
    this.fetchData();
    alert("Double tap the filter options to see the results");
  }
  fetchData = async () => {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches/",
      {
        limit: 100,
      }
    );

    this.setState({ program_data: response.data });
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
    this.setState({ program_data: response.data });
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
    this.setState({ program_data: response.data });
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
    this.setState({ program_data: response.data });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            padding: 10,
          }}
        >
          SpaceX Launch Programs
        </h1>
        <div className="row" style={{ backgroundColor: "#dee2e6" }}>
          <div className="col-xs-12 col-sm-12 col-md-5 col-xl-3">
            <FilterView
              onClick={this.onFilterClick}
              onLaunchClick={this.onLaunchClick}
              onLandClick={this.onLandClick}
            />
          </div>
          {this.state.program_data ? (
            <div className="col books mt-4">
              {this.state.program_data &&
                this.state.program_data.map((data, index) => {
                  return (
                    <div
                      style={{ marginBottom: 10, display: "grid" }}
                      key={data.flight_number}
                    >
                      <CardView
                        Name={data.mission_name}
                        flightNumber={data.flight_number}
                        imgSrc={data.links.mission_patch_small}
                        missionId={data.mission_id}
                        launchYear={data.launch_year}
                        launchSuccess={data.launch_success}
                        landSuccess={
                          data.rocket.first_stage.cores[0].land_success
                        }
                        customer={
                          data.rocket.second_stage.payloads[0].customers
                        }
                        rocketName={data.rocket.rocket_name}
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
          Developer Name: <h5 style={{ fontWeight: "bold" }}>Abhinav Sonakpuriya</h5>
        </div>
      </div>
    );
  }
}

export default App;
