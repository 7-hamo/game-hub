import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"}>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={5}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize={"2xl"} fontWeight={"bold"}>
          {game.name} <Emoji raing={game.rating_top}></Emoji>
        </Card.Title>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;
