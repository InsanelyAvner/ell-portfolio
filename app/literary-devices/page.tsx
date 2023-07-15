"use client";
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
              src="https://docs.google.com/document/d/e/2PACX-1vQuq-mhdBX2YBHtDnqduLagRKG0oh0PBNxvDy7uCuIg5EFDc6sxiWl3lSHJln2iYiGecwwTfGPBGEAZ/pub?embedded=true"
              width="99999999"
              height="400"
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
            <Heading>My Mom, My Hero by Avner</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              This is a short story whete the protagonist/child gradually realizes the superhero hidden in their mother's love for them, as they come to appreciate her sacrifices and selflessness. The story employs literary devices such as metaphors, personification, and imagery to convey the depth of the mother's love and the child's transformation.
            </Text>
          </Stack>
        </SimpleGrid>
        <Box bg={"#F7FAFC"} mt="20" padding="30px" borderRadius="15">
          <Stack spacing={4} borderRadius="15" as={Container} maxW={"3xl"}>
            <Heading fontSize={"3xl"}>Reflection</Heading>
            <Text color={"gray.600"} fontSize={"md"}>
            In the narrative, I utilized literary devices such as metaphors, imagery, and personification to enhance the story's depth and emotional impact. The metaphor of the mother as a 'superhero' and her love as 'invisible armour' helped to emphasize her selfless sacrifices and enduring love. This metaphor also contributed to the characterization of the mother, portraying her as a strong, resilient figure. Furthermore, the imagery of the rain and the umbrella added to the atmosphere, symbolizing cleansing and protection respectively. These elements together supported the theme of unrecognized heroism and the transformative power of understanding and appreciation.
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
