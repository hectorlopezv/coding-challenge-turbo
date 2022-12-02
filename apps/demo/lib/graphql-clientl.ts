import { GraphQLClient } from "graphql-request";
export const graphqlClient = new GraphQLClient(
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  process.env.NEXT_PUBLIC_BASE_URL as string
);
