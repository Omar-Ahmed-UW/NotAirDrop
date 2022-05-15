import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UIDSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UIDS {
  readonly id: string;
  readonly uid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UIDS, UIDSMetaData>);
  static copyOf(source: UIDS, mutator: (draft: MutableModel<UIDS, UIDSMetaData>) => MutableModel<UIDS, UIDSMetaData> | void): UIDS;
}