import {useQuery} from "@apollo/client"
import {DocumentNode} from "graphql"

export function useCharacter(gqlQuery: DocumentNode){
  const result = useQuery<MinifiedCharacterResults>(gqlQuery);
  console.log(result)
  return result;
}