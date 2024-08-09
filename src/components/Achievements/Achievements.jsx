"use client";
import {
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  Center,
  Heading,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import Seo from "../../utils/Seo";
import { MdArrowOutward } from "react-icons/md";

// Replace 'achievements' with the provided JSON data
import achievements from "../../data/achievements/achievements.json";

export default function Achievements() {
  const color = "teal";
  const [selected, setSelected] = useState("");

  const { colorMode } = useColorMode();

  const uniqueTypes = [
    ...new Set(achievements.map((achievement) => achievement.type)),
  ];

  useEffect(() => {
    if (achievements.length > 0) {
      setSelected(achievements[0].type);
    }
    if (uniqueTypes.length > 1) {
      setSelected(uniqueTypes[1]);
    }
  }, []);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Seo />
      <Container w="100%" maxW={"4xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 10, md: 10 }}
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
                  A
                </Text>
              ) : (
                <Text
                  as="span"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  bgClip="text"
                >
                  A
                </Text>
              )}
              chievement
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
                Things i am proud of 🥳!
              </Text>
              <Box
                w="50%"
                h="px"
                bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
              />
            </Flex>
          </Stack>

          <Center px={4}>
            <Wrap spacing={2}>
              {uniqueTypes.map((type, index) => (
                <WrapItem key={index}>
                  <Button
                  aria-label=" achievements type"
                    colorScheme={selected === type ? `${color}` : "gray"}
                    onClick={() => handleSelected(type)}
                  >
                    {type}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Center>
          <Stack px={4} spacing={4}>
            {achievements
              .filter((achievement) => achievement.type === selected)
              .map((achievement) => (
                <Fade key={achievement} headshake>
                  <Card key={achievement.title} size="sm">
                    <CardHeader>
                      {achievement.image && (
                        <Image
                          mb={3}
                          objectFit="fit"
                          height="auto"
                          src={achievement.image}
                          alt="achievement image"
                        />
                      )}
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image
                            loading="eager"
                            src={achievement.logo}
                            h={50}
                            alt="achievement logo"
                          />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{achievement.title}</Text>
                            <Text>{achievement.role}</Text>
                          </Box>
                        </HStack>

                        <Text px={2} fontWeight={300}>
                          {achievement.date.from} - {achievement.date.to}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {achievement.points.map((point, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {point}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>

                    <CardFooter
                      justify="space-between"
                      flexWrap="wrap"
                      sx={{
                        "& > button": {
                          minW: "136px",
                        },
                      }}
                    >
                      <Wrap spacing={2}>
                        {achievement.badges.map((badge) => (
                          <WrapItem key={badge.content}>
                            <Badge colorScheme={badge.color}>
                              {badge.content}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>

                      {achievement.link ? (
                        <Box
                          onClick={() => {
                            if (typeof window !== "undefined") {
                              window.open(achievement.link, "_blank");
                            }
                          }}
                          colorScheme="link"
                          variant="outline"
                        >
                          <Flex alignItems="center" pt={-14} pr={2}>
                            <Text fontSize={18} fontWeight={400}>
                              Learn more
                            </Text>
                            <MdArrowOutward fontSize={25} />
                          </Flex>
                          {colorMode === "light" ? (
                            <Box w="100%" h="2px" bg="#09bfb9" />
                          ) : (
                            <Box w="100%" h="2px" bg={color} />
                          )}
                        </Box>
                      ) : null}
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
