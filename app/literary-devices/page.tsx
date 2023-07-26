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
            <Heading>Turning Thirteen</Heading>
            <Text color={"gray.500"} fontSize={"lg"} mb="20">
              This poem centres around the loss of innocence while transitioning
              from childhood to adolescence.
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
              In &quot;Turning Thirteen&quot;, I used metaphors and imagery as
              primary literary devices. The metaphor of &quot;a wilted
              rose&quot; represents the speaker&lsquo;s fading youth, while the
              imagery of &quot;autumn&lsquo;s leaves&quot; and &quot;shadows
              dance&quot; portray the melancholic atmosphere and setting. This
              metaphor and imagery contribute to characterisation, displaying
              the speaker&lsquo;s apprehension towards growing up. The thematic
              message, the inevitable passage of time and loss of innocence, is
              enhanced by the metaphor of &quot;Time&lsquo;s river&quot;. The
              setting is a symbolic &quot;twilight&quot;, transitioning from day
              to night, mirroring the speaker&lsquo;s transition into
              adolescence.
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
