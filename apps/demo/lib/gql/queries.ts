import { gql } from "graphql-request";

export const searchPosts = gql`
  query SearchPosts($searchPost: SearchPostDto!) {
    searchPosts(searchPost: $searchPost) {
      totalCount
      posts {
        id
        title
        snippet
        link
        imageUrl
      }
    }
  }
`;

export const findOnePost = gql`
  query FindOnePost($findOnePost: FindOnePostDto!) {
    findOnePost(findOnePost: $findOnePost) {
      title
      snippet
      link
      imageUrl
      id
    }
  }
`;
