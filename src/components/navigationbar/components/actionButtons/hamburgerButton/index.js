import { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  VStack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBars, FaUser } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import clientRoutes from "../../../../../routes/client";
import UserButtonNav from "../userButton";
import CartButtonNav from "../cartButton";
const MotionIconButton = motion(IconButton);
const MotionBox = motion(Box);
const MotionText = motion(Text);

const HamburgerButtonMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocation = useLocation();
  const backgroundcolor = useColorModeValue("#F7F8FA", "#1D252C");
  const linkColors = useColorModeValue("#1D252C", "#F7F8FA");
  const closeButtonColor = useColorModeValue("#1D252C", "#F7F8FA");
  return (
    <>
      <MotionIconButton
        aria-label="Menu"
        icon={<FaBars />}
        size="md"
        ml={4}
        display={{ base: "flex", lg: "none" }}
        bg="transparent"
        color="#56B280"
        _hover={{ bg: "transparent" }}
        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            bg={backgroundcolor}
            backdropFilter="blur(8px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            zIndex={999}
          >
            <CloseButton
              position="absolute"
              top={6}
              right={6}
              size="lg"
              color={closeButtonColor}
              onClick={() => setIsOpen(false)}
            />
            <VStack spacing={6}>
              <Box
                height={"5px"}
                width={"100%"}
                bg={"#56B280"}
                borderRadius={"full"}
              />
              {clientRoutes.map((route) => (
                <NavLink
                  to={route.path}
                  className="poppins-regular"
                  key={route.name}
                  onClick={() => setIsOpen(false)}
                >
                  <MotionText
                    fontSize="2xl"
                    color={
                      currentLocation.pathname === route.path
                        ? "#56B280"
                        : linkColors
                    }
                    fontWeight={
                      currentLocation.pathname === route.path
                        ? "bold"
                        : "normal"
                    }
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {route.name}
                  </MotionText>
                </NavLink>
              ))}
              <Box
                height={"5px"}
                width={"100%"}
                bg={"#56B280"}
                borderRadius={"full"}
              />
              <NavLink
                to={"/"}
                className="poppins-regular"
                onClick={() => setIsOpen(false)}
              >
                <MotionText
                  fontSize="lg"
                  color={
                    currentLocation.pathname === "/login"
                      ? "#56B280"
                      : linkColors
                  }
                  fontWeight={
                    currentLocation.pathname === "/login" ? "bold" : "normal"
                  }
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  Log in / Sign Up
                </MotionText>
              </NavLink>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerButtonMobile;
