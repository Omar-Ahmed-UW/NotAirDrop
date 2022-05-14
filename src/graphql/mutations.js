/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUIDS = /* GraphQL */ `
  mutation CreateUIDS(
    $input: CreateUIDSInput!
    $condition: ModelUIDSConditionInput
  ) {
    createUIDS(input: $input, condition: $condition) {
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
export const updateUIDS = /* GraphQL */ `
  mutation UpdateUIDS(
    $input: UpdateUIDSInput!
    $condition: ModelUIDSConditionInput
  ) {
    updateUIDS(input: $input, condition: $condition) {
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
export const deleteUIDS = /* GraphQL */ `
  mutation DeleteUIDS(
    $input: DeleteUIDSInput!
    $condition: ModelUIDSConditionInput
  ) {
    deleteUIDS(input: $input, condition: $condition) {
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
