import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
// import { Icon } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";
import "./Room.css";
import { Grid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://63a571e42a73744b008e23f7.mockapi.io/API/product"
      );
      // Handle the response data
      console.log(setData(response.data));
    } catch (error) {
      // Error handling code here
      console.log(error);
    }
  }
  fetchData();
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      justifyItems="center"
      mx="auto"
    >
      {data.map(e => (
        <Box alignSelf="flex-start" key={e.ID}>
          <Card maxW="sm" p="4" mt="4">
            <CardBody className="Box">
              <Image
                src={e.avatar}
                alt="Green double couch with wooden legs"
                borderRadius="20px"
                width="400px"
                height="350px"
                cursor="pointer"
                objectFit="cover"
              />

              <Stack mt="6" spacing="0">
                <Flex alignItems="center">
                  <Link to={'/detail'} size="md" className="title" ml="auto">
                    <b>{e.name}</b>
                  </Link>
                  {/* <Icon
                    as={FaStar}
                    color="yellow.500"
                    boxSize={18}
                    mr={1}
                    className="star-icon"
                  /> */}
                  <i className="fa-sharp fa-regular fa-star"></i>
                  <Text fontSize="sm">25 Likes</Text>
                </Flex> 

                <Text className="infor">
                  Địa điểm: Singapore <br />
                  Ngày hoạt động : {e.date}
                </Text>
                <b>${e.price} / Đêm</b>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
      ))}

      <>
        
      </>
    </Grid>
  );
};

export default MyComponent;
