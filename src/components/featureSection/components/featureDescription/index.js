import { Stack, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import FeatureSectionIcon from "../featureIcon";

const FeatureSectionDescription = () => {
  const headingTextColor = useColorModeValue("#1D252C", "#FAF8F7");
  const subtitleTextColor = useColorModeValue("#fff", "#fff");
  return (
    <Stack spacing={4}>
      <Text
        textTransform={"uppercase"}
        color={subtitleTextColor}
        // fontWeight={600}
        fontSize={"sm"}
        bg={useColorModeValue("#1D252C", "#397655")}
        p={2}
        alignSelf={"flex-start"}
        rounded={"md"}
        className="poppins-bold"
      >
        Grow Your Green Thumb Our Journey.
      </Text>
      <Heading
        lineHeight={1.1}
        fontWeight={800}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        width={"fit-content"}
        textTransform={"uppercase"}
        color={headingTextColor}
        backdropFilter={"blur(2px)"}
        as={"span"}
        position={"relative"}
        className="poppins-bold"
        _after={{
          content: "''",
          width: "full",
          height: "30%",
          position: "absolute",
          bottom: 1,
          left: 0,
          bg: useColorModeValue("#397655", "#397655"),
          zIndex: -1,
        }}
      >
        {" "}
        Your garden.
      </Heading>
      <Text
        color={useColorModeValue("#1D252C", "#FAF8F7")}
        fontSize={"lg"}
        className="poppins-regular"
        opacity={0.8}
        
      >
        At ShopSphere, we believe that every plant has a story, just like every
        home. Our passion for nature and sustainability drives us to bring the
        beauty of the outdoors into your living space. From humble beginnings to
        a carefully curated collection of plants, we are dedicated to helping
        you nurture a greener, healthier life—one leaf at a time. Join us on
        this journey to grow, learn, and thrive together.
      </Text>
      <FeatureSectionIcon />
    </Stack>
  );
};

export default FeatureSectionDescription;
