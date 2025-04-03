import { Flex, Box } from "@chakra-ui/react";
import BrandLogo from "./components/brand";
import NavigationLinks from "./components/navLinks";

const NavigationBar = () => {
  return (
    <Flex
      boxShadow={"lg"}
      minWidth={"max-content"}
      justify={"space-between"}
      px={10}
      py={5}
    >
      <BrandLogo />
      <NavigationLinks />
      <Box display="flex" alignItems="center">
        login
      </Box>
    </Flex>
  );
};

export default NavigationBar;
