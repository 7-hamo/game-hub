import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GamesGrid = () => {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name} </li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
