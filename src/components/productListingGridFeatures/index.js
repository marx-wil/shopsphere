"use client";

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3
        fontSize="xl"
        fontWeight="600"
        className="poppins-semibold"
        color={useColorModeValue("#1D252C", "#FAF8F7")}
      >
        {heading}
      </chakra.h3>
      <chakra.p
        className="poppins-regular"
        opacity={0.8}
        color={useColorModeValue("#1D252C", "#FAF8F7")}
      >
        {text}
      </chakra.p>
    </GridItem>
  );
};

export default function ProductListingStatGrid() {
  return (
    <Box
      maxW="100%"
      py={16}
      px={16}
      bg={useColorModeValue("#F7F8FA", "#13181D")}
    >
      <Box as={Container} maxW="7xl">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          pt={16}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2
                fontSize="3xl"
                fontWeight="700"
                className="poppins-bold"
                color={useColorModeValue("#1D252C", "#FAF8F7")}
              >
                Discover Your Next Favorite Plant
              </chakra.h2>
              <Button
                bg={useColorModeValue("#56B280", "#397655")}
                className="poppins-bold"
                color={useColorModeValue("#FAF8F7", "#FAF8F7")}
                py={6}
                px={6}
                _hover={{ bg: useColorModeValue("#397655", "#56B280") }}
              >
                Explore now
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p
                className="poppins-regular"
                color={useColorModeValue("#1D252C", "#FAF8F7")}
              >
                Browse our handpicked selection of houseplants that suit every
                lifestyle—from sun-lovers to shade-dwellers. Start building your
                indoor jungle today.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          pb={16}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          <Feature
            heading={"Fresh & Healthy Plants"}
            text={
              "Each plant is carefully packed and shipped to arrive at your doorstep healthy and thriving."
            }
          />
          <Feature
            heading={"Easy Care Guidance"}
            text={
              "Get expert care tips tailored to your plant’s needs—perfect for beginners and green thumbs alike."
            }
          />
          <Feature
            heading={"Curated Selection"}
            text={
              "We only stock the best—unique varieties and customer favorites, all in one place."
            }
          />
          <Feature
            heading={"Eco-Friendly Packaging"}
            text={
              "We use sustainable materials to deliver your plants with love and minimal environmental impact."
            }
          />
        </Grid>
      </Box>
    </Box>
  );
}
