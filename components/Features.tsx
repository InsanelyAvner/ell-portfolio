import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { IoMailOutline, IoPersonCircleOutline } from "react-icons/io5";

import { FaGraduationCap, FaHashtag } from "react-icons/fa";

import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
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
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} pb={12} pt={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"green.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About
          </Text>
          <Heading>Hello, I'm Avner</Heading>
          <Text color={"gray.500"}>
            Leveraging my passion for coding, I have built this website from
            scratch to showcase my pursuit of originality and creativity. The
            design of this website is timeless and multifaceted, just like
            English Language &amp; Literature.
          </Text>
          <Stack
            spacing={4}
            pt={3}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon
                  as={IoPersonCircleOutline}
                  color={"yellow.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Name: Avner Keinan Anugerah"}
            />
            <Feature
              icon={<Icon as={FaHashtag} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Index Number: 3"}
            />
            <Feature
              icon={
                <Icon as={FaGraduationCap} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Class: 1A3"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/img/hero.jpg"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
