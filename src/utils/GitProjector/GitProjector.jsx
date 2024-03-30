// import { useState, useEffect } from 'react';
// import parser from './parser.js';
// import {
//   Box,
//   Center,
//   Heading,
//   Image,
//   VStack,
//   Text,
//   Stack,
//   Badge,
//   Link,
//   List,
//   ListItem,
//   AspectRatio,
//   useColorModeValue,
//   Button,
//   HStack,
//   Grid,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Spinner
// } from "@chakra-ui/react";

// const username = "ashutosh7i";
// const token = process.env.REACT_APP_TOKEN;

// function GitProjector() {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchProjects = async () => {
//     try {
//       const projectsData = await parser(username, token);
//       setProjects(projectsData);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching projects:', error.message);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   console.log(projects);
//   return (
//     <>
//       <Modal isOpen={isLoading} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Loading</ModalHeader>
//           <ModalBody>
//             <Center>
//               <Spinner />
//             </Center>
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <Center py={6}>
//       <Grid
//         templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
//         gap={6}
//       >
//         {projects.map((project, index) => (
//           <Box
//             key={index}
//             w={'full'}
//             bg='gray.500'
//             _dark={{ bg: "gray" }}
//             boxShadow={'2xl'}
//             rounded={'md'}
//             p={6}
//             overflow={'hidden'}
//           >
//             <Box bg={'gray.100'}>
//               <AspectRatio ratio={2/1}>
//                 <Image src={project.readme.heroimage.link} alt={project.readme.heroimage.name} />
//               </AspectRatio>
//             </Box>
//             <br/>
//             <Stack>
//               <Text
//                 color={'green.500'}
//                 textTransform={'uppercase'}
//                 fontWeight={800}
//                 fontSize={'sm'}
//                 letterSpacing={1.1}>
//                 Blog
//               </Text>
//               <Heading
//                 color='black'
//                 _dark={{ color: "white" }}
//                 fontSize={'2xl'}
//                 fontFamily={'body'}>
//                   {project.readme.title}

//               </Heading>

//               <Text color={'white'}>
//               {project.readme.description}
//               </Text>
//                 <Text color={'white'}>
//                   Features
//                   <List>
//                   {project.readme.features && project.readme.features.map((feature, index) => (
//                     <ListItem key={index}>{feature}</ListItem>
//                   ))}
//                   </List>
//                 </Text>

//             </Stack>
//             <Text
//               textTransform={'uppercase'}
//               fontWeight={800}
//               fontSize={'sm'}
//               letterSpacing={1.1}>
//               TechStack
//             </Text>
//             <HStack>
//               {project.readme.techStack && project.readme.techStack.map((tech, index) => (

//                   <Image key={tech} boxSize="16px" src={tech.link} alt={tech.name} />
//               ))}
//             </HStack>
//             <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
//               {project.readme.badges && project.readme.badges.map((badge, index) => (
//                 <Badge key={index} style={{backgroundColor: badge.color, color:"white", marginLeft:5}}>{badge.name}</Badge>
//               ))}
//             </Stack>
//             <Stack mt={8} direction={'row'} spacing={4}>
//               <Button
//                 flex={1}
//                 fontSize={'sm'}
//                 rounded={'full'}
//                 _focus={{
//                   bg: 'gray.200',
//                 }}>
//                 Github
//               </Button>
//               <Button
//                 flex={1}
//                 fontSize={'sm'}
//                 rounded={'full'}
//                 bg={'blue.400'}
//                 color={'white'}
//                 boxShadow={
//                   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//                 }
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//                 _focus={{
//                   bg: 'blue.500',
//                 }}>
//                 Source
//               </Button>
//             </Stack>
//             </Box>
//         ))}
//       </Grid>
//       </Center>
//     </>
//   );
// }

// export default GitProjector;
import { useState, useEffect } from "react";
import parser from "./parser.js";
import {
  Box,
  Center,
  Image,
  Text,
  Stack,
  Badge,
  List,
  ListItem,
  AspectRatio,
  useColorModeValue,
  Button,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";

const username = "ashutosh7i";
const token = process.env.REACT_APP_TOKEN;

function GitProjector() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const textColor = useColorModeValue("gray.600", "gray.200");
  const cardBg = useColorModeValue("gray.100", "gray.700");

  const fetchProjects = async () => {
    try {
      const projectsData = await parser(username, token);
      setProjects(projectsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Modal isOpen={isLoading} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Loading</ModalHeader>
          <ModalBody>
            <Center>
              <Spinner />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Center py={6}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              w={"full"}
              bg={cardBg}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box bg={"gray.100"}>
                <AspectRatio ratio={2 / 1}>
                  <Image
                    src={project.readme.heroimage.link}
                    alt={project.readme.heroimage.name}
                  />
                </AspectRatio>
              </Box>
              <Stack mt={4}>
                <Text
                  color={textColor}
                  fontWeight={700}
                  fontSize={"xl"}
                  mt={2}
                  mb={2}
                  textTransform={"uppercase"}
                >
                  {project.readme.title}
                </Text>
                <Text color={textColor}>{project.readme.description}</Text>
                <Text color={textColor}>
                  Features
                  <List>
                    {project.readme.features &&
                      project.readme.features.map((feature, index) => (
                        <ListItem key={index}>{feature}</ListItem>
                      ))}
                  </List>
                </Text>
              </Stack>
              <Stack mt={2} direction={"row"} spacing={4}>
                {project.readme.badges &&
                  project.readme.badges.map((badge, index) => (
                    <Badge key={index} colorScheme={badge.color}>
                      {badge.name}
                    </Badge>
                  ))}
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Github
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Source
                </Button>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Center>
    </>
  );
}

export default GitProjector;
