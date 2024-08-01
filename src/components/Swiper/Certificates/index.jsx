"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Stack, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import Seo from "../../../utils/Seo";
import Image from "next/image";

// Create a context for the certs folder
const certsContext = require.context(
  "../../../data/certificates/certs",
  false,
  /\.(png|jpe?g)$/
);
export default function Certificates() {
  // Get all images from the certs folder
  const images = certsContext.keys().map(certsContext);
  return (
    <>
      <Seo />
      <div id="app" style={{ height: "100%" }}>
        <Container maxW="4xl" mb={-10}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 0, md: 0 }}
            style={{
              position: "relative",
              height: "100%",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "14px",
              color: "#000",
              margin: 0,
              padding: 0,
            }}
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              freeMode={true}
              rewind={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              loop={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
              style={{
                width: "100%",
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "300px",
                    height: "230px",
                  }}
                >
                  <Image
                    alt={image}
                    src={image}
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
          </Stack>
        </Container>
      </div>
    </>
  );
}
