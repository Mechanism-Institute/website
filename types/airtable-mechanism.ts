export type AirtableMechanism = {
  id: string;
  createdTime: string;
  fields: Fields;
};

type Fields = {
  Name: string;
  Slug: string;
  Description: string;
  Type: string[];
  Implementations: string[];
  AlternativeNames: string; // TODO: API SHOULD RETURN ARRAY
  Resources: string;
  Upvotes: number;
  Approved: boolean;
  Discussion: string;
};
