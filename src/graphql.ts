import { gql } from "graphql-tag";

export const GET_CHARACTERS = gql`
  {
    characters {
      results {
        image
        name
        id
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
query GetCharacter($id: ID!){
  character(id: $id){
    name
    status
    species
    type
    gender
    origin{
      name
      type
      dimension
      residents{
        name
      }
    }
    location{
      name
      type
      dimension
      residents{
        name
        image
      }
    }
    image
    episode{
      name
      air_date
      episode
      characters{
        name
      }
    }
  }
}
`;
