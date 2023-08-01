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

export default function Themes() {
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
              color={"green.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              My Work
            </Text>
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
              <Button colorScheme="green" size="md" maxW="200px">
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
              My narrative, &quot;My Mom, My Hero&quot;, explores the
              parent-child relationship, focusing on the theme of a
              mother&apos;s sacrificial and unconditional love. I&apos;ve used
              the setting and atmosphere, notably the rain-soaked neighbourhood,
              as a symbol of the protagonist&apos;s emotional turmoil while the
              mother&apos;s umbrella represents her protective love. Through the
              protagonist&apos;s self-absorbed teenage years to the climactic
              argument and subsequent epiphany, the plot highlights the
              evolution of the protagonist&apos;s understanding of his
              mother&apos;s sacrifices. The use of metaphor, such as the mother
              being an &apos;invisible shield&apos; and &apos;seasoned
              acrobat&apos;, underscores her strength and selflessness,
              reinforcing the theme. <b>(96 words)</b>
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
