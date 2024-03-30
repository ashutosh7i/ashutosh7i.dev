import {
  Box,
  Container,
  Stack,
  Text,
  Input,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../utils/Seo/";

export default function Footer() {
  return (
    <>
      <Seo />
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 Aashutosh Soni</Text>
          <Text padding={"2px"}>Made with 💖,☕&🥤by Ashutosh7i</Text>

          <Stack align={"flex-end"}>
            <Stack direction={" row"}>
              <Input
                placeholder={"Get Updates"}
                bg={useColorModeValue("blackA1pha.100 ", "whiteA1pha.100 ")}
                border={0}
                _focus={{
                  bg: "whiteA1pha. 300",
                }}
              />
              <IconButton
                bg={useColorModeValue(" green .400 ", "green.800")}
                color={useColorModeValue("white ", "gray.800")}
                _hover={{
                  bg: " green. 600",
                }}
                aria-label=" Subscribe "
                icon={"s"}
              />
            </Stack>
          </Stack>

          <Box>
            <Image
              src={
                "https://wakatime.com/badge/user/62850a07-caf8-470f-86a7-660093b4f5b4/project/6d8594ba-4f54-4f6c-bfab-468b927b3b78.svg"
              }
            ></Image>
            <Image
              src={
                "https://wakatime.com/badge/user/62850a07-caf8-470f-86a7-660093b4f5b4/project/23100cfd-def9-4254-a488-fd50a66e5734.svg"
              }
            ></Image>
            <Image
              src={
                "https://wakatime.com/badge/user/62850a07-caf8-470f-86a7-660093b4f5b4/project/a0725d5b-0d43-4ad9-8709-4e689e5ea9c5.svg"
              }
            ></Image>
            <Image
              src={
                "https://wakatime.com/badge/user/62850a07-caf8-470f-86a7-660093b4f5b4/project/018e65ba-8390-4f2f-b504-014368cd620e.svg"
              }
            ></Image>
          </Box>
        </Container>
      </Box>
    </>
  );
}
