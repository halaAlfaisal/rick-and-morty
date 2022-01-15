import { Typography } from "@mui/material";
import React from "react";

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography variant="h2" textAlign={"center"} color={"#ebebeb"} margin={"14px"}>
    {title}
  </Typography>
);

export default PageTitle;
