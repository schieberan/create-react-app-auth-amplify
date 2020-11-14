import gql from 'graphql-tag'

export default gql`
    query MareQuery($id: ID!) {
        mare(id: $id) {
            id,
            name
            logs {
                id
                content
                likes
            }
        }
    }
`;