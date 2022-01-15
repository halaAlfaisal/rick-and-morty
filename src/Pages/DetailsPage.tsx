import { Avatar, AvatarGroup, Box, Card, CardContent, CardMedia, Container, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import { GET_CHARACTER_DETAILS } from "../graphql";
import { useDetails } from "../useRequest";
import Circle from "@mui/icons-material/Circle";

const darkTheme = createTheme({
  //FIXME: darkmode isn't activating
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
  const { loading, error, data } = useDetails(GET_CHARACTER_DETAILS, params.id);
  if (loading || !data)
    return (
      <Typography variant="h3" color="#ebebeb">
        ...Loading
      </Typography>
    );

  if (error) console.log(error);

  const result = data.character;
  const episodes_appearance = result.episode.length;
  const tot_residents_in_last_seen = result.location ? (result.location.residents || []).length : 0;
  const n = tot_residents_in_last_seen > 4 ? 4 : tot_residents_in_last_seen;
  const residents_of_last_location = result.location ? result.location.residents.filter((x) => x.name !== result.name).slice(0, n) : [];
  
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
          <Grid container direction="row" sx={{ justifyContent: "space-between" }}>
            <Grid item sm={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {result.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    <span style={{ marginRight: "12px" }}>
                      <Circle color={result.status === "Alive" ? "success" : "error"} sx={{ width: "10px", verticalAlign: "top" }} />
                    </span>
                    Status: {result.status} - {result.gender} - {result.species}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Appeared in {episodes_appearance} episodes
                  </Typography>
                  {result.origin && <Typography variant="subtitle1" color="text.secondary" component="div">
                    Origin {result.origin.name} type {result.origin.type}
                  </Typography>}
                  {result.location && <Typography variant="subtitle1" color="text.secondary" component="div">
                    Last seen in {result.location.name} in {result.location.dimension} dimension.
                  </Typography>}
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Residents in the last seen location:
                  </Typography>
                  <AvatarGroup total={tot_residents_in_last_seen} sx={{ justifyContent: "start" }}>
                    {residents_of_last_location.map((x) => (
                      <Avatar key={x.name} alt={x.name} src={x.image} />
                    ))}
                  </AvatarGroup>
                </CardContent>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <CardMedia component="img" sx={{ maxWidth: 450, marginInlineStart: "auto" }} image={result.image} alt={result.name} />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default DetailsPage;
