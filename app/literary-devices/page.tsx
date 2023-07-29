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
            Section 1: Literary Devices / Writer&apos;s Craft
          </Heading>
        </Stack>
      </Container>

      <Container maxW={"8xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <iframe
              src="https://drive.google.com/file/d/1p8YS9c4vorekyho6t6WHd1SobBR802wiDS4XirG4TmQ/preview"
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
            <Heading>Turning Thirteen</Heading>
            <Text color={"gray.500"} fontSize={"lg"} mb="20">
              &quot;Turning Thirteen&quot; is a poignant exploration of the
              turbulent journey from childhood to adolescence. The persona feels
              a deep sense of loss and fear as he faces the unknown future.
              However, there is also a glimmer of curiosity and freedom amidst
              the melancholy. The poem beautifully captures the conflicting
              emotions of growing up.
            </Text>
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
              I used iambic tetrameter to mimic a heartbeat, conveying the
              heart-beating journey to adolescence. Metaphors like
              &lsquo;river&rsquo; and &lsquo;thunder&rsquo; captured feeling
              overwhelmed, while personification of &lsquo;shadows dance&rsquo;
              and &lsquo;ghosts of yore&rsquo; illustrated fear which
              characterised the persona. Irony like &lsquo;bittersweet&rsquo;
              and &lsquo;mournful run&rsquo; delivered the thematic message of
              conflicting emotions about leaving childhood and entering
              adolescence. Imagery of nature like 'autumn leaves,' 'twilight,'
              and 'fickle grass' showed growing up is an unavoidable natural
              progression, creating a melancholic atmosphere. Overall, through
              these literary devices I aimed to convey the persona's perspective
              of the difficulties and anxieties of entering adolescence from
              childhood.
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
