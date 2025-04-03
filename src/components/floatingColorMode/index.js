import { Flex, IconButton, useColorMode } from "@chakra-ui/react"; // Chakra UI components for layout and theming
import { FaMoon, FaSun } from "react-icons/fa6"; // Icons for light and dark mode
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion for animations

// Floating button component for toggling color mode with animation
const FloatingColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to manage color mode

  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.1 }} // Slightly enlarges on hover
      whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
      h={"50px"}
      w={"50px"}
      bg={"#56B280"} // Background color
      alignItems={"center"}
      justifyContent={"center"}
      position={"fixed"} // Fixed position at the bottom-right
      bottom={"10px"}
      right={"10px"}
      borderRadius={"full"} // Circular button
      boxShadow="lg" // Adds shadow for better visibility
      cursor="pointer"
      onClick={toggleColorMode} // Toggles light/dark mode
    >
      <AnimatePresence mode="wait" initial={false}>
        {/* Ensures smooth icon transition */}
        <motion.div
          key={colorMode}
          initial={{ opacity: 0, y: -10 }} // Icon fades in from above
          animate={{ opacity: 1, y: 0 }} // Moves to normal position
          exit={{ opacity: 0, y: 10 }} // Fades out downward
          transition={{ duration: 0.3 }}
        >
          <IconButton
            as={motion.button}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />} // Switches icon based on mode
            variant={"ghost"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            aria-label="Toggle color mode" // Accessibility label
            color={"white"}
          />
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};

export default FloatingColorMode;
