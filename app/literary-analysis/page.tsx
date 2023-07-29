"use client";
import Link from "next/link";
import RootLayout from "../layout";
import Hero from "@/components/HeroSection";
import Features from "@/components/Features";

import {
  Alert,
  AlertIcon,
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

export default function LiteraryAnalysis() {
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
            Section 3: The Literary Analysis Essay
          </Heading>
        </Stack>
      </Container>

      <Container maxW={"8xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={2}>
            <Heading>Draft LA on &quot;On Turning Ten&quot;</Heading>
            <Flex>
              <iframe
                src="https://drive.google.com/file/d/100CTGtuLiq5hDRVjdR_qwtj2QrqQhsXPC8AGT_MMat0/preview"
                width="99999999"
                height="600"
              ></iframe>
            </Flex>
          </Stack>
          <Stack spacing={2}>
            <Heading>Rewritten LA on &quot;On Turning Ten&quot;</Heading>
            <Flex>
              <iframe
                src="https://drive.google.com/file/d/1fU2vD8zgE2_jrOY2uJJs1SKDPb49bCY-axAyGH-GrCQ/preview"
                width="99999999"
                height="600"
              ></iframe>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Box pt="15px">
          <Link
            target="_blank"
            href=" https://drive.google.com/file/d/1GjqBNjJp9i56xmWBzVOy0SEU91FlITyj/view?usp=sharing"
          >
            <Button colorScheme="green" size="md" maxW="600px">
              View the poem 'On Turning Ten'
            </Button>
          </Link>
        </Box>

        <Box bg={"#F7FAFC"} mt="20" pt="30px" pb="30px" borderRadius="15">
          <Stack
            spacing={4}
            borderRadius="15"
            as={Container}
            maxW={["100%", "70%"]}
          >
            <Heading fontSize={"3xl"}>Reflection</Heading>
            <Text color={"gray.600"} fontSize={"md"}>
              In the original draft, I did not fully explain how the poem
              portrays growing up as an illness. I simply stated that the
              persona feels it is like an illness without analyzing the vivid
              imagery comparing it to measles, mumps, and chickenpox. The
              rewritten essay goes into more detail on how these metaphors
              convey that maturation is a painful, distressing process. I also
              missed the opportunity to discuss the repetition of
              &quot;something&quot; which establishes a feeling of dread. The
              new draft provides an improved analysis by looking closely at the
              metaphors, repetition, and word choice to reveal the
              persona&apos;s perspective.
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
