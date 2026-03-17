import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, useSelectedGenre] = useState<Genre | null>(null);
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
        <GenreList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => useSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area={"main"} paddingX={10}>
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
