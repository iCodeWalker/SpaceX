import Card from "react-bootstrap/Card";
const CardView = (props) => {
  let launch;
  if (props.launchSuccess) {
    launch = "True";
  } else {
    launch = "False";
  }

  let landing;
  if (props.landSuccess) {
    landing = "True";
  } else {
    landing = "False";
  }

  return (
    <div>
      <Card
        style={{
          width: "15rem",
          marginLeft: 20,
          padding: 10,
          marginBottom: 10,
        }}
      >
        <Card.Img
          variant="top"
          src={props.imgSrc}
          alt={props.rocketName}
          style={{
            marginBottom: 10,
            backgroundColor: "#dee2e6",
            width: 220,
            height: 240,
          }}
        />
        <Card.Body>
          <Card.Title>
            {props.Name} #{props.flightNumber}
          </Card.Title>
          <Card.Text>Mission Ids: {props.missionId}</Card.Text>
          <Card.Text>Launch Year: {props.launchYear}</Card.Text>
          <Card.Text>
            Successful Launch:
            {launch}
          </Card.Text>
          <Card.Text>Successful Landing: {landing}</Card.Text>
          <Card.Text>Customers: {props.customer}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardView;
