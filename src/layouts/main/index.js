import { Box, Text } from "@chakra-ui/react";

const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    return (
      <>
        <Box>
          <Text>Navbar here</Text>
          {/* Your wrapped component is rendered here with all its props */}
          <Component {...props} />
          <Text>Footer here</Text>
        </Box>
      </>
    );
  };

  return DefaultLayout;
};

export default Layout;
