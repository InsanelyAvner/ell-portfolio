import Head from "next/head";
import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

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
            Avner&apos;s
            <br />
            <div style={{ height: "10px" }} />
            <Text as={"span"} color={"green.400"}>
              ELL Portfolio
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Hello, welcome to my English Language and Literature (ELL) portfolio
            website! Here, I am thrilled to present my journey and progress in
            mastering the English language.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
