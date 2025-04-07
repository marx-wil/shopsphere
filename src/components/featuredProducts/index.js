'use client'

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Icon,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import Slider from 'react-slick'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Featured1, Featured2, Featured3, Featured4 } from '../../assets/featured'
import { useNavigate } from 'react-router-dom'
export default function CallToActionWithCarousel() {
    const navigate = useNavigate()
    const sliderRef = useRef(null)

    const images = [
        Featured1, Featured2, Featured3, Featured4
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Container maxW={'7xl'} px={10}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        textTransform={'uppercase'}
                        color={useColorModeValue("#1D252C", "#F7F8FA")}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            className='poppins-bold'
                            backdropFilter={"blur(10px)"}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: useColorModeValue("#397655", "#397655"),
                                zIndex: -1,
                            }}>
                            Browse our
                        </Text>
                        <br />
                        <Text as={'span'} color={useColorModeValue("#1D252C", "#F7F8FA")} className='poppins-bold'>
                            endless collection.
                        </Text>
                    </Heading>
                    <Text color={'gray.500'} className='poppins-regular'>
                        Discover a curated collection of plants to brighten your home and soul, with easy shopping and expert care tips.
                    </Text>
                    <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={10}
                            bg={useColorModeValue("#56B280", "#397655")}
                            color={"#fff"}
                            className='poppins-regular'
                            onClick={() => navigate("/product-listing")}
                            _hover={{ background: "#56B280" }}>
                            Browse
                        </Button>
                    </Stack>
                </Stack>
                <Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={0}
                        color={useColorModeValue('#56B280', '#56B280')}
                    />
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'500px'}
                        overflow={'hidden'}>
                        {/* Carousel */}
                        <Slider ref={sliderRef} {...settings}>
                            {images.map((img, index) => (
                                <Box key={index} position="relative">
                                    <img
                                        src={img}
                                        alt={`Slide ${index + 1}`}
                                        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                    />
                                </Box>
                            ))}
                        </Slider>
                        {/* Controls inside image */}
                        <IconButton
                            icon={<FaAngleLeft boxSize={8} />}
                            aria-label="Previous"
                            position="absolute"
                            top="50%"
                            left="10px"
                            transform="translateY(-50%)"
                            zIndex={2}
                            bg="rgba(0, 0, 0, 0.4)"
                            color="white"
                            _hover={{ bg: 'rgba(0,0,0,0.6)' }}
                            onClick={() => sliderRef.current?.slickPrev()}
                        />
                        <IconButton
                            icon={<FaAngleRight boxSize={8} />}
                            aria-label="Next"
                            position="absolute"
                            top="50%"
                            right="10px"
                            transform="translateY(-50%)"
                            zIndex={2}
                            bg="rgba(0, 0, 0, 0.4)"
                            color="white"
                            _hover={{ bg: 'rgba(0,0,0,0.6)' }}
                            onClick={() => sliderRef.current?.slickNext()}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    )
}

const Blob = (props) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    )
}
