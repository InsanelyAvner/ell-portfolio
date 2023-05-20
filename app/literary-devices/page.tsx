"use client"
import RootLayout from "../layout"
import Hero from "@/components/HeroSection"
import Features from "@/components/Features"

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
} from "@chakra-ui/react"

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


      <Container maxW={'8xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vSXSwr8cky7CYQNPoOYi32ffM7olmGDHGxSjdNpk2R64oy3aCSuLfu1jDtskg70JTUjpx4GMdk55pjI/pub?embedded=true" width="99999999" height="400"></iframe>
        </Flex>
        <Stack spacing={2}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            My Work
          </Text>
          <Heading>Essay Title</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Short description of essay. Remember to change the iframe link!
          </Text>
        </Stack>
        
      </SimpleGrid>
    </Container>
      
    </>
  )
}