import {Paper, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const CharacterCard: React.FC<MinifiedCharacter> = ({name, image, id}) => {
  return  <Link to={`Details/${id}`}>
  <Paper sx={{width: 300, textAlign: "center"}} >
    <img src={image} alt={name} />
    <Typography align="center">{name}</Typography>
  </Paper>
  </Link>
};

export default CharacterCard;
