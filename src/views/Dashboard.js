import React from "react";
import Table from "./components/table";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
    };
  }
  componentDidMount() {}
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };

  render() {
    return (
      <>
        <div className="content">
          <Table data={this.props.data} />
        </div>
      </>
    );
  }
}

export default Dashboard;
