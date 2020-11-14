import { gql } from 'apollo-boost';

const getLogsQuery = gql`
  {
    logs {
      content
      id
    }
  }
`;

const getNotificationsQuery = gql`
  {
    notifications {
      content
      contact
      id
    }
  }
`;

const getMaresQuery = gql`
  {
    mares {
      camera
      date
      time
      stat
      id
    }
  }
`;

const addLogMutation = gql`
  mutation($content: String!, $mareId: ID!) {
    addLog(content: $content, mareId: $mareId) {
      content
      id
    }
  }
`;

const addNotificationMutation = gql`
  mutation($content: String!, $contact: String!, $mareId: ID!) {
    addLog(content: $content, contact: $contact, mareId: $mareId) {
      content
      contact
      id
    }
  }
`;

const getLogQuery = gql`
  query($id: ID) {
    log(id: $id) {
      id
      content
      mare {
        id
        camera
        date
        time
        stat
        logs {
          content
          id
        }
      }
    }
  }
`;

const getNotificationQuery = gql`
  query($id: ID) {
    notification(id: $id) {
      id
      content
      contact
      mare {
        id
        camera
        date
        time
        stat
        notifications {
          content
          contact
          id
        }
      }
    }
  }
`;

const getMareQuery = gql`
  query($id: ID) {
    mare(id: $id) {
      id
      camera
      date
      time
      state
      logs {
        id
        content
        notifications {
          content
          contact
          id
        }
      }
    }
  }
`;


const addMareMutation = gql`
  mutation($camera: String!, $date: String!, $time: String!, $stat: String!) {
    addAuthor(camera: $camera, date: $date, time: $time, stat: $stat) {
      camera
      date
      time
      stat
    }
  }
`;

export {
  getMaresQuery,
  getLogsQuery,
  getNotificationsQuery,
  getMareQuery,
  getLogQuery,
  getNotificationQuery,
  addLogMutation,
  addNotificationMutation,
  addMareMutation
};