import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Container, Grid, Spinner } from "@chakra-ui/react";
import Seo from "@/utils/Seo";
import Image from "next/image";

export default function BlogCardCarousel({ color }) {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/rss");
        const blogData = await response.json();
        setBlogs(blogData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const cardStyle = {
    width: "450px",
    border: `2px solid ${color || "black"}`,
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  };

  const titleStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    mt: "2",
    color: "",
  };

  const sliderContainerStyle = {
    width: "100%",
    overflowX: "scroll",
    display: "flex",
    scrollBehavior: "smooth",
  };

  return (
    <Container w="100%" maxW={"3xl"} id="about">
      <Seo />
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 5, md: 10 }}
      >
        <Box>
          <Text pb={"20px"}>⬅️Blogs you might like➡️</Text>
          {isLoading ? (
            <Spinner />
          ) : (
            <Box className="carousel-container" style={sliderContainerStyle}>
              <Grid
                templateColumns={`repeat(${blogs.length}, 470px)`}
                gap={4}
                style={{ flex: "0 0 auto" }}
              >
                {blogs.map((blog, index) => (
                  <Box
                    key={index}
                    p="4"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    position="relative"
                    style={cardStyle}
                  >
                    {currentIndex === index && (
                      <Box
                        position="absolute"
                        top="2"
                        right="2"
                        bgColor="blue.500"
                        color="white"
                        px="2"
                        py="1"
                        borderRadius="md"
                      >
                        Latest
                      </Box>
                    )}
                    {blog.coverImage && (
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        height="840"
                        width="1600"
                      />
                    )}
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Text style={titleStyle}>{blog.title}</Text>
                    </a>
                  </Box>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
