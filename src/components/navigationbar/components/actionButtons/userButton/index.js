import { IconButton } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton); // Wrap Chakra's IconButton with motion

const UserButtonNav = () => {
  return (
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
  );
};

export default UserButtonNav;
