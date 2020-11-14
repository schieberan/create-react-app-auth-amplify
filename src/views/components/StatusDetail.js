import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

//graph
import statusQuery from '../queries/fetchStatus'
import StatusCreate from './StatusCreate'
import StatusList from './StatusList'

class MareDetail extends Component {
    render() {
        const { status } = this.props.data
        if(!status) {return null}

        return (
            <div>
                <Link to="/"> Back</Link>
                <h4>{mare.name}</h4>
                <StatusList logs={mare.logs}/>
            </div>
        );
    }
}

export default graphql(mareQuery, {
    options: (props) => { return { variables: { id: props.match.params.id }}}
})(MareDetail);
