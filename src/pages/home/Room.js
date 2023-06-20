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
// import { Icon } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";
import "./Room.css";
import { Grid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const MyComponent = () => {
  const [data, setData] = useState();
  // const [datahotels, setDatahotels] = useState([]);
  // const [star ,setStar ]= useState([]);
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

  const fetchData = async () => {
    try {
      await axios
        .get("http://127.0.0.1:8000/api/hotel_and_images")
        .then((res) => setData(res.data));
      // if (data) {
      //   let arrayHotel = data.hotels.map((e) => {
      //     let a = e.id;
      //     let image = "";
      //     let hotel_images = data.images.filter((id_hotel) => {
      //       return id_hotel.hotel_id === a;
      //     });
      //     image = hotel_images.map((img, index) => {
      //       if (index === 0) {
      //         return img.image;
      //       } else {
      //         return null;
      //       }
      //     });
      //     let datahotel = {
      //       id: e.id,
      //       name: e.name,
      //       address: e.address,
      //       image: image,
      //       contact: e.contact,
      //       star: e.star,
      //       status: e.status,
      //     };
      //     return datahotel;
      //   });
      //   // setDatahotels(arrayHotel);
      //   setDatahotels(arrayHotel);
      // }
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
                    <a href="/somewhere" size="md" className="title" ml="auto">
                      <b>{e.name}</b>
                    </a>
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
                  <Link to={"/detailHotel"}>
                    <button>dettail</button>
                  </Link>
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
