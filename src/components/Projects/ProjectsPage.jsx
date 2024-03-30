import React from "react";
import {
  Stack,
  Text,
  Container,
  Box,
  Heading,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../utils/Seo";
import GitProjector from "../../utils/GitProjector/GitProjector";

export default function ProjectsPage() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Seo />
      <Container maxW={"6xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 20 }}
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
                  P
                </Text>
              ) : (
                <Text
                  as="span"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  bgClip="text"
                >
                  P
                </Text>
              )}
              roject
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
                Content below loads dynamically from GitHub GraphQL API
              </Text>
              <Box
                w="50%"
                h="px"
                bg={useColorModeValue("rgb(26, 32, 44)", "rgb(233, 237, 242)")}
              />
            </Flex>
            <Text>Work under progress👨‍💻</Text>
          </Stack>
          <GitProjector />
        </Stack>
      </Container>
    </>
  );
}

// import {
//   Box,
//   Center,
//   Heading,
//   Image,
//   VStack,
//   Text,
//   Stack,
//   Button,
//     Badge,
//     AspectRatio,
//   Avatar,
//   useColorModeValue,
// } from '@chakra-ui/react'

// export default function BlogPostWithImage() {
//   return (
//     <Center py={6} pt={20}>
//         <VStack maxW={'400px'}>
//       <Box

//         w={'full'}
//         bg={useColorModeValue('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
//           <AspectRatio ratio={4/3}>

//           <Image
//             src={
//               'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//             }
//             // fill
//             alt="Example"

//           />
//           </AspectRatio>
//         </Box>
//         <br/>
//         <Stack>
//           <Text
//             color={'green.500'}
//             textTransform={'uppercase'}
//             fontWeight={800}
//             fontSize={'sm'}
//             letterSpacing={1.1}>
//             Blog
//           </Text>
//           <Heading
//             // eslint-disable-next-line react-hooks/rules-of-hooks
//             color={useColorModeValue('gray.700', 'white')}
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//             Boost your conversion rate
//           </Heading>
//           <Text color={'gray.500'}>
//             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//             eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
//             voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
//           </Text>
//         </Stack>
//         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
//           <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
//           <Stack direction={'column'} spacing={0} fontSize={'sm'}>
//             <Text fontWeight={600}>Achim Rolle</Text>
//             <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
//           </Stack>
//         </Stack>
//         <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
//           <Badge
//             px={2}
//             py={1}
//             bg={useColorModeValue('gray.50', 'gray.800')}
//             fontWeight={'400'}>
//             #art
//           </Badge>
//           <Badge
//             px={2}
//             py={1}
//             bg={useColorModeValue('gray.50', 'gray.800')}
//             fontWeight={'400'}>
//             #photography
//           </Badge>
//           <Badge
//             px={2}
//             py={1}
//             bg={useColorModeValue('gray.50', 'gray.800')}
//             fontWeight={'400'}>
//             #music
//           </Badge>
//         </Stack>

//         <Stack mt={8} direction={'row'} spacing={4}>
//           <Button
//             flex={1}
//             fontSize={'sm'}
//             rounded={'full'}
//             _focus={{
//               bg: 'gray.200',
//             }}>
//             Message
//           </Button>
//           <Button
//             flex={1}
//             fontSize={'sm'}
//             rounded={'full'}
//             bg={'blue.400'}
//             color={'white'}
//             boxShadow={
//               '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//             }
//             _hover={{
//               bg: 'blue.500',
//             }}
//             _focus={{
//               bg: 'blue.500',
//             }}>
//             Follow
//           </Button>
//         </Stack>
//       </Box>
//       </VStack>
//     </Center>
//   )
// }

// import {
//   Box,
//   Center,
//   Heading,
//   Image,
//   VStack,
//   Text,
//   Stack,
//   Button,
//   Badge,
//   AspectRatio,
//   Avatar,
//   useColorModeValue,
// } from '@chakra-ui/react'

// export default function BlogPostWithImage() {
//   return (
//     <Center py={6} pt={20}>
//       <VStack maxW={'400px'}>
//         <Box
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.900')}
//           boxShadow={'2xl'}
//           rounded={'md'}
//           p={6}
//           overflow={'hidden'}>
//           <Box h={'210px'} bg={'gray.100'} mb={6}>
//             <AspectRatio ratio={4/3}>
//               <Image
//                 src={
//                   'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//                 }
//                 alt="Example"
//               />
//             </AspectRatio>
//           </Box>
//           <br/>
//           <Stack pt={2}>
//             <Text

//               color={'green.500'}
//               textTransform={'uppercase'}
//               fontWeight={800}
//               fontSize={'sm'}
//               letterSpacing={1.1}>
//               Blog
//             </Text>
//             <Heading
//               color={useColorModeValue('gray.700', 'white')}
//               fontSize={'2xl'}
//               fontFamily={'body'}>
//               Boost your conversion rate
//             </Heading>
//             <Text color={'gray.500'}>
//               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//             </Text>
//             <VStack>
//             <Text color={'gray.500'}>
//               Features
//               1.
//               2.
//               3.
//             </Text>
//             </VStack>
//           </Stack>
//         <Text
//             textTransform={'uppercase'}
//             fontWeight={800}
//             fontSize={'sm'}
//             letterSpacing={1.1}>
//             TechStack
//           </Text>
//           <HStack><Image src>name</Image>...</HStack>

//         <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
//           <Badge
//          px={2}
//             py={1}
//             bg={color}
//             fontWeight={'400'}>
//             {name}
//           </Badge>
//           <Badge
//             px={2}
//             py={1}
//             bg={color}
//             fontWeight={'400'}>
//             name
//           </Badge>
//          ...
//         </Stack>

//         <Stack mt={8} direction={'row'} spacing={4}>
//           <Button
//             flex={1}
//             fontSize={'sm'}
//             rounded={'full'}
//             _focus={{
//               bg: 'gray.200',
//             }}>
//             Github
//           </Button>
//           <Button
//             flex={1}
//             fontSize={'sm'}
//             rounded={'full'}
//             bg={'blue.400'}
//             color={'white'}
//             boxShadow={
//               '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//             }
//             _hover={{
//               bg: 'blue.500',
//             }}
//             _focus={{
//               bg: 'blue.500',
//             }}>
//             Source
//           </Button>
//         </Stack>
//         </Box>
//       </VStack>
//     </Center>
//   )
// }
