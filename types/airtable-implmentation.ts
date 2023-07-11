export type AirtableImplementation = {
  id: string;
  fields: Fields;
};

type Fields = {
  Name: string;
  Description: string;
  Sourcecode: string;
  Docs: string;
  App: string;
  logo: string;
};
