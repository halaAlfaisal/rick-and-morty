import {Paper, Typography} from "@mui/material";
import React from "react";

const CharacterCard: React.FC<MinifiedCharacter> = ({name, image}) => {
  return <Paper sx={{width: 300, textAlign: "center"}} >
    <img src={image} alt={name} />
    <Typography align="center">{name}</Typography>
  </Paper>
};

export default CharacterCard;
