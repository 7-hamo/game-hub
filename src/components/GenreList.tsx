import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";
const GenreList = () => {
  const { data } = useGenres();
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
