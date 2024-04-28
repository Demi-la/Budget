import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Text } from "@chakra-ui/react";

const CircularProgressBar = () => {
  const percentage = 49;
  return (
    <>
      <Box
        bg={"transparent"}
        height={"80%"}
        width={"80%"}
        border={"1rem solid rgba(173, 216, 230, 0.5)"}
        borderRadius={"50%"}
        padding={"0rem"}
        margin={"auto"}
        mt={"2rem"}
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            root: {},
            path: {
              stroke: "blue",
              strokeWidth: 6,
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(50turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "transparent",
              strokeLinecap: "round",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "blue",
              fontSize: "1.5rem",
              fontWeight: "700",
            },
          }}
        />
      </Box>
      <Box textAlign={"center"} mt={"1rem"}>
        <Text color={"gray"} fontSize={"16px"}>
          Amount spent so far
        </Text>
        <Text color={"blue"} fontSize={"1.3rem"} fontWeight={"600"} mt={"1rem"}>
          ₦50,000
          <Text as="span" color={"rgba(51, 178, 220, 0.5)"}>
            /₦120,000
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default CircularProgressBar;
