"use client";
import Link from "next/link";
import RootLayout from "../layout";
import Hero from "@/components/HeroSection";
import Features from "@/components/Features";

import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  SimpleGrid,
  Image,
  Flex,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

export default function LiteraryDevices() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Section 2: Themes
          </Heading>
        </Stack>
      </Container>

      <Container maxW={"8xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            {/* <iframe
              src="https://drive.google.com/file/d/1p8YS9c4vorekyho6t6WHd1SobBR802wiDS4XirG4TmQ/preview"
              width="212121"
              height="400"
            ></iframe> */}
            <iframe
              src="https://drive.google.com/file/d/1F8GD7HyyMakLV2ig8sEV47a7TZOr11-hDXPQ8ylRVBw/preview"
              width="99999999"
              height="500"
            ></iframe>
          </Flex>
          <Stack spacing={2}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              My Work
            </Text>
            {/* <Heading>Turning Thirteen</Heading>
            <Text color={"gray.500"} fontSize={"lg"} mb="20">
              This poem centres around the loss of innocence while transitioning
              from childhood to adolescence.
            </Text> */}
            <Heading>My Mom, My Hero by Avner (rewritten)</Heading>
            <Text color={"gray.500"} fontSize={"lg"} mb="20">
              This is a short narrative which explores the complex theme of
              &quot;parent-child relationships&quot;
            </Text>
            <div></div>
            <div></div>
            <Link
              target="_blank"
              href="https://docs.google.com/document/d/1PuKrJ3uWBBBmUcKjJjE86mmqdqzt2RNBejwKij69Ur0/edit?usp=sharing"
            >
              <Button colorScheme="blue" size="md" maxW="200px">
                View Draft
              </Button>
            </Link>
          </Stack>
        </SimpleGrid>
        <Box bg={"#F7FAFC"} mt="20" pt="30px" pb="30px" borderRadius="15">
          <Stack
            spacing={4}
            borderRadius="15"
            as={Container}
            maxW={["100%", "70%"]}
          >
            <Heading fontSize={"3xl"}>Reflection</Heading>
            <Text color={"gray.600"} fontSize={"md"}>
              My narrative, &quot;My Mom, My Hero,&quot; explores the theme of
              parent-child relationships, focusing on the often-unseen
              sacrifices made by parents. I highlight the often unnoticed
              sacrifices parents make for their children through the
              protagonist&apos;s increasing awareness of his mother&apos;s
              efforts. Characterisation was crucial, with the mother&apos;s
              actions illustrating her sacrifice and the protagonist&apos;s
              changing perspective emphasizing his developing understanding. The
              theme is further developed through the narrative&apos;s conflict,
              a crucial argument that leads to an epiphany. The rain-soaked
              setting serves as a backdrop for the protagonist&apos;s
              realization, with the gloomy mood emphasizing the emotional
              intensity. The metaphor of the mother as a &quot;superhero&quot;
              emphasizes the narrative&apos;s thematic message.
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
