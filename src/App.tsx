import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navBar";

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

      <GridItem hideBelow={"lg"} area={"aside"} bg={"gold"}>
        aside
      </GridItem>

      <GridItem area={"main"} bg={"blue"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
