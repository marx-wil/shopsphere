import { Flex } from "@chakra-ui/react";
import BrandLogo from "./components/brand";
import NavigationLinks from "./components/navLinks";
import NavActionButtons from "./components/actionButtons";

const NavigationBar = () => {
  return (
    <Flex
      boxShadow={"lg"}
      minWidth={"max-content"}
      justify={"space-between"}
      px={{ base: 4, md: 10 }}
      py={5}
    >
      <BrandLogo />
      <NavigationLinks />
      <NavActionButtons />
    </Flex>
  );
};

export default NavigationBar;
