import {
  Container,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import FeatureSectionImage from "./components/featureImage";
import FeatureSectionDescription from "./components/featureDescription";

export default function FeaturesSection() {
  return (
    <Box py={{ base: 16, md: 24 }} bg={useColorModeValue("#F7F8FA", "#0C1013")}>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <FeatureSectionDescription />
          <FeatureSectionImage />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
