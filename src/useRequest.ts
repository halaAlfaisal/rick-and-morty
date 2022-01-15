import {useQuery} from "@apollo/client"
import {DocumentNode} from "graphql"

export function useCharacter(gqlQuery: DocumentNode){
  const result = useQuery<MinifiedCharacterResults>(gqlQuery);
  return result;
}

export function useDetails(gqlQuery: DocumentNode, id: string | undefined){
  const result = useQuery<{character: Charachter}>(gqlQuery, { variables: { id: id }, errorPolicy: "all" });
  return result;
}