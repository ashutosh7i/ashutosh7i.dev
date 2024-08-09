/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  chakra,
  Container,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Flex,
  Box,
  Heading,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Seo from "../../utils/Seo";
import Image from "next/image";
import "./css.css";

import ProfessionalPhoto from "./professional.jpg";
import CasualPhoto from "./Casual.jpg";

import { FiInfo } from "react-icons/fi";

export default function About() {
  const { colorMode } = useColorMode();
  const scrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      id="About"
      as={Container}
      maxW="4xl"
      mt={-14}
      p={7}
      backgroundColor={useColorModeValue(
        "rgb(233, 237, 242)",
        "rgb(48, 59, 82)"
      )}
    >
      <Seo />
      <Heading
        ml={"4%"}
        mt={"1%"}
        mb={"2%"}
        fontSize={"4xl"}
        color={useColorModeValue("rgb(45, 55, 72)", "white")}
      >
        About{" "}
        {colorMode === "light" ? (
          <Text as="span" color="rgb(7, 190, 184)">
            Me
          </Text>
        ) : (
          <Text
            as="span"
            bgGradient="linear(to-br, #228be6, #15aabf)"
            bgClip="text"
          >
            Me
          </Text>
        )}
      </Heading>

      {/* <Divider mt={12} mb={12} /> */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={2}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <Box
              m={{ base: "auto", md: "50px", lg: "50px" }}
              ml={{ base: "auto", md: "10%", lg: "12%" }}
              mt={{ base: "40px" }}
              mb={{ base: "37px" }}
              display={{ base: "flex", md: "block" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <div className="myCard">
                <div className="innerCard">
                  <div className="frontSide">
                    <Box
                      bg={useColorModeValue("white", "gray.800")}
                      maxW="sm"
                      w={"189px"}
                      h={"254px"}
                      borderWidth="1px"
                      rounded="0.7rem"
                      position="relative"
                    >
                      <Image
                        height={"189px"}
                        width={"auto"}
                        src={ProfessionalPhoto}
                        alt={`Picture of test`}
                      />

                      <Box p="2">
                        <Box display="flex" alignItems="baseline"></Box>
                        <Flex
                          mt="1"
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box>
                            <Text
                              fontSize="xs"
                              fontWeight="semibold"
                              color={useColorModeValue("gray.800", "white")}
                            >
                              Aashutosh at PBD 2023
                            </Text>
                          </Box>

                          <chakra.a
                            aria-label="More about PBD 2023"
                            href={"#"}
                            display={"flex"}
                          >
                            <Icon
                              color={useColorModeValue("gray.800", "white")}
                              ml={"5px"}
                              as={FiInfo}
                              h={4}
                              w={4}
                              alignSelf={"center"}
                            />
                          </chakra.a>
                        </Flex>

                        <Flex
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box
                            fontSize="12px"
                            fontWeight={"500"}
                            color={useColorModeValue("gray.500", "gray.400")}
                          >
                            Served as Volunteering Lead.
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </div>
                  <div className="backSide">
                    <Box
                      bg={useColorModeValue("white", "gray.800")}
                      maxW="sm"
                      w={"189px"}
                      h={"254px"}
                      borderWidth="1px"
                      rounded="0.7rem"
                      shadow="lg"
                      position="relative"
                    >
                      <Image
                        height={"189px"}
                        width={"auto"}
                        src={CasualPhoto}
                        alt={`Picture of test`}
                      />

                      <Box p="2">
                        <Box display="flex" alignItems="baseline"></Box>
                        <Flex
                          mt="1"
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box>
                            <Text
                              fontSize="xs"
                              fontWeight="semibold"
                              color={useColorModeValue("gray.800", "white")}
                            >
                              Won WittyHacks 3.0 {"(2023)"}
                            </Text>
                          </Box>

                          <chakra.a
                            aria-label=" More about WittyHacks 3.0"
                            href={"#"}
                            display={"flex"}
                          >
                            <Icon
                              color={useColorModeValue("gray.800", "white")}
                              ml={"5px"}
                              as={FiInfo}
                              h={4}
                              w={4}
                              alignSelf={"center"}
                            />
                          </chakra.a>
                        </Flex>

                        <Flex
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box
                            fontSize="12px"
                            fontWeight={"500"}
                            color={useColorModeValue("gray.500", "gray.400")}
                          >
                            Stage Team Photo.
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </Box>

            <Box
              display={{ base: "none", md: "block", lg: "block" }}
              pl={{ base: "27%", md: "3%", lg: "5%" }}
              m={{ base: "0", md: "50px", lg: "50px" }}
              mt={{ base: "0", md: "-5%", lg: "1%" }}
            >
              <button
                className="MoreAboutButton"
                onClick={scrollToSkills}
                aria-label="More About Me"
              ></button>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1, lg: 1 }}>
          <Text
            ml={{ base: "", md: "-80px", lg: "-127px" }}
            color={useColorModeValue("rgb(45, 55, 72)", "rgb(212, 231, 255)")}
            fontSize="lg"
            textAlign="left"
            fontWeight="400"
            maxW="677px"
          >
            👋 Hello, My name is{" "}
            <Text as={"span"} fontSize={"xl"}>
              {" "}
              Aashutosh Soni{" "}
            </Text>{" "}
            & i am an engineering student from India 🇮🇳. <br />
            Currently in my final year pursuing Bachelor's degree in Computer
            Science and Information Technology from Acropolis Institute of
            Technology and Research, Indore.
            <br />
            <br />
            🚀 I specialize in <b>Full stack Web development</b> and have a keen
            interest in{" "}
            <i>
              <u>exploring</u>
            </i>{" "}
            new cutting-edge technologies like MERN stack and NextJs. My
            enthusiasm fuels my drive to transform ideas into reality and tackle
            challenges head-on.
            <br />
            <br />
            🌌 Beyond the tech world, I'm fascinated by Si-Fi, Space exploration
            missions, and I'm also a{" "}
            <i>
              curious <u>learner</u>
            </i>
            . In my free time, you'll find me working on{" "}
            <i>projects, experimenting with new technologies</i>, tinkering with
            electronic and <b>IoT</b> devices or hacking at Hackathons👨‍💻.
            <br />
            <br />
            📔 Currently, I'm doing DSA+Development while aiming for{" "}
            <a aria-label="link to resume" href="/resume">
              <i>
                <u>an internship</u>
              </i>
            </a>
            , and I'm excitedly learning <b>AI & ML</b>.
            <br />
            <br />
            <a href="/contact">
              <i href="/contact">
                <b href="/contact">
                  <u
                    // href="/contact"
                    onClick={scrollToSkills}
                  >
                    Get in Touch!
                  </u>
                </b>
              </i>
            </a>
          </Text>
          <Box
            display={{ base: "block", md: "none", lg: "none" }}
            pl={{ base: "27%", md: "3%", lg: "5%" }}
            m={{ base: "0", md: "50px", lg: "50px" }}
            mt={{ base: "5%", md: "-5%", lg: "1%" }}
          >
            <button
              aria-label="More About Me"
              className="MoreAboutButton"
              // onClick={() => {
              //   setTimeout(() => {
              //     window.location.href = '/about';
              //   }, 700); // Delay to show complete animaion on click
              // }}
              onClick={scrollToSkills}
            ></button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
