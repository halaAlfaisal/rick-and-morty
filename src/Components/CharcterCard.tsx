import {
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CharacterCard: React.FC<MinifiedCharacter> = ({ name, image, id }) => {
  return (
    <Link to={`Details/${id}`}>
      <ImageListItem sx={{ textAlign: "center"}}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          style={{maxHeight: "200px"}}
        />
        <ImageListItemBar
          title={name}
          position="bottom"
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            fontVariant: "small-caps",
          }}
        />
      </ImageListItem>
    </Link>
  );
};

export default CharacterCard;
