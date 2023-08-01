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
            <Heading>Draft LA on &apos;On Turning Ten&apos;</Heading>
            <Flex>
              <iframe
                src="https://drive.google.com/file/d/100CTGtuLiq5hDRVjdR_qwtj2QrqQhsXPC8AGT_MMat0/preview"
                width="99999999"
                height="600"
              ></iframe>
            </Flex>
          </Stack>
          <Stack spacing={2}>
            <Heading>Rewritten LA on &apos;On Turning Ten&apos;</Heading>
            <Flex>
              <iframe
                src="https://drive.google.com/file/d/1fU2vD8zgE2_jrOY2uJJs1SKDPb49bCY-axAyGH-GrCQ/preview"
                width="99999999"
                height="600"
              ></iframe>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Box pt="21px">
          <Alert status="info">
            <AlertIcon />
            Analyse how the imagery in this poem presents growing up as a
            process which fills the persona with dread and sadness.
          </Alert>
        </Box>

        <Box pt="15px">
          <Link
            target="_blank"
            href=" https://drive.google.com/file/d/1GjqBNjJp9i56xmWBzVOy0SEU91FlITyj/view?usp=sharing"
          >
            <Button colorScheme="green" size="md" maxW="600px">
              View the poem &apos;On Turning Ten&apos;
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
              The rewritten essay offers a more comprehensive analysis of how
              the poem uses imagery to present the experience of growing up as a
              challenging process. By further exploring the metaphorical
              comparisons of measles, mumps, and chickenpox, I highlighted the
              painful nature of maturation. Furthermore, the rewritten draft
              addresses the missed opportunity of discussing the significance of
              the repetition of &quot;something,&quot; which conveys a sense of
              unease and apprehension. By further analyzing the word choice and
              repetition, I provided an insightful understanding of the
              persona&apos;s perspective. Overall, the rewritten essay presents
              a more detailed analysis of the poem&apos;s use of imagery.{" "}
              <b>(100 words)</b>
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
