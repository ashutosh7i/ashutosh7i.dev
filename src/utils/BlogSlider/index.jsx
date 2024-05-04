import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Stack,
  Container,
  Image,
  Spinner,
} from '@chakra-ui/react';
import Seo from '../Seo';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function BlogCardCarousel({ color }) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/blog-rss-xml');
        const rssText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rssText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const blogData = Array.from(items).map(item => {
          const titleElement = item.querySelector('title');
          const linkElement = item.querySelector('link');
          const coverImageElement = item.querySelector('cover_image');

          return {
            title: titleElement ? titleElement.textContent : 'No title',
            link: linkElement ? linkElement.textContent : 'No link',
            coverImage: coverImageElement ? coverImageElement.textContent : 'No cover image',
          };
        });

        setBlogs(blogData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
        setIsLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  const cardStyle = {
    width: '450px',
    border: `2px solid ${color || 'black'}`,
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    mt: '2',
    color: '',
  };

  return (
    <Container w="100%" maxW={'3xl'} id="about">
      <Seo/>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 5, md: 10 }}
      >
        <Box>
          <Text pb={'20px'}>⬅️Blogs you might like➡️</Text>
          {isLoading ? (
            <Spinner />
          ) : (
            <ScrollMenu>
              {blogs.map((blog, index) => (
                <Box
                  itemId={`card-${index}`} // itemId is required for tracking items
                  key={index}
                  p="4"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  position="relative"
                  style={cardStyle}
                >
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    h="240px"
                    w="100%"
                    objectFit="cover"
                  />
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    <Text style={titleStyle}>{blog.title}</Text>
                  </a>
                </Box>
              ))}
            </ScrollMenu>
          )}
        </Box>
      </Stack>
    </Container>
  );
}