import React, {Component} from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import {flowRight as compose} from 'lodash';
import {
    Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';
//graph
import query from '../queries/fetchMaresList'


const style = { width: "18rem" };

class MareList extends Component {

    deleteMare(id) {
        this.props.mutate({
            variables: { id },
            refetchQueries: [{ query }]
        }).then(() =>  this.props.data.refetch())
    }
    renderMares() {
        const {mares} = this.props.data;
        return mares && mares.map(({id, name}) => (
            <li key={id} className="collection-item">
                    <Link to={`/mares/${id}`}>
                        {name}
                    </Link>
                <i
                    className="material-icons"
                    onClick={() => this.deleteMare(id)}
                >
                    delete
                </i>
            </li>
        ));
    }
    render() {
        const {loading} = this.props.data;
        if(loading) { return <div>Loading....</div> }
        return (
            <div>
                <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          Mares
                        </CardTitle>
                </Col>
                <ul className="collection">
                    {this.renderMares()}
                </ul>
                <Col className="ml-auto mr-auto" lg="8">
                <Button
                    tag={Link}to="/mares/new"
                    block
                    color="primary"
                >
                    Add Mare
                </Button>
                </Col>
            </div>
        )
    }
}

const mutation = gql`
    mutation DeleteMare($id: ID) {
        deleteMare(id: $id) {
            id
        }
    }
`;
export default compose(
    graphql(mutation),
    graphql(query))(MareList);
