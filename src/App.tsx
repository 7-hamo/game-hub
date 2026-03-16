import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ' "nav" "main" ',
        lg: ' "nav nav" "aside main" ',
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>

      <GridItem hideBelow={"lg"} area={"aside"}>
        <GenreList />
      </GridItem>

      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
