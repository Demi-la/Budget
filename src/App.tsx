import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabProps,
} from "@chakra-ui/react";
import CircularProgressBar from "./sections/CircularProgressBar";
import Category from "./sections/Category";
import Footer from "./sections/Footer";

function App() {
  const CustomTab = React.forwardRef<HTMLButtonElement, TabProps>(
    (props, ref) => {
      return (
        <Tab
          ref={ref}
          {...props}
          _selected={{
            color: "blue.500",
            borderBottom: "2px solid",
            borderColor: "blue.500",
            paddingBottom: "0.25rem",
          }}
          paddingX={0}
          fontWeight={"700"}
          fontSize={"1.2rem"}
        />
      );
    }
  );

  return (
    <ChakraProvider>
      <Box
        width={{ base: "100%", lg: "40%" }}
        margin={{ base: "0", lg: "auto" }}
      >
        <Box padding={"1.5rem"}>
          <Text fontWeight={"700"} fontSize={"2rem"}>
            Budget
          </Text>
          <Flex gap={"1rem"} mt={"2rem"}>
            <Box
              w={"2.5rem"}
              h={"2.5rem"}
              bg={"rgba(173, 216, 230, 0.5)"}
              borderRadius={"50%"}
            >
              <Text
                textAlign={"center"}
                color={"blue"}
                fontSize={"1.5rem"}
                mt={"2px"}
              >
                ₦
              </Text>
            </Box>
            <Text color={"grey"} fontSize={"1.3rem"} mt={"0.3rem"}>
              Monthly Budget
            </Text>
          </Flex>
          <Box
            py={"0.5rem"}
            pl={"1.5rem"}
            w={"100%"}
            borderRadius={"1rem"}
            bg={"white"}
            boxShadow={"0 0 10px rgba(220, 220, 220, 0.8)"}
            mt={"1rem"}
          >
            <Text fontWeight={"700"} fontSize={"2rem"}>
              {" "}
              ₦120,000
            </Text>
          </Box>
          <Tabs variant="unstyled" mt={"2rem"}>
            <TabList color={"grey"}>
              <CustomTab>Last Month</CustomTab>
              <CustomTab ml={"2rem"}>This Month</CustomTab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text mb={"25rem"}>
                  You currently do not have budget last month Kindly check this
                  month
                </Text>
              </TabPanel>
              <TabPanel>
                <CircularProgressBar />
                <Category />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
