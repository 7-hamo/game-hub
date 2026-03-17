import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, errors } = useGenres();
  if (errors) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root unstyled>
      {data.map((genre) => (
        <List.Item paddingY={1.5} key={genre.id}>
          <HStack>
            <Image
              boxSize={10}
              borderRadius={5}
              src={getCroppedImage(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant={"plain"}
              whiteSpace={"normal"}
              flex={1}
              minW={0}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
