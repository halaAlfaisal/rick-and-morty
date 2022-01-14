import {gql} from "graphql-tag";

export const GET_CHARACTERS = gql`
  {
    characters{
      results {
        image
        name
      }
    }
  }
`