import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Room.css";
import { Grid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const MyComponent = () => {
  const [data, setData] = useState();

  // hàm dùng đé tạo sao cho hotel
  const Star = (star) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i >= star) {
        stars.push(<i key={i} className="fa-sharp far fa-star"></i>);
      } else {
        stars.push(
          <i
            key={i}
            className="fa-solid fa fa-star"
            style={{ color: "#fffa61" }}
          ></i>
        );
      }
    }
    return stars;
  };

  // lấy data để show ra.
  const fetchData = async () => {
    try {
      await axios
        .get("http://127.0.0.1:8000/api/hotel_and_images")
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      justifyItems="center"
      mx="auto"
    >
      {data ? (
        data.map((e, index) => (
          <Box alignSelf="flex-start" key={index}>
            <Card maxW="sm" p="4" mt="4">
              <CardBody className="Box">
                <Image
                  src="./public/images/hotel/{e.image[0]}"
                  alt="Green double couch with wooden legs"
                  borderRadius="20px"
                  width="400px"
                  height="350px"
                  cursor="pointer"
                  objectFit="cover"
                />
                <Stack mt="6" spacing="0">
                  <Flex alignItems="center">
                    <Link href="/somewhere" size="md" className="title" ml="auto">
                      <b>{e.name}</b>
                    </Link>
                    <br></br>

                    <Text fontSize="sm"></Text>
                  </Flex>

                  <Text className="infor">
                    <div
                      className="my-5"
                      style={{ display: "flex", paddingRight: "100%" }}
                    >
                      {Star(e.star)}
                    </div>
                    Địa điểm: {e.address} <br />
                    hoạt động : {e.status ? "Open" : "Closed"}
                  </Text>
                  <b>${e.star * 50} / Đêm</b>
                  <Box>
                    <Link to={`detailHotel/${e.id}`}>
                      dettail
                    </Link>
                  </Box>

                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Box>
        ))
      ) : (
        <h1 className="d-flex justify-content-center"> Loading ...</h1>
      )}
    </Grid>
  );
};

export default MyComponent;
