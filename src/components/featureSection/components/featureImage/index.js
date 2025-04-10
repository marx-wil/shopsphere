import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ManPlant } from "../../../../assets/images";

const MotionBox = motion(Box);

const FeatureSectionImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const beforeAfterStyle = {
    content: '""',
    position: "absolute",
    width: "8px",
    height: isHovered ? "100%" : "120px",
    bg: useColorModeValue("#1D252C", "#397655"),
    transition: "height 0.4s ease",
    roundedTopRight: "md",
    roundedBottomLeft: "lg",
  };

  return (
    <Flex justify="center" align="center">
      <Box
        width={"lg"}
        height={"lg"}
        position="relative"
        rounded="md"
        overflow="hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          "&::before": {
            ...beforeAfterStyle,
            top: 0,
            right: 0,
          },
          "&::after": {
            ...beforeAfterStyle,
            bottom: 0,
            left: 0,
          },
        }}
      >
        <MotionBox
          width="100%"
          height="100%"
          backgroundImage={`url(${ManPlant})`}
          backgroundSize="cover"
          backgroundPosition="center"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        />
      </Box>
    </Flex>
  );
};

export default FeatureSectionImage;
