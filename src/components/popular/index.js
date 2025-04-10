"use client";

import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import PopularProductCard from "./components/productcard";
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    description: "A bold statement plant with large, split leaves.",
    tag: "Easy Care",
    image:
      "https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133118.jpg?t=st=1744167099~exp=1744170699~hmac=e96052032d90b7812ed0c09248166ddc88571d133089fdef022a9410057c02fa&w=740",
    price: "1,200",
  },
  {
    id: 1,
    name: "Snake Plant",
    description: "Low-maintenance and perfect for low light conditions.",
    tag: "Air Purifier",
    image:
      "https://img.freepik.com/free-photo/snake-plant-beige-pot_53876-146617.jpg?t=st=1744167060~exp=1744170660~hmac=ec8a7e6a370a405cef64bcf107458e1de58c5fbfca10b6132660037af6be5749&w=740",
    price: "1,600",
  },
  {
    id: 1,
    name: "Peace Lily",
    description: "Elegant white blooms with air-cleansing properties.",
    tag: "Pet Caution",
    image:
      "https://img.freepik.com/free-photo/fresh-white-flowers-glass-piece-fabric-white-background-high-quality-photo_114579-87857.jpg?t=st=1744167137~exp=1744170737~hmac=312b62137f8d4daaf7379f78bea04c1244c774a6774e7f981286d4bd8e2cd219&w=996",
    price: 800,
  },
];
export default function PopularProducts() {
  return (
    <Box
      bg={useColorModeValue("white", "#13181D")}
      py={10}
      px={{ base: 4, md: 10 }}
    >
      <Container maxW={"7xl"} py={20} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"} px={{ base: 4, md: 16 }}>
          <Heading
            mb={5}
            textTransform={"uppercase"}
            color={useColorModeValue("#1D252C", "#F7F8FA")}
            position={"relative"}
            // color={headerTextColor}
            className="poppins-bold"
            backdropBlur={"2px"}
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            zIndex={5}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: useColorModeValue("#397655", "#1D252C"),
              zIndex: -1,
            }}
          >
            {" "}
            Green Picks Everyone's Loving
          </Heading>
          <Text
            className="poppins-regular"
            color={useColorModeValue("#1D252C", "#F7F8FA")}
          >
            Discover our most sought-after plants—beloved by discerning plant
            enthusiasts for their elegance, resilience, and ability to transform
            any space. Each one is chosen for its exceptional quality and
            enduring beauty, making it a timeless addition to your collection.
          </Text>
        </Stack>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {" "}
          {products.map((product,key) => (
            <PopularProductCard
              key={key}
              productImage={product.image}
              productTitle={product.name}
              productDescription={product.description}
              price={product.price}
            />
          ))}{" "}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
