import React from "react";
import PageTitle from "../Components/PageTitle";
import CharacterCard from "../Components/CharcterCard";
import { useCharacter } from "../useRequest";
import { GET_CHARACTERS } from "../graphql";
import { Container, Grid } from "@mui/material";

const CharachterList: React.FC<{ characters: MinifiedCharacter[] }> = ({characters}) => (
  <Container maxWidth="lg">
    <Grid container spacing={1} sx={{justifyContent: "center"}}>
      {characters.map((character) => (
        <Grid item key={character.name}>
          <CharacterCard
            image={character.image}
            name={character.name}
            id={character.id}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);
const MainPage: React.FC = () => {
  const { loading, data } = useCharacter(GET_CHARACTERS);
  if (loading || !data) return <></>;
  const results = data.characters.results;

  return (
    <div>
      <PageTitle title="Rick and Morty" />
      <CharachterList characters={results} />
    </div>
  );
};

export default MainPage;
