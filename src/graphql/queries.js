/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUIDS = /* GraphQL */ `
  query GetUIDS($id: ID!) {
    getUIDS(id: $id) {
      id
      uid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUIDS = /* GraphQL */ `
  query ListUIDS(
    $filter: ModelUIDSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUIDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUIDS = /* GraphQL */ `
  query SyncUIDS(
    $filter: ModelUIDSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUIDS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        uid
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
