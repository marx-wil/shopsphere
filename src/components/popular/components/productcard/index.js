"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCartPlus, FaArrowRight } from "react-icons/fa6";
const MotionBox = motion(Box);
export default function PopularProductCard({
  productImage,
  productTitle,
  productDescription,
  productSlug = "#",
  price,
}) {
  return (
    <Center py={6}>
      <MotionBox
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
      >
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("#F7F8FA", "#1D252C")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          transition="all 0.3s ease"
          _hover={{ boxShadow: "lg" }}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${productImage})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={productImage}
              alt={productTitle}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              fontWeight={700}
            >
              {productTitle}
            </Text>
            <Heading
              color={useColorModeValue("#1D252C", "#FAF8F7")}
              fontSize={"lg"}
              className="poppins-regular"
              fontWeight={700}
              mb={4}
            >
              {productDescription}
            </Heading>
            <Flex w={"full"} justify={"center"}>
              <Text
                color={useColorModeValue("#56B280", "#397655")}
                fontWeight={700}
                className="poppins-regular"
                fontSize={"xl"}
              >
                $ {price + ".00"}
              </Text>
            </Flex>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              align={"flex-end"}
            >
              <Flex gap={4}>
                <Button
                  rounded={"xl"}
                  py={5}
                  size={"sm"}
                  fontWeight={"normal"}
                  px={4}
                  bg={useColorModeValue("#56B280", "#397655")}
                  _hover={{ background: "#56B280" }}
                  className="poppins-regular"
                  color={"#fff"}
                >
                  <IconButton
                    icon={<FaArrowRight />}
                    color={useColorModeValue("#fff", "#1")}
                    size={"xs"}
                    variant={"ghost"}
                    _hover={{ background: "transparent" }}
                  />{" "}
                  Read more
                </Button>
                <Button
                  rounded={"xl"}
                  py={5}
                  size={"sm"}
                  px={4}
                  fontWeight={"normal"}
                  bg={useColorModeValue("#56B280", "#397655")}
                  _hover={{ background: "#56B280" }}
                  className="poppins-regular"
                  color={"#fff"}
                >
                  <IconButton
                    icon={<FaCartPlus />}
                    color={useColorModeValue("#fff", "#fff")}
                    size={"xs"}
                    variant={"ghost"}
                    _hover={{ background: "transparent" }}
                  />{" "}
                  Add to cart
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </MotionBox>
    </Center>
  );
}
