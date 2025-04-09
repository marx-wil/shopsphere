import {
    ProductListingHeroImg,
    MainHeroImage,
} from "../../assets/hero/index";
import {
    Flex,
    Stack,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";


const Blob = (props) => {

    return (
        <Icon
            width={"100%"}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};
const ProductListingHero = () => {
    const overlayBg = useColorModeValue(
        "rgba(247, 248, 250,.4)",
        "rgba(39, 39, 39,.5)"
    );
    const headerTextColor = useColorModeValue("#1D252C", "#F7F8FA");
    const subHeaderTextColor = useColorModeValue("#1D252C", "#F7F8FA");
    const blobBackgroundColor = useColorModeValue("#397655", "#1D252C");
    const textUnderlineColor = useColorModeValue("#397655", "#1D252C");
    const ctaButtonBgColor = useColorModeValue("#397655", "#1D252C");
    return (
        <Flex
            w={"full"}
            backgroundImage={ProductListingHeroImg}
            bgSize={"cover"}
            bgPosition={"center center"}
            backdropFilter={"blur(10px)"}
            minHeight={"85vh"}
        >
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
                backdropFilter={"blur(2px)"}
                px={{ base: 5, md: 10 }}
                background={overlayBg}
                width={"100%"}
                overflow={"hidden"}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text
                            as={"span"}
                            position={"relative"}
                            color={headerTextColor}
                            className="poppins-bold"
                            textTransform={"uppercase"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: textUnderlineColor,
                                zIndex: -1,
                            }}
                        >
                            Grow Your Green Thumb
                        </Text>
                        <br />
                        <Text
                            as={"span"}
                            color={headerTextColor}
                            className="poppins-bold"
                            textTransform={"uppercase"}
                        >
                            with ShopSphere
                        </Text>
                    </Heading>
                    <Text color={subHeaderTextColor} className={"poppins-regular"}>
                        Bringing nature to your doorstep. Discover a curated collection of
                        plants to brighten your home and soul, with easy shopping and expert
                        care tips.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Button
                            rounded={"full"}
                            size={"lg"}
                            fontWeight={"normal"}
                            px={8}
                            bg={ctaButtonBgColor}
                            _hover={{ background: "#56B280" }}
                            className="poppins-regular"
                            color={"#fff"}
                        >
                            Browse
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Blob
                        w={"150%"}
                        h={"150%"}
                        position={"absolute"}
                        top={"-20%"}
                        left={0}
                        zIndex={0}
                        color={blobBackgroundColor}
                    />
                    <Box
                        position={"relative"}
                        height={"300px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"full"}
                        overflow={"hidden"}
                    >
                        {/* <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              icon={<PlayIcon w={12} h={12} />}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"} */}
                        {/* /> */}
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={MainHeroImage}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Flex>
    );
};

export default ProductListingHero;
