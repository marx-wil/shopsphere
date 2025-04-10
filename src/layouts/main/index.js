import { Box, useColorMode } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationBar from "../../components/navigationbar";
import FloatingColorMode from "../../components/floatingColorMode";
import Footer from "../../components/footer";

const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    const { colorMode } = useColorMode();

    return (
      <AnimatePresence mode="wait">
        {/* Handles animations when the theme changes */}
        <motion.div
          key={colorMode} // Ensures re-animation when theme mode changes
          initial={{ opacity: 0, scale: 0.98 }} // Initial state: slightly faded and scaled down
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }} // Exit animation: slight scale-up and fade out
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ minHeight: "100vh" }} 
        >
          <Box
            bg={colorMode === "light" ? "gray.100" : "gray.900"}
            color={colorMode === "light" ? "black" : "white"}
            minH="100vh"
            transition="background 0.4s ease-in-out, color 0.4s ease-in-out"
            overflow={"hidden"}
          >
            <NavigationBar />
            <Component {...props} /> <Footer />
            <FloatingColorMode />
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  };

  return DefaultLayout; // Returns the higher-order component with layout
};

export default Layout;
