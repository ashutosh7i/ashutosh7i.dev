/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Stack,
  Text,
  Container,
  Button,
  Box,
  Input,
  HStack,
  Heading,
  Textarea,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Seo from "../../utils/Seo";

import { useState } from "react"; // Import useState
import BlogSlider from "../../utils/BlogSlider";
import myGif from "./giphy.gif";

export default function Contact({ color }) {
  const linkedin = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://linkedin.com/in/ashutosh7i",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };

  const github = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://github.com/ashutosh7i",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };
  const instagram = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://instagram.com/ashutosh_7i",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };
  const blog = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://blog.ashutosh7i.dev",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };
  const twitter = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://twitter.com/ashutosh7i",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };
  const email = () => {
    if (typeof window !== "undefined") {
      window.open(
        "mailto:work@ashutosh7i.dev?subject=[SUBJECT]Hi Ashutosh👋🏻, This is regarding.. &body=[BODY] That we approve you as spiderMan",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };
  const OtherLinks = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://ashutosh7i.github.io",
        "_blank",
        "noreferrer,noopener"
      );
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [subject, setSubject] = useState(""); // State for subject
  const [body, setBody] = useState(""); // State for body

  const sendEmail = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const emailLink = `mailto:i@ashutosh7i.dev?subject=${encodedSubject}&body=${encodedBody}`;
    if (typeof window !== "undefined") {
      window.location.href = emailLink;
    }
  };

  const { colorMode } = useColorMode();

  return (
    <>
      <Seo />
      <Container w="100%" maxW={"3xl"} id="contact">
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
                  Let's
                </Text>
              ) : (
                <Text
                  as="span"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  bgClip="text"
                >
                  Let's
                </Text>
              )}{" "}
              Connect 🤝
              {colorMode === "light" ? (
                <Text as="span" color="rgb(7, 190, 184)"></Text>
              ) : (
                <Text
                  as="span"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  bgClip="text"
                ></Text>
              )}
            </Heading>

            {/* <Flex
              mt={{ base: '-2%', sm: '2%', md: '1%', lg: '0.5%' }}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                w="50%"
                h="1px"
                bg={useColorModeValue('rgb(26, 32, 44)', 'rgb(233, 237, 242)')}
              />
              <Text mx="1rem" whiteSpace="nowrap">
                Things i Did !
              </Text>
              <Box
                w="50%"
                h="px"
                bg={useColorModeValue('rgb(26, 32, 44)', 'rgb(233, 237, 242)')}
              />
            </Flex> */}
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            w="100%"
            maxW={"3xl"}
            textAlign={"center"}
          >
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Box align="center">
              <Box maxWidth="50%">
                <Image src={myGif} alt="Rocket-Gif"></Image>
              </Box>
            </Box>

            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {"we will go to mars together👨🏻‍🚀🚀😂"}
            </Text>

            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={onOpen} size={28} />
                <FaInstagram onClick={instagram} size={28} />
                <FaTwitterSquare onClick={twitter} size={28} />

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Compose Email</ModalHeader>

                    <Text
                      color={`teal.400`}
                      fontWeight={600}
                      fontSize={"lg"}
                      px={4}
                      onClick={email}
                      align={"center"}
                    >
                      {"work@ashutosh7i.dev"}{" "}
                    </Text>
                    <ModalCloseButton />

                    <ModalBody>
                      <FormControl>
                        <FormLabel>Subject</FormLabel>
                        <Input
                          placeholder="Hi Ashutosh👋🏻, This is regarding.."
                          type="text"
                          value={subject} // Bind value to the subject state
                          onChange={(e) => setSubject(e.target.value)} // Update subject state on input change
                        />
                      </FormControl>
                      <FormControl>
                        <br />
                        <FormLabel>Body</FormLabel>

                        <Textarea
                          placeholder="That we approve you as spiderMan🕸️"
                          resize="vertical"
                          value={body} // Bind value to the body state
                          onChange={(e) => setBody(e.target.value)} // Update body state on input change
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="red" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button colorScheme={`teal`} onClick={sendEmail}>
                        Send
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </HStack>
            </Center>
            <Text color={`teal.500`} fontWeight={600} fontSize={"lg"} px={4}>
              <Button
                rounded={"full"}
                variant="outline"
                colorScheme={"pink"}
                size={"sm"}
                onClick={OtherLinks}
              >
                👨🏻‍🦱Other Links🚀
              </Button>
            </Text>

            <Text color={`teal.500`} fontWeight={600} fontSize={"lg"} px={4}>
              <Button
                rounded={"full"}
                variant="outline"
                colorScheme={"blue "}
                size={"sm"}
                onClick={blog}
              >
                ✍🏻My Blog👨🏻‍💻
              </Button>
            </Text>
          </Stack>
        </Stack>
      </Container>
      <BlogSlider />
    </>
  );
}
