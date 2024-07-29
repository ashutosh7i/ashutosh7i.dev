"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import badgeData from "../../../data/badges/badges.json";
import Seo from "../../../utils/Seo";
import Image from "next/image";

export default function Badges() {
  const images = badgeData;
  const height = "160px";
  const width = "177px";
  const h1 = "Badges";
  const h2 = " & ";
  const h3 = "Certificates";
  const description = "i got across platforms";
  const reverse = false;

  const { colorMode } = useColorMode();
  return (
    <>
      <Seo />
      <Container maxW="4xl" mb={-10}>
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
            {h1}
            {colorMode === "light" ? (
              <Text as="span" color="rgb(7, 190, 184)">
                {h2}
              </Text>
            ) : (
              <Text
                as="span"
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
              >
                {h2}
              </Text>
            )}{" "}
            {h3}
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
              {description}
            </Text>
            <Box
              w="50%"
              h="px"
              bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
            />
          </Flex>
        </Stack>
        <div
          style={{ height: "100%" }}
          ml={{ base: "-57px", sm: "-10px", md: "50px", lg: "" }}
          mr={{ base: "-57px", sm: "-10px", md: "50px", lg: "" }}
        >
          <Swiper
            style={{
              width: "100%",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
            effect={"coverflow"}
            grabCursor={true}
            freeMode={true}
            rewind={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 0,
              modifier: 0.2,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: reverse,
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: width,
                  height: height,
                }}
              >
                <img
                  src={image.image}
                  alt={image.name}
                  loading="eager"
                  style={{
                    display: "block",
                    width: "100%",
                    userSelect: "none",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
}
