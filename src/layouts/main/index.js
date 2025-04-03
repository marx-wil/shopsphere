import { Box, Text, useColorMode } from "@chakra-ui/react"; // Chakra UI for styling and theming
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion for animations
import NavigationBar from "../../components/navigationbar"; // Navigation bar component
import FloatingColorMode from "../../components/floatingColorMode"; // Floating button to toggle theme

// Higher-order component to wrap pages with a default layout
const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    const { colorMode } = useColorMode(); // Access the current theme mode (light or dark)

    return (
      <AnimatePresence mode="wait">
        {" "}
        {/* Handles animations when the theme changes */}
        <motion.div
          key={colorMode} // Ensures re-animation when theme mode changes
          initial={{ opacity: 0, scale: 0.98 }} // Initial state: slightly faded and scaled down
          animate={{ opacity: 1, scale: 1 }} // Animation: fade in and return to normal scale
          exit={{ opacity: 0, scale: 1.02 }} // Exit animation: slight scale-up and fade out
          transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition timing
          style={{ minHeight: "100vh" }} // Ensures the animation covers the full viewport
        >
          <Box
            bg={colorMode === "light" ? "gray.100" : "gray.900"} // Background color changes with theme
            color={colorMode === "light" ? "black" : "white"} // Text color changes with theme
            minH="100vh" // Ensures the layout covers the full viewport height
            transition="background 0.4s ease-in-out, color 0.4s ease-in-out" // Smooth transition for color changes
          >
            <NavigationBar /> {/* Displays the navigation bar at the top */}
            <Component {...props} />{" "}
            {/* Renders the page component dynamically */}
            <Text>Footer here</Text> {/* Simple footer text */}
            <FloatingColorMode /> {/* Floating button to switch theme */}
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  };

  return DefaultLayout; // Returns the higher-order component with layout
};

export default Layout;
