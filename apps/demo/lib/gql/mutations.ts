import { gql } from "graphql-request";

export const createPost = gql`
  mutation CreatePost($createPost: PostCreateDTO!) {
    createPost(createPost: $createPost) {
      updatedAt
      title
      snippet
      link
      imageUrl
      id
      createAt
    }
  }
`;
