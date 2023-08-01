"use client";

import { ReactNode } from "react";

import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

const Logo = (props: any) => {
  return (
    <Button as="a" href="/" variant={"link"} fontSize="xl">
      Avner&apos;s ELL Portfolio
    </Button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={10}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 0.6fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              Email:{" "}
              <Link
                href="mailto:231338M@student.hci.edu.sg"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                231338M@student.hci.edu.sg
              </Link>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Box as="a" href={"#"}>
              Literary Devices
            </Box>
            <Box as="a" href={"#"}>
              Themes
            </Box>
            <Box as="a" href={"#"}>
              Literary Analysis
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
