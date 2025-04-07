import { Stack, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import FeatureSectionIcon from '../featureIcon'

const FeatureSectionDescription = () => {
    return (
        <Stack spacing={4}>
            <Text
                textTransform={"uppercase"}
                color={"white"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("#1D252C", "#397655")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
                className='poppins-regular'
            >
                Our Journey.
            </Text>
            <Heading
                className='poppins-regular'> Your garden.</Heading>
            <Text color={"gray.500"} fontSize={"lg"} 
                className='poppins-regular'>
                At ShopSphere, we believe that every plant has a story, just like
                every home. Our passion for nature and sustainability drives us to
                bring the beauty of the outdoors into your living space. From humble
                beginnings to a carefully curated collection of plants, we are
                dedicated to helping you nurture a greener, healthier life—one leaf
                at a time. Join us on this journey to grow, learn, and thrive
                together.
            </Text>
            <FeatureSectionIcon />
        </Stack>
    )
}

export default FeatureSectionDescription