"use client";
import {
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Image,
  Heading,
  Flex,
  useColorMode,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import Seo from "../../utils/Seo";

import customProjects from "../../data/projects/customProjects.json";

export default function Projects() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Seo />
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 20 }}
        >
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 0, md: 0 }}
          >
            <Heading
              mt={"10%"}
              mb={"-6%"}
              fontSize={"4xl"}
              color={useColorModeValue("rgb(45, 55, 72)", "white")}
            >
              {colorMode === "light" ? (
                <Text as="span" color="rgb(7, 190, 184)">
                  P
                </Text>
              ) : (
                <Text
                  as="span"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  bgClip="text"
                >
                  P
                </Text>
              )}
              roject
              {colorMode === "light" ? (
                <Text as="span" color="rgb(7, 190, 184)">
                  s
                </Text>
              ) : (
                <Text
                  as="span"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  bgClip="text"
                >
                  s
                </Text>
              )}
            </Heading>

            <Flex
              mt={{ base: "-2%", sm: "2%", md: "1%", lg: "0.5%" }}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                w="50%"
                h="1px"
                bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
              />
              <Text mx="1rem" whiteSpace="nowrap">
                Things i Made!
              </Text>
              <Box
                w="50%"
                h="px"
                bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
              />
            </Flex>
          </Stack>
          <Stack px={4} spacing={4}>
            {customProjects.map((project) => (
              <Fade key={project} tada>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} alt="" />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.name} href={button.url}>
                            <Button color={`teal.400`}>{button.name}</Button>
                          </a>
                        ))}
                      </HStack>

                      {/* Fix the badge overflow here */}
                      <Wrap pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <WrapItem key={badge.name}>
                            <Badge colorScheme={badge.color}>
                              {badge.name}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          <Text  mx="1rem" px={4}>
            More Projects 
            <br/>
            
            <Button   colorScheme={`teal`} onClick={() => window.location.href="/projects"}>
  Here👉
</Button><br/>
(PS: i made a special component for this page! 😄)
            <br/>
            {"{projects come directly from my Github, check it out!}"}
            
            </Text>
          
        </Stack>
      </Container>
    </>
  );
}
