import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Stack,
  Container,
  Grid,
  Image,
  Spinner,
} from "@chakra-ui/react";
import Seo from "../Seo";

export default function BlogCardCarousel({ color }) {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Add this line

  useEffect(() => {
    const fetchRSSFeed = async () => {
      setIsLoading(true); // Set isLoading to true before fetching data
      try {
        const response = await fetch("https://blog.ashutosh7i.dev/rss.xml");
        const rssText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rssText, "text/xml");
        const items = xmlDoc.querySelectorAll("item");

        const blogData = Array.from(items).map((item) => {
          const titleElement = item.querySelector("title");
          const linkElement = item.querySelector("link");
          const coverImageElement = item.querySelector("cover_image");

          return {
            title: titleElement ? titleElement.textContent : "No title",
            link: linkElement ? linkElement.textContent : "No link",
            coverImage: coverImageElement
              ? coverImageElement.textContent
              : "No cover image",
          };
        });

        setBlogs(blogData);
        setIsLoading(false); // Set isLoading to false after fetching data
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
        setIsLoading(false); // Set isLoading to false even if there was an error
      }
    };

    fetchRSSFeed();
  }, []);

  const cardStyle = {
    width: "450px",
    border: `2px solid ${color || "black"}`, // Use the specified color for the border, or default to black
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
    width: "100%", // Set the width of the slider container to fit the screen
    overflowX: "scroll", // Enable horizontal scrolling
    display: "flex", // Make the cards displayed in a flex container
    scrollBehavior: "smooth", // Add smooth scrolling behavior
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
            <Spinner /> // Render a Spinner component from Chakra UI while loading
          ) : (
            <Box className="carousel-container" style={sliderContainerStyle}>
              <Grid
                templateColumns={`repeat(${blogs.length}, 470px)`}
                gap={4}
                style={{ flex: "0 0 auto" }} // Ensure that the flex container maintains its width
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
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      h="240px"
                      w="100%"
                      objectFit="cover"
                    />
                    {/* Make the title clickable */}
                    <a
                      href={blog.link}
                      aria-label=" Blog"
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
