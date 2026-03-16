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
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>

      <GridItem hideBelow={"lg"} area={"aside"} paddingX={5}>
        <GenreList />
      </GridItem>

      <GridItem area={"main"} paddingX={10}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
