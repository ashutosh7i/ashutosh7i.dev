import {
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Image,
  Heading,
  Flex,
  SimpleGrid,
  Badge,
  useColorModeValue,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import React, { useState, useEffect } from 'react';
import {ReactTyped} from 'react-typed';
import Seo from '../../utils/Seo';
import TechStack from '../../data/skils/techstacks.json';
import TagsArray from '../../data/skils/tagsarray.json';
import thingsIDo from '../../data/skils/thingsido.json';

const AllTechStack = () => {
  return (
    <Center>
      <Card
        ml={{ base: '-57px', sm: '-10px', md: '50px', lg: '' }}
        mr={{ base: '-57px', sm: '-10px', md: '50px', lg: '' }}
      >
        <Seo/>
        <Center>
          <Box
            w="100%"
            maxW="2xl" // Adjust the width here to make the box bigger
            bg={useColorModeValue('rgb(203, 213, 224)', 'rgb(45, 55, 72)')}
            color={useColorModeValue('black', 'white')}
            fontFamily="consolas"
            p={4}
            rounded="md"
            // textAlign="left"
            mb={2}
          >
            <Center>
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                All Tech Stacks🧑🏻‍💻
              </Text>
            </Center>
            <Wrap spacing={2}>
              {TechStack.map(stack => (
                <React.Fragment key={stack.name}>
                  {stack.data.map(technology => (
                    <WrapItem key={technology.name}>
                      <Image
                      //  src={technology.import ? require(`${technology.image}`).default : technology.image}
                      src={technology.image}
                        alt={technology.name}
                        boxSize={{
                          base: '35px',
                          sm: '54px',
                          md: '66px',
                          lg: '66px',
                        }}
                        m={1}
                      />
                    </WrapItem>
                  ))}
                </React.Fragment>
              ))}
            </Wrap>
          </Box>
        </Center>
      </Card>
    </Center>
  );
};

const TechCard = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={useColorModeValue(
        'rgb(247, 250, 252)',
        'rgb(45, 55, 72)'
      )}
      p={5}
    >
      <Stack align={'center'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          // rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading textAlign={'center'} size="md">
            {heading}
          </Heading>
          <Text
            color={useColorModeValue('rgb(62, 79, 89)', 'rgb(179, 186, 194)')}
            textAlign={'center'}
            mt={1}
            fontSize={'sm'}
          >
            {description}
          </Text>
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // If there are more than 3 items in the JSON, show the "Show More" button
    if (thingsIDo.length > 3) {
      setShowMore(false);
    }
  }, []);

  const onToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Flex flexWrap="wrap" gridGap={3} justify="center">
      {thingsIDo.slice(0, 3).map((item, index) => (
        <TechCard
          key={index}
          heading={item.heading}
          icon={
            <Image
              src={item.image}
              alt={`${item.heading} Icon`}
              boxSize={16} // Adjust the size as needed
            />
          }
          description={item.description}
          href={'#'}
        />
      ))}
      {showMore ? (
        thingsIDo.slice(3).map((item, index) => (
          <TechCard
            key={index + 3}
            heading={item.heading}
            icon={
              <Image
                src={item.image}
                alt={`${item.heading} Icon`}
                boxSize={16} // Adjust the size as needed
              />
            }
            description={item.description}
            href={'#'}
          />
        ))
      ) : (
        <Button
          onClick={onToggle}
          variant={'outline'}
          colorScheme={'blue'}
          size={'sm'}
          mt={4}
        >
          Show More
        </Button>
      )}
    </Flex>
  );
};

export default function TechStackComponent({ color }) {
  const techStack = TechStack;
  const options = TagsArray;
  const { colorMode } = useColorMode();

  const [selected, setSelected] = useState('All');

  const handleSelected = value => {
    setSelected(value);
  };

  return (
    <>
    <Seo/>
      <Container maxW={'4xl'} id="skills">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 0, md: 0 }}
        >
          <Heading
            mt={'10%'}
            mb={'-6%'}
            fontSize={'4xl'}
            color={useColorModeValue('rgb(45, 55, 72)', 'white')}
          >
            My{' '}
            {colorMode === 'light' ? (
              <Text as="span" color="rgb(7, 190, 184)">
                Skillset
              </Text>
            ) : (
              <Text
                as="span"
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
              >
                Skillset
              </Text>
            )}
          </Heading>

          <Flex
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
              Things i Use!
            </Text>
            <Box
              w="50%"
              h="px"
              bg={useColorModeValue('rgb(26, 32, 44)', 'rgb(233, 237, 242)')}
            />
          </Flex>

          <Center px={4}>
            <Wrap spacing={2}>
              <WrapItem>
                <Button
                  colorScheme={selected === 'All' ? `blue` : 'gray'}
                  backgroundColor={
                    selected === 'All' ? 'rgb(20, 147, 233)' : ''
                  }
                  textColor={selected === 'All' ? 'white' : ''}
                  onClick={() => handleSelected('All')}
                >
                  📲All🎒
                </Button>
              </WrapItem>
              {options.map(option => (
                <WrapItem key={option.value}>
                  <Button
                    colorScheme={
                      selected === option.value ? 'cyan' : 'gray'
                    }
                    onClick={() => handleSelected(option.value)}
                  >
                    {option.value}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Center>

          <SimpleGrid px={20} spacing={4}>
            {techStack.map(stack => (
              <Fade bottom key={stack.name}>
                this text should stay here
                {(selected === stack.name || selected === 'All') &&
                  selected !== 'All' && (
                    <Card
                      ml={{ base: '-30px', sm: '20px', md: '50px', lg: '70px' }}
                      mr={{ base: '-30px', sm: '20px', md: '50px', lg: '70px' }}
                    >
                      <Stack>
                        <CardBody
                          w={{ base: '', lg: '' }}
                          align="center"
                          h={[null, '40vh']}
                          // maxW="2xl"
                          fontWeight="bold"
                        >
                          <Box w="100%" maxW="3xl" textAlign="center" mb={4}>
                            <Text fontSize="xl" fontWeight="bold" mb={2}>
                              {stack.name}
                            </Text>
                            {stack.data.map(technology => (
                              <Center>
                                <Box
                                  key={technology.name}
                                  display="flex"
                                  alignItems="center"
                                  mb={2}
                                >
                                  <Image
                                    src={technology.image}
                                    alt={technology.name}
                                    boxSize={7}
                                    mr={2}
                                  />

                                  <ReactTyped
                                    strings={[technology.name]}
                                    typeSpeed={150}
                                  />
                                  <Image
                                    src={technology.image}
                                    alt={technology.name}
                                    boxSize={7}
                                    ml={1.5}
                                  />
                                </Box>
                              </Center>
                            ))}
                          </Box>
                          <Center>
                            <HStack flexWrap="wrap" pt={0} spacing={2}>
                              {stack.badges.map(badge => (
                                <Badge
                                  my={2}
                                  key={badge.text}
                                  colorScheme={badge.colorScheme}
                                >
                                  {badge.text}
                                </Badge>
                              ))}
                            </HStack>
                          </Center>
                        </CardBody>
                      </Stack>
                    </Card>
                  )}
              </Fade>
            ))}
            {selected === 'All' && <AllTechStack />}
          </SimpleGrid>

          <Flex
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
              Things i Do!
            </Text>
            <Box
              w="50%"
              h="1px"
              bg={useColorModeValue('rgb(26, 32, 44)', 'rgb(233, 237, 242)')}
            />
          </Flex>
          <Skills/>
    
        </Stack>
      </Container>
    </>
  );
}
