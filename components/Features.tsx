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
} from "@chakra-ui/react"
import { ReactElement } from "react"



export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
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
            About
          </Text>
          <Heading>About Me</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Hi there! I am Avner (3) from 1A3, and welcome to my ELL Portfolio.
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            I love coding and basically most stuff that are related to IT. I hope this ELL Portfolio can effectively showcase my works.
          </Text>
          <Alert status='info'>
            <AlertIcon />
            Fun fact: I was tired of the limitations of Google Sites so I coded this website myself
          </Alert>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "/assets/img/hero.jpg"
            }
            objectFit={"cover"}
          />
        </Flex>

      </SimpleGrid>
    </Container>
  )
}