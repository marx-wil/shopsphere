import { Box, IconButton } from "@chakra-ui/react";
import { FaCartShopping, FaUser, FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton); // Wrap Chakra's IconButton with motion

const NavActionButtons = () => {
  return (
    <Box display="flex" alignItems="center">
      <MotionIconButton
        aria-label="Cart"
        icon={<FaCartShopping />}
        size="md"
        mr={4}
        display={{ base: "none", lg: "flex" }}
        bg="transparent"
        color="#56B280"
        _hover={{ bg: "transparent" }}
        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }} // Elegant lift and rotate effect
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }} // Subtle shrink on click
      />
      <MotionIconButton
        aria-label="User"
        icon={<FaUser />}
        size="md"
        display={{ base: "none", lg: "flex" }}
        bg="transparent"
        color="#56B280"
        _hover={{ bg: "transparent" }}
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      />
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
      />
    </Box>
  );
};

export default NavActionButtons;
