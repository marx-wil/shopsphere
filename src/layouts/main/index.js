import { Box, Text } from "@chakra-ui/react";
import NavigationBar from "../../components/navigationbar";
import FloatingColorMode from "../../components/floatingColorMode";

const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    return (
      <>
        <Box>
          <NavigationBar />
          {/* Your wrapped component is rendered here with all its props */}
          <Component {...props} />
          <Text>Footer here</Text>
          <FloatingColorMode />
        </Box>
      </>
    );
  };

  return DefaultLayout;
};

export default Layout;
