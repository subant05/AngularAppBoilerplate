import { gql } from 'apollo-angular';

const JoinedTickets = gql`
query Tickets($offset: Int = 1, $limit: Int = 1) {
  connections(orderBy: ID_DESC, first: $limit, offset: $offset) {
    nodes {
      id
      jira {
        jiraId
        jiraTicket
        machineType
        priority
        project
        requirement
        description
        expertConnectLink
        formantLink
        issueType
        roadmapItem
        summary
        team {
          name
        }
      }
      formant {
        deviceId
        deviceName
        id
        message
        severity
        streamName
        streamType
        tags
        time
        type
        url
        value
      }
      expertConnect {
        bundle
        contactId
        createdAt
        description
        ecId
        id
        machineHours
        misc
        product
        resolution
        serialNumber
        team {
          name
          ecId
          id
        }
        title
        vehicle {
          deviceId
          name
        }
        advisor {
          email
          firstName
          lastName
          phone
        }
      }
    }
    edges {
      node {
        id
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}

`

  export {JoinedTickets as default}