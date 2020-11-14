import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

//graph
import mareQuery from '../queries/fetchMare'
import LogCreate from './LogCreate'
import LogList from './LogList'

class MareDetail extends Component {
    render() {
        const { mare } = this.props.data
        if(!mare) {return null}

        return (
            <div>
                <Link to="/"> Back</Link>
                <h4>{mare.name}</h4>
                <LogList logs={mare.logs}/>
                <LogCreate mareId={this.props.match.params.id}/>
            </div>
        );
    }
}

export default graphql(mareQuery, {
    options: (props) => { return { variables: { id: props.match.params.id }}}
})(MareDetail);
