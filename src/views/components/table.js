import React, { PureComponent } from "react";
import { Card, CardHeader, CardBody, CardTitle, Col, Table } from "reactstrap";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GETLIST = gql`
  {
    neighapi {
      status {
        mare
        camera
        time
        date
        status
      }
    }
  }
`;

const TableComp = (props) => {
  const data = useQuery(GETLIST);

  if (data.loading) return <p>Loading...</p>;
  if (data.error) return <p>ERROR</p>;

  const arr = data.data.neighapi.status;
  return (
    <Card>
      <Col lg="12" md="12">
        <Card className="card-tasks">
          <CardHeader>
            <CardTitle tag="h4">Mare Stats</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-full-width table-responsive">
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th className="text-center">Mare</th>
                    <th className="text-center">Camera</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Time</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((value, index) => {
                    console.log(value.mare);
                    return (
                      <tr>
                        <td className="text-center">{value.mare}</td>
                        <td className="text-center">{value.camera}</td>
                        <td className="text-center">{value.date}</td>
                        <td className="text-center">{value.time}</td>
                        <td className="text-center">{value.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Card>
  );
};

export default TableComp;