import React from "react";
import { LuPiggyBank } from "react-icons/lu";
import { LuConciergeBell } from "react-icons/lu";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Category = () => {
  const categories = [
    {
      id: 1,
      icon: <LuConciergeBell color="#f1cf35" />,
      title: "Food and Drink",
      percentage: 40,
      amount: "₦20,000",
      totalAmount: "₦42,000",
      progressBarColor: "#f1cf35",
      bgColor: "rgba(249, 228, 131, 0.3) ",
    },
    {
      id: 2,
      icon: <LuPiggyBank color="rgba(0, 100, 0, 0.3)" />,
      title: "Savings",
      percentage: 20,
      amount: "₦10,000",
      totalAmount: "₦24,000",
      progressBarColor: "rgba(0, 100, 0, 0.3)",
      bgColor: "rgba(131, 254, 131, 0.3)",
    },
  ];
  return (
    <Box width={"100%"} mt={"3rem"}>
      <Text fontWeight={"600"} fontSize={"1.5rem"}>
        Category Breakdown
      </Text>
      <Flex flexDirection={"column"} gap={"2rem"} mt={"2rem"}>
        {categories.map((category) => (
          <Box key={category.id}>
            <Flex justifyContent={"space-between"}>
              <Flex>
                <Box position={"relative"} w={"4rem"}>
                  <Box
                    top="50%"
                    left="50%"
                    fontSize={"2.5rem"}
                    position={"absolute"}
                    h={"4rem"}
                    w={"4rem"}
                    borderRadius={"50%"}
                    transform="translate(-50%, -50%)"
                    zIndex={"1"}
                    bg={category.bgColor}
                  >
                    <Box mt={"0.6rem"} ml={"0.8rem"}>
                      {category.icon}
                    </Box>
                  </Box>
                  <Box position="relative" zIndex={99}>
                    <CircularProgressbar
                      value={category.percentage}
                      styles={{
                        root: {},
                        path: {
                          stroke: category.progressBarColor,
                          strokeWidth: 6,
                          strokeLinecap: "butt",
                        },
                        trail: {
                          stroke: "transparent",
                          strokeWidth: 6,
                          strokeLinecap: "butt",
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box mt={"1rem"} ml={"6px"}>
                  <Text fontSize={"0.85rem"} fontWeight={"600"}>
                    {category.title}
                  </Text>
                  <Text>{category.percentage}%</Text>
                </Box>
              </Flex>

              <Box mt={"1rem"}>
                <Text fontSize={"0.85rem"} fontWeight={"600"}>
                  {category.amount}/
                  <Text as="span" color={"gray"}>
                    {category.totalAmount}
                  </Text>
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Category;
