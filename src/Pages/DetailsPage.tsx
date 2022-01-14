import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import { GET_CHARACTER_DETAILS } from "../graphql";
import { useDetails } from "../useRequest";
import Circle from "@mui/icons-material/Circle";

const darkTheme = createTheme({
  //FIXME: check why darkmode isn't activating
  palette: {
    mode: "dark",
    background: {
      default: "#142024",
    },
    primary: {
      main: "#477385",
    },
    secondary: {
      main: "#8BCF21",
    },
  },
});
const DetailsPage: React.FC = () => {
  const params = useParams();
  const { loading, data } = useDetails(GET_CHARACTER_DETAILS, params.id);
  console.log(data, "data");
  if (loading || !data) return <></>;

  const result = data.character;

  const episodes_appearance = result.episode.length;
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="lg">
        <PageTitle title={`Intel on ${result.name}`} />
        <Card
          sx={{
            display: "flex",
            marginTop: "1em",
          }}
        >
          <Grid container direction="row" sx={{justifyContent: "space-between"}}>
            <Grid item sm={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {result.name}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <span><Circle color="success"/></span>
                    Status: {result.status}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                   Gender: {result.gender}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Species: {result.species}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                   Appeared in {episodes_appearance} episodes
                  </Typography>

                </CardContent>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <CardMedia
                component="img"
                sx={{ maxWidth: 450, marginInlineStart: "auto" }}
                image={result.image}
                alt={result.name}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
      {/* <Container maxWidth="lg">
        <Grid container direction={"row"}>
          <Grid item>
            <Typography variant="h2">{results.name}</Typography>
          </Grid>
          <Grid item sx={{ justifyContent: "space-between" }}>
            seen with
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item sm={6} style={{ paddingRight: "3em" }}>
            <CardMedia
              component="img"
              alt={results.name}
              image={results.image}
            />
          </Grid>
          <Grid item sm={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
            >
              <Grid item sm={6}>
                <Typography variant="h4">Description</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container> */}
    </ThemeProvider>
  );
};

export default DetailsPage;
