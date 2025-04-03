import ClientRoutes from "../../../../routes/client"; // Adjust path if needed
import { NavLink } from "react-router-dom";
import "../../../../styles/fonts/poppins.scss";
import { Text, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import Framer Motion

// Staggered fade-in effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NavigationLinks = () => {
  return (
    <Flex
      as="nav"
      align="center"
      gap={4}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {ClientRoutes.map((item) => (
        <motion.div
          key={item.name}
          variants={linkVariants}
          whileHover={{
            y: -3, // Slight lift on hover
            scale: 1.05, // Slight zoom effect
            textShadow: "0px 4px 12px rgba(255, 255, 255, 0.3)", // Glow effect
          }}
          whileTap={{ scale: 0.95 }} // Click effect
          style={{ display: "inline-flex", alignItems: "center" }} // Ensures inline display
        >
          <NavLink
            to={item.path}
            className="poppins-regular"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#56B280" : "inherit", // Active color change
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            <Box position="relative" display="inline-block">
              <Text fontSize="lg" transition="color 0.3s ease-in-out">
                {item.name}
              </Text>
              {/* Fancy animated underline for active state */}
              <motion.div
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#56B280",
                  position: "absolute",
                  bottom: "-3px",
                  left: 0,
                  scaleX: 0,
                  transformOrigin: "left",
                }}
                animate={{
                  scaleX: window.location.pathname === item.path ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </Box>
          </NavLink>
        </motion.div>
      ))}
    </Flex>
  );
};

export default NavigationLinks;
