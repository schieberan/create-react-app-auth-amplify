import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LogCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { content } = this.state
        const { mareId } = this.props
        this.props.mutate({
            variables: {
                content, 
                mareId
            }
        }).then(() => this.setState({content: ''}))
    }
    render() {
        const { content } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add a log!</label>
                <input 
                    value={content}
                    onChange={evt => this.setState({content: evt.target.value})}
                />
            </form>
        )
    }
}

const mutation = gql`
    mutation AddLog($content: String, $mareId: ID) {
        addLogToMare(content: $content, mareId: $mareId) {
            id
            logs {
                id
                content
                likes
            }
        }
    }
`;

export default graphql(mutation)(LogCreate);
