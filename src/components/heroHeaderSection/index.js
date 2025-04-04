import { MainHeroImage } from "../../assets/hero/index";
import { Flex, Box } from "@chakra-ui/react";
const HeroHeaderSection = () => {
  return (
    <Flex
      w={"full"}
      height={"85vh"}
      backgroundImage={MainHeroImage}
      bgSize={"cover"}
      bgPosition={"center center"}
    >
      <Flex
        w={"full"}
        h={"full"}
        bgGradient={"linear(to-t, blackAlpha.600, transparent)"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box></Box>
      </Flex>
    </Flex>
  );
};

export default HeroHeaderSection;
