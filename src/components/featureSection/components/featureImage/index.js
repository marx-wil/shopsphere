import { Flex, Image } from "@chakra-ui/react";
import { ManPlant } from "../../../../assets/images";

const FeatureSectionImage = () => {
    return (
        <Flex>
            <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                    ManPlant
                }
                objectFit={"cover"}
            />
        </Flex>
    )
}

export default FeatureSectionImage