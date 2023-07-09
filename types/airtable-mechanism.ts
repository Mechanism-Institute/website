export type AirtableMechanism = {
  id: string;
  createdTime: string;
  fields: Fields;
};

type Fields = {
  Name: string;
  Description: string;
  Type: string[];
  Implementations: string;
  Upvotes: number;
  Approved: boolean;
};
