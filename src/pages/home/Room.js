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
import React, { useEffect, useState } from "react";
// import { Icon } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";
import "./Room.css";
import { Grid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get('http://localhost:8000/api/hotel_and_images')
      .then(res => { 
        console.log("data :", res.data); 
        setData(res.data)
      })
  }
  useEffect(
    () => {
      getData();
    }
    , []
  )
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      justifyItems="center"
      mx="auto"
    >
      {data ? data.map(e => (
        <Box alignSelf="flex-start" key={e.id}>
          <Card maxW="sm" p="4" mt="4">
            <CardBody className="Box">
              <Image
                src={e.image[0]}
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
                  Địa điểm: {e.address} <br />
                  hoạt động : {e.status ? "Open" : "Close"}
                </Text>
                <b>${e.star * 50} / Đêm</b>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
      )) : <h1> Have no data </h1>}

      <>

      </>
    </Grid>
  );
};

export default MyComponent;
