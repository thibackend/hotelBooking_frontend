import { Link, Outlet } from "react-router-dom";
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
import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import Hero from "../home/Hero";

import { Grid, Box } from "@chakra-ui/react";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hotels")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Hero />

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        justifyItems="center"
        mx="auto"
      >
        {rooms.map((room) => (
          <Box key={room.id} alignSelf="flex-start">
            <Card maxW="sm" p="4" mt="4">
              <CardBody className="Box">
                <Image
                  src={room.image}
                  alt={room.name}
                  borderRadius="20px"
                  width="400px"
                  height="350px"
                  cursor="pointer"
                  objectFit="cover"
                />
                <Stack mt="6" spacing="0">
                  <Flex alignItems="center">
                    <Link
                      to={`/room/${room.id}`}
                      size="md"
                      className="title"
                      ml="auto"
                    >
                      <b>{room.name}</b>
                    </Link>
                    {/* <i className="fa-sharp fa-regular fa-star"></i> */}
                    {/* <Text fontSize="sm">{room.likes} Likes</Text> */}
                  </Flex>

                  <Text className="infor">
                    Address: {room.address} <br />
                    Star: {room.star}<i className="fa-sharp fa-regular fa-star"></i>
                  </Text>
                  <b>Description: {room.hotel_desc}</b>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Rooms;
