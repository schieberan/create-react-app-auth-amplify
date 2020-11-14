import gql from 'graphql-tag'

export default gql`
    query StatusQuery($id: ID!) {
        status(id: $id) {
            id,
            camera,
            time,
            date,
            stat
        }
    }
`;