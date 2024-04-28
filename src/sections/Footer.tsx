import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiHome } from "react-icons/bi";
import { HiOutlineDocument } from "react-icons/hi2";
import { BiText } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";


const Footer = () => {
  const footerNav = [
    {
      id: 1,
      icon: <BiHome />,
      text: "Home",
    },
    {
      id: 2,
      icon: <HiOutlineDocument />,
      text: "Reports",
    },
    {
      id: 3,
      icon: <BiText />,
      text: "Chat",
    },
    {
      id: 4,
      icon: <MdBarChart />,
      text: "Budget",
    },
    {
      id: 5,
      icon: <FaRegUser />,
      text: "Profile",
    },
  ];
  return (
    <Box
      bg={"white"}
      p={"1rem"}
      position={"sticky"}
      bottom={"0"}
      boxShadow="0 -2px 4px rgba(0, 0, 0, 0.1)"
      w={"100%"}
      zIndex={"99"}
    >
      <Flex justifyContent={"space-between"} color={"gray"}>
        {footerNav.map((item) => (
          <Box key={item.id}>
            <Box fontSize={"2rem"} _hover={{ color: "blue" }} ml={"3px"}>
              {item?.icon}
            </Box>
            <Text>{item.text}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Footer;
