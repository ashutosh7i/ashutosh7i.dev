import React from "react";
import {
  Stack,
  Text,
  useDisclosure,
  Container,
  Button,
  Box,
  Image,
  Input,
  HStack,
  Heading,
  Textarea,
  Center,
  Modal,
Link,
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
  Flex,
} from "@chakra-ui/react";
import Seo from "../../utils/Seo";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { useState } from "react"; // Import useState

import Testimonials from "../Testimonials";

import Work from "./work.png";

export default function Experiences() {
  const borderColor = useColorModeValue("gray.300", "transparent");

  const linkedin = () => {
    window.open(
      "https://linkedin.com/in/ashutosh7i",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const github = () => {
    window.open(
      "https://github.com/ashutosh7i",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const email = () => {
    window.open(
      "mailto:i@ashutosh7i.dev?subject=[SUBJECT]Hi Ashutosh👋🏻, This is regarding.. &body=[BODY] That we approve you as spiderMan",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const WakatimeStats = () => {
    window.open(
      "https://wakatime.com/share/@Ashutosh7i/986094a5-c816-4b5a-8464-a384538297e3.svg",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const WakatimeLanguages = () => {
    window.open(
      "https://wakatime.com/share/@Ashutosh7i/00b65af3-2404-48ae-9d0e-da21decb7e25.svg",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const OtherLinks = () => {
    window.open(
      "https://ashutosh7i.github.io",
      "_blank",
      "noreferrer,noopener"
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [subject, setSubject] = useState(""); // State for subject
  const [body, setBody] = useState(""); // State for body

  const sendEmail = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const emailLink = `mailto:work@ashutosh7i.dev?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = emailLink;
  };

  const { colorMode } = useColorMode();

  return (
    <>
      <Seo />
      <Container maxW={"4xl"} id="experiences">
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
                Work
              </Text>
            ) : (
              <Text
                as="span"
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
              >
                Work
              </Text>
            )}{" "}
            Experience
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
              😃👨🏻‍💼
            </Text>
            <Box
              w="50%"
              h="px"
              bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
            />
          </Flex>
        </Stack>
        <Stack
  justifyContent={"center"}
  direction={{ base: "column", md: "row" }}
  alignItems={"center"}
  pt={"40px"}
>
  <Link href="https://wakatime.com/share/@Ashutosh7i/986094a5-c816-4b5a-8464-a384538297e3.svg" isExternal>
    <Image
      height={"200px"}
      width={"auto"}
      objectFit="contain"
      src="https://wakatime.com/share/@Ashutosh7i/986094a5-c816-4b5a-8464-a384538297e3.svg"
      border="1px"
      borderColor={borderColor}
    />
  </Link>


    <Image
      height={"200px"}
      width={"auto"}
      objectFit="contain"
      src={Work}
      border="2px"
      borderColor={borderColor}
    />


  <Link href="https://wakatime.com/share/@Ashutosh7i/00b65af3-2404-48ae-9d0e-da21decb7e25.svg" isExternal>
    <Image
      height={"200px"}
      width={"auto"}
      objectFit="contain"
      src="https://wakatime.com/share/@Ashutosh7i/00b65af3-2404-48ae-9d0e-da21decb7e25.svg"
      border="1px"
      borderColor={borderColor}
    />
  </Link>
</Stack>
        <Container alignItems={"center"} maxW={"3xl"} pt={"40px"} pb={"20px"}>
          <Box>
            <Text textAlign={"center"} fontSize={"md"}>
              <i>
                I'm a dedicated and adaptable tech enthusiast with a flair for
                <strong> Full-stack development</strong>. My passion for staying
                ahead in the tech curve, coupled with a{" "}
                <strong>proactive learning approach</strong>, equips me to
                <strong> quickly integrate into your team</strong>. With a
                proven track record of
                <strong> turning ideas into practical solutions</strong> and a
                relentless commitment to <strong>excellence</strong>,
                <br />
              </i>
            </Text>
            <Text textAlign={"center"}>
              I would be{" "}
              <strong>
                eager to contribute effectively as an intern 🚀👨‍💻.
              </strong>
              <br />
              <br />
              <i>
                I would be{" "}
                <strong>grateful for any potential opportunities</strong>.
              </i>{" "}
              Feel free to reach out to me at{" "}
              <u>
                <a href="mailto:work@ashutosh7i.dev">work@ashutosh7i.dev</a>
              </u>
              .
            </Text>
          </Box>

          <Center>
            <HStack pt={4} spacing={4}>
              <FaLinkedin onClick={linkedin} size={28} />
              <FaGithub onClick={github} size={28} />
              <FaEnvelope onClick={onOpen} size={28} />

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
                    {"work@ashutosh.dev"}{" "}
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
        </Container>

        <Testimonials />
        <Flex
          mt={{ base: "-2%", sm: "2%", md: "1%", lg: "0.5%" }}
          pt={"20px"}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="50%"
            h="1px"
            bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
          />
          <Text mx="1rem" whiteSpace="nowrap">
            😃👨🏻‍💼
          </Text>
          <Box
            w="50%"
            h="px"
            bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
          />
        </Flex>
      </Container>
    </>
  );
}
