import React from "react";
import PageTitle from "../Components/PageTitle";
import CharacterCard from "../Components/CharcterCard";
import { useCharacter } from "../useRequest";
import { GET_CHARACTERS } from "../graphql";
import { Grid } from "@mui/material";

const CharachterList: React.FC<{ characters: MinifiedCharacter[] }> = ({characters}) => (
    <Grid container spacing={1}>
      {characters.map((character) => (
        <Grid item>
          <CharacterCard
            key={character.name}
            image={character.image}
            name={character.name}
          />
        </Grid>
      ))}
    </Grid>
);
const MainPage: React.FC = () => {
  const { loading, data } = useCharacter(GET_CHARACTERS);
  console.log(data, "data");
  if (loading || !data) return <></>;

  const results = data.characters.results;
  console.log(results, "results");
  return (
    <div>
      <PageTitle title="Rick and Morty!" />
      <CharachterList characters={results} />
    </div>
  );
};

export default MainPage;
