import bullEye from "../assets/bulls-eye.webp";
import thumpsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";
interface Props {
  raing: number;
}
const Emoji = ({ raing }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "7" },
    4: { src: thumpsUp, alt: "recommended", boxSize: "7" },
    5: { src: bullEye, alt: "exceptional", boxSize: "10" },
  };
  return <Image {...emojiMap[raing]} marginTop={2} />;
};

export default Emoji;
