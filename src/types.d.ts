type MinifiedCharacterResults = {
  characters: {
    results: MinifiedCharacter[],
  }
}

type MinifiedCharacter = {
  name: string;
  image: string;
  id: string;
};

type Charachter = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: PhysicalLocation;
  location: PhysicalLocation;
  image: string;
  episode: Episode[];
  created: string;
};

type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
  characters: Charachter[];
};

type PhysicalLocation = {
  id: string;
  name: String;
  type: String;
  dimension: String;
  residents: Character[];
  created: String;
};
