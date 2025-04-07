"use client";

import {
    Box,
    Heading,
    Text,
    Stack,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";

import TestimonialAvatar from "./components/testimonialAvatar";

import TestimonialContent from "./components/testimonialContent";
import TestimonialHeading from "./components/testimonialHeading";
import TestimonialText from "./components/testimonialText";
import Testimonial from "./components/testimonial";
import { JianneMiguelAvatar, LeoMihoAvatar, RockwellSouthAvatar } from "../../assets/testimoniesavatar";

export default function TestimonialSection() {
    return (
        <Box
            bg={useColorModeValue("white", "#13181D")}
            py={10}
            px={{ base: 4, md: 10 }}
        >
            <Container maxW={"7xl"} py={20} as={Stack} spacing={12}>
                <Stack spacing={0} align={"center"} px={{ base: 4, md: 16 }}>
                    <Heading
                        mb={5}
                        className="poppins-regular"
                        textTransform={"uppercase"}
                        color={useColorModeValue("#1D252C", "#F7F8FA")}
                    >
                        {" "}
                        What our client says?
                    </Heading>
                    <Text
                        className="poppins-regular"
                        color={useColorModeValue("#1D252C", "#F7F8FA")}
                    >
                        See what our happy customers are saying about how our plants have
                        transformed their homes and brought nature closer to them. From
                        vibrant indoor greenery to garden-ready beauties, our plants are
                        growing smiles everywhere!
                    </Text>
                </Stack>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>
                                A perfect addition to any space.
                            </TestimonialHeading>
                            <TestimonialText>
                                I’ve been using ShopSphere for all my clients’ plant needs, and
                                I couldn’t be more impressed. The selection is curated with
                                quality in mind, and the plants always arrive looking vibrant
                                and healthy. I love how the website makes plant shopping so easy
                                for both novices and experts alike. It's now my go-to for adding
                                that perfect green touch to any interior.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={LeoMihoAvatar}
                            name={"Leo Miho"}
                            title={"Interior Designer at XYZ Firm"}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Intuitive Design</TestimonialHeading>
                            <TestimonialText>
                                I’m not the best at taking care of plants, but ShopSphere made
                                it so easy to get started. The care tips they provide with every
                                plant purchase have been a game-changer. I now have a thriving
                                garden in my living room, and the customer service team is
                                always there to help with any questions. Highly recommend to
                                anyone wanting to add a little greenery to their life!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={JianneMiguelAvatar}
                            name={"Jianna Miguel"}
                            title={"CEO at CCC Interior Design Co."}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                            <TestimonialText>
                                As someone who spends long hours in front of a computer, I
                                wanted to make my workspace more inviting. ShopSphere’s
                                collection of plants is not only aesthetically beautiful, but
                                their tips on plant care and placement have helped me create a
                                calming environment. Every plant I’ve ordered has been exactly
                                what I hoped for and more!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={RockwellSouthAvatar}
                            name={"Rockwell South"}
                            title={"Interior Designer at Designterior Co."}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    );
}
