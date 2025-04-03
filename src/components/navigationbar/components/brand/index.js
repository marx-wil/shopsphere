import { LogoNoBackground } from "../../../../assets/brand";
import { Box, Image } from "@chakra-ui/react";
const BrandLogo = () => {
  return (
    <Box>
      <Image src={LogoNoBackground} alt="Logo" w={"180px"} />
    </Box>
  );
};

export default BrandLogo;
