import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactTable from 'react-table'

// reactstrap components
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
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

const columns = [{
    header: 'Camera',
    accessor: 'camera',
  }, 
  {
    header: 'Date',
    accessor: 'date'
  },
  {
    header: 'Time',
    accessor: 'time'
  },
  {
    header: 'Status',
    accessor: 'stat'
}]

class StatusList extends Component {
    
        render() {
            const { status } = this.props.data
            if(!status) {return null}
            return (
                <div className="App">
                <Table>
                    <ReactTable className="-striped -highlight"
                        data={status}
                        columns={columns}     
                        />
                </Table>
                </div>
            );
        } 
    }

const mutation = gql`
query status {
  products{
    camera
    date
    time
    stat
  }                                                                                                                                                                                                             
}
`

export default graphql(mutation)(StatusList);