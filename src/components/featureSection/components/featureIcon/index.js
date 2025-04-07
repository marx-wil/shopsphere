"use client";

import {
    Flex,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    IoLogoBitcoin,
    IoSearchSharp,
} from "react-icons/io5";
import { FaHandHoldingHeart, FaLeaf, FaShip } from "react-icons/fa6";
const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={"row"} align={"center"}>
            <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}
                className='poppins-regular'>{text}</Text>
        </Stack>
    );
};
const FeatureSectionIcon = () => {
    return (
        <Stack
            spacing={4}
            divider={
                <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                />
            }
        >
            <Feature
                icon={<Icon as={FaLeaf} color={"#E16A67"} w={5} h={5} />}
                iconBg={useColorModeValue("#964644", "#964644")}
                text={"Curated Plants"}
            />
            <Feature
                icon={<Icon as={FaHandHoldingHeart} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Expert Care"}
            />
            <Feature
                icon={<Icon as={FaShip} color={"#E5CFAA"} w={5} h={5} />}
                iconBg={useColorModeValue("#988A71", "#988A71")}
                text={"Sustainable Shipping"}
            />
        </Stack>
    )
};


export default FeatureSectionIcon