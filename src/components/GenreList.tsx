import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
const GenreList = () => {
  const { data, isLoading, errors } = useGenres();
  if (errors) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root unstyled>
      {data.map((gen) => (
        <List.Item paddingY={1.5} key={gen.id}>
          <HStack>
            <Image
              boxSize={10}
              borderRadius={5}
              src={getCroppedImage(gen.image_background)}
            />
            <Text fontSize="lg">{gen.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
