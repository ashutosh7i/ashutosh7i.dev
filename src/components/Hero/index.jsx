import * as React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
//additional css for fonts
import "./assets/customFonts/font.css";
//css for Explore button
import "./exploreButton.css";
//text typing transition
import TextTransition, { presets } from "react-text-transition";
//Chakra Imports
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  useColorMode,
  Flex,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
//heroImage component
import Star from "./star/star.jsx";
import HeroImage from "./HeroImage";
import heroTexts from "../../data/hero/heroTexts.json"
import Seo from "../../utils/Seo/index.jsx";

import { useNavigate } from "react-router-dom"; // Add this import
const Hero = () => {
  //typed texts
  const TEXTS = heroTexts

  const [index, setIndex] = React.useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const { colorMode } = useColorMode();

  // Calculate background color values based on color mode
  const backgroundColorLight = useColorModeValue(
    "rgb(8, 228, 221)",
    "rgb(8, 228, 221)"
  );
  const backgroundColorDark = useColorModeValue(
    "rgb(21, 147, 234)",
    "rgb(21, 147, 234)"
  );

  const dynamicCss = {
    backgroundColor: isHovered ? backgroundColorLight : backgroundColorDark,
    transitionDuration: "0.5s",
    // Add other styles here
  };

  function colorTransition() {
    if (colorMode === "light" && isHovered) {
      return "black";
    } else if (colorMode === "light" && !isHovered) {
      return "white";
    }

    if (colorMode === "dark" && isHovered) {
      return "black";
    } else if (colorMode === "dark" && !isHovered) {
      return "white";
    }
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const lightBackgroundColor = useColorModeValue("white", "gray.800");
  const darkBackgroundColor = useColorModeValue("white", "gray.800");
  return (<>
  <Seo/>
    <Container id="Hero" maxW="4xl" px={{ base: 6, md: 3 }} py={150}>
      <Stack direction={{ base: "column-reverse", md: "row" }}>
        <Stack direction="column" spacing={6} maxW="500px">
          <HStack
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
          >
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Text
                fontSize={"17px"}
                fontFamily={"Edu SA Beginner"}
                pl={2}
                lineHeight={1}
              >
                💡Have an Idea?
              </Text>
            </HStack>
            <Link
              // as={RouterLink} // Use RouterLink from react-router-dom
              // to="/work" // Specify the target route
              onClick={(e) => scrollToContact(e)}
              py={1}
              px={2}
              lineHeight={1}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
            >
              <Text fontSize={"17px"} fontFamily={"Edu SA Beginner"}>
                Let's Chat☕
              </Text>
            </Link>
          </HStack>

          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Hi👋,
            <br />I am
            <chakra.span
              color={useColorModeValue("rgb(7, 190, 184)", "rgb(7, 190, 184)")}
            >
              {" "}
              Aashutosh{" "}
            </chakra.span>
          </chakra.h1>

          <Text
            color={"gray.870"}
            fontSize="22"
            textAlign="left"
            lineHeight="1.375"
            fontFamily="Abrade"
            fontWeight="580"
            marginTop={"2.7"}
          >
            A FullStack Dev &{" "}
            <Text
              as="i"
              fontWeight="bold"
              color={useColorModeValue("red", "red")}
            >
              <TextTransition
                inline="true"
                direction="down"
                springConfig={presets.stiff}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </Text>
            <br />
            Crafting High-Quality{" "}
            {/* <chakra.span bg={useColorModeValue("linear-gradient(transparent 30%, #83e9e7 50%)","linear-gradient(transparent 30%, #07beb8 90%)")}>
              Full Stack{''}
            </chakra.span>{' '} */}{" "}
            Web, App and SAAS Solutions with a Focus on shipping Values &
            <Text
              color={useColorModeValue(
                "rgb(255, 127, 17)",
                "rgb(255, 177, 111)"
              )}
            >
              {" "}
              Execllence.
            </Text>
          </Text>

          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
            <Box
            // as={RouterLink} // Use RouterLink instead of Link
            // to="/about"
            >
              <button
                // as={RouterLink} // Use RouterLink instead of Link
                // to="/about" // Specify the target route
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={dynamicCss}
                className="button"
                onClick={() => {
                  let dest = document.getElementById("About");
                  console.log(dest);
                  dest.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 512 512"
                  height="1em"
                  fill={colorTransition()}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
                <Text
                  transitionDuration="1.5s"
                  color={colorTransition()}
                  ml={"-2px"}
                  mt={"-2px"}
                >
                  Explore
                </Text>
              </button>
            </Box>

            {colorMode === "light" ? (
              <Box
                d="flex"
                justifyContent="center"
                bg={lightBackgroundColor}
                w={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
                h={{ base: "47px", sm: "auto", md: "auto", lg: "auto" }}
                ml={{ base: "10px", sm: "0", md: "0", lg: "0" }}
                border="1.2px solid"
                borderColor="gray.300"
                p={3}
                lineHeight={1.18}
                rounded="md"
                boxShadow="md"
                zIndex={1}
                as="a"
                href="/resume"
              >
                Resume📜
              </Box>
            ) : (
              <Box
                d="flex"
                justifyContent="center"
                bg={darkBackgroundColor}
                w={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
                h={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
                ml={{ base: "10px", sm: "0", md: "0", lg: "0" }}
                border="1px solid"
                borderColor="gray.300"
                p={0}
                lineHeight={1.18}
                rounded="8.7px"
                boxShadow="md"
                zIndex={1}
                as="a"
                href="/resume"
              >
                <Star />
              </Box>
            )}
          </HStack>
        </Stack>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          marginBottom={{ base: "50px", md: "200px", lg: "20px" }}
          marginTop={{ base: "-10px", lg: "" }}
        >
          {" "}
          <DottedBox />
          <Box
            position={"relative"}
            height={{ base: "30.5vh", sm: "297", md: "297", lg: "297" }}
            rounded={"20px"}
            w={{ base: "400px", md: "400px", lg: "400px" }}
            overflow={"hidden"}
            boxShadow={`4px 4px 20px -1px ${useColorModeValue(
              "rgb(255, 142, 16)",
              "rgb(238, 130, 238)"
            )}`}
          >
            <HeroImage />
          </Box>
        </Flex>
      </Stack>
    </Container>
    </>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left={{ base: "-70px", sm: "280px", md: "-20px", lg: "-20px" }}
      top={{ base: "30px", sm: "27px", md: "-20px", lg: "40px" }}
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("red", "violet")}
        width={{ base: "34px", sm: "67px", md: "60px", lg: "9px" }}
        height={{ base: "34px", sm: "0px", md: "0px", lg: "9px" }}
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="13"
            height="13"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="2" height="2" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="504"
          height="350"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default Hero;
