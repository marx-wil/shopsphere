
import {
    Container,
    SimpleGrid,
} from "@chakra-ui/react";
import FeatureSectionImage from "./components/featureImage";
import FeatureSectionDescription from "./components/featureDescription";


export default function FeaturesSection() {
    return (
        <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <FeatureSectionDescription />
                <FeatureSectionImage />
            </SimpleGrid>
        </Container>
    );
}
