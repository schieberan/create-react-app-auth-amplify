import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//graph
import query from '../queries/fetchMaresList'

class MareCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {name} = this.state;
        const { history } = this.props;

        this.props.mutate({
            variables: { name },
            refetchQueries: [{ query }]
        }).then(() =>  history.push('/'))
    }
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a new Mare!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Mare Name:</label>
                    <input
                        label="Mare Name:"
                        onChange={e => this.setState({name: e.target.value})}
                        value={this.state.name}
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddMare($name: String){
        addMare(name: $name) {
            id,
            name
        }
    }
`;
export default graphql(mutation)(MareCreate);
