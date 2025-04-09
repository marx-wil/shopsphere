import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ManPlant } from "../../../../assets/images";

const FeatureSectionImage = () => {
  return (
    <Flex>
      <Box
        width={"lg"} 
        height={"lg"}
        backgroundImage={`url(${ManPlant})`}
        backgroundSize="cover"
        backgroundPosition="center"
        rounded="md"
        position="relative"
        overflow="hidden"
        sx={{
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "8px",
            height: "120px",
            bg: useColorModeValue("#1D252C", "#397655"),
            roundedTopRight: "md",
            roundedBottomLeft: "lg",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "8px",
            height: "120px",
            bg: useColorModeValue("#1D252C", "#397655"),
            roundedTopRight: "md",
            roundedBottomLeft: "lg",
          },
        }}
      />
    </Flex>
  );
};

export default FeatureSectionImage;
