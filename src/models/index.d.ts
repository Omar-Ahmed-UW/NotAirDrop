import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SendURLMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UIDSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SendURL {
  readonly id: string;
  readonly fromUID: string;
  readonly toUID: string;
  readonly fileURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SendURL, SendURLMetaData>);
  static copyOf(source: SendURL, mutator: (draft: MutableModel<SendURL, SendURLMetaData>) => MutableModel<SendURL, SendURLMetaData> | void): SendURL;
}

export declare class UIDS {
  readonly id: string;
  readonly uid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UIDS, UIDSMetaData>);
  static copyOf(source: UIDS, mutator: (draft: MutableModel<UIDS, UIDSMetaData>) => MutableModel<UIDS, UIDSMetaData> | void): UIDS;
}