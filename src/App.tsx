import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ' "nav" "main" ',
        lg: ' "nav nav" "aside main" ',
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
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
