import { Box } from "@chakra-ui/react";

import HamburgerButtonMobile from "./hamburgerButton";
import CartButtonNav from "./cartButton";
import UserButtonNav from "./userButton";

const NavActionButtons = () => {
  return (
    <Box display="flex" alignItems="center">
      <CartButtonNav />
      <UserButtonNav />
      <HamburgerButtonMobile />
    </Box>
  );
};

export default NavActionButtons;
