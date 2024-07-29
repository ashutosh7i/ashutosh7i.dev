import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../utils/Seo";

import "./css.css";

import initialTestimonials from "../../data/testimonials/testimonials.json";

function Testimonial(props) {
  const { children } = props;
  return <Box>{children}</Box>;
}

function TestimonialContent(props) {
  const { children } = props;
  return (
    <Stack
      bg={useColorModeValue("rgb(226, 232, 240)", "rgb(48, 59, 82)")}
      boxShadow={"lg"}
      height={"220px"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      justifyContent="center"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue(
          "rgb(226, 232, 240)",
          "rgb(48, 59, 82)"
        ),
        pos: "absolute",
        bottom: "-15px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Seo />
      {children}
    </Stack>
  );
}

function TestimonialText(props) {
  const { children } = props;
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("rgb(64, 63, 76)", "rgb(238, 224, 203)")}
      fontSize={"md"}
    >
      <i> " {children}"</i>
    </Text>
  );
}

function TestimonialAvatar(props) {
  const { src, name, title, link } = props;

  const colors = [
    "rgb(238, 118, 116)",
    "rgb(249, 181, 172)",
    "rgb(185, 245, 216)",
    "rgb(249, 145, 204)",
    "rgb(46, 192, 249)",
    "rgb(242, 237, 111)",
    "rgb(109, 177, 191)",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Box
        bg={randomColor}
        p={"1"}
        rounded={"40px"}
        onClick={() => window.open(link, "_blank")}
      >
        <Avatar borderColor={"rgb(238, 118, 116)"} size={"lg"} src={src} />
      </Box>
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={700} onClick={() => window.open(link, "_blank")}>
          {name}
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"sm"}
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
}

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const TestimonialComponent = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  useEffect(() => {
    bind();
  }, [bind]);

  const [inputTestimonial, setInputTestimonial] = useState("");
  const [inputAvatarSrc, setInputAvatarSrc] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!inputTestimonial || !inputAvatarSrc || !inputName || !inputTitle) {
      alert("Please fill in all fields.");
      return;
    }

    const newTestimonial = {
      content: inputTestimonial,
      avatarSrc: inputAvatarSrc,
      name: inputName,
      title: inputTitle,
    };
    setInputTestimonial("");
    setInputAvatarSrc("");
    setInputName("");
    setInputTitle("");

    // Update testimonials array with the new testimonial
    setTestimonials((prevTestimonials) => [
      ...prevTestimonials,
      newTestimonial,
    ]);

    // Create the mailto link
    const mailtoLink = `mailto:I@ashutosh7i.dev?subject=New Testimonial Request&body=Testimonial: ${newTestimonial.content}%0A%0AImageLink: ${newTestimonial.avatarSrc}%0AName: ${newTestimonial.name}%0ADesn: ${newTestimonial.title}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    alert(
      "Thank you for your Testimonial✅, it will be added on next Build.😄"
    );
  };

  const [testimonials, setTestimonials] = useState(initialTestimonials);

  return (
    <>
    <Seo/>
      <Text
        textAlign={"center"}
        fontFamily={"serif"}
        fontSize={"37px"}
        fontWeight={"medium"}
      >
        <u>Testimonials</u>
      </Text>
      <div className="container" {...bind()}>
        {testimonials.map((testimonial, index) => (
          <animated.div
            key={index}
            className="card"
            style={{
              ...style,
            }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialText>{testimonial.content}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={testimonial.avatarSrc}
                name={testimonial.name}
                title={testimonial.title}
                link={testimonial.link}
              />
            </Testimonial>
          </animated.div>
        ))}

        {/* Form to submit new testimonial */}
        <div className="form" style={{ margin: "20px" }}>
          <Stack spacing={4}>
            <Heading size="lg">Add New Testimonial</Heading>
            <Input
              placeholder="Your Testimony"
              value={inputTestimonial}
              onChange={(e) => setInputTestimonial(e.target.value)}
            />
            <Input
              placeholder="Photo link"
              value={inputAvatarSrc}
              onChange={(e) => setInputAvatarSrc(e.target.value)}
            />
            <Input
              placeholder="Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <Input
              placeholder="Designation"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default TestimonialComponent;
