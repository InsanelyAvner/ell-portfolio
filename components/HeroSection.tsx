import Head from "next/head"
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from "@chakra-ui/react"

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

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
            Avner&apos;s<br />
            <Text as={"span"} color={"green.400"}>
              ELL Portfolio
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Just a minimalist website showcasing my creative works. My hope is that this site will effectively display my work in a useful manner. I strive to design the site well so that it best represents my work.
          </Text>
        </Stack>
      </Container>
    </>
  )
}