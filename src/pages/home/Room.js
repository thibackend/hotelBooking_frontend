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
const MyComponent = () => {
  const [data, setData] = useState();
  const [datahotels, setDatahotels] = useState([]) || undefined;

  if (data) {
    let hotel;
    data.hotels.map((e) => {
      let a = e.id;
      let image = '';
      data.images.filter((id) => id.hotel_id == a)
        .filter((id) => id.hotel_id == a)
        .map((img) => {
          image =img.image;
          return null;
        });

      let datahotel = [
        {
        'id':a,
        "name":e.name,
        "address":e.address,
        "image":image,
        "contact":e.contact,
        "star":e.star,
        "status":e.status,
        }
      ]
      if(!datahotels){
        setDatahotels(datahotel);
      }else{
        hotel = datahotels.concat(datahotel);
      }
    });
    setDatahotels(hotel);
    console.log('===============data hotels=====================');
    console.log(datahotels);
    console.log('====================================');
  }
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("http://127.0.0.1:8000/api/hotels").then((res) => {
      setData(res.data);
    });
  };
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      justifyItems="center"
      mx="auto"
    >
      {data
        ? data.hotels.map((e) => (
            <Box alignSelf="flex-start" key={e.id}>
              <Card maxW="sm" p="4" mt="4">
                <CardBody className="Box">
                  <Image
                    src={""}
                    alt="Green double couch with wooden legs"
                    borderRadius="20px"
                    width="400px"
                    height="350px"
                    cursor="pointer"
                    objectFit="cover"
                  />

                  <Stack mt="6" spacing="0">
                    <Flex alignItems="center">
                      <a href="" size="md" className="title" ml="auto">
                        <b>{e.name}</b>
                      </a>
                      {/* <Icon
                    as={FaStar}
                    color="yellow.500"
                    boxSize={18}
                    mr={1}
                    className="star-icon"
                  /> */}
                      <i className="fa-sharp fa-regular fa-star"></i>{" "}
                      <Text fontSize="sm"></Text>
                    </Flex>

                    <Text className="infor">
                      Địa điểm: {e.address} <br />
                      hoạt động : {e.status ? "Open" : "Closed"}
                    </Text>
                    <b>${"100 $"} / Đêm</b>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Box>
          ))
        : ""}
    </Grid>
  );
};

export default MyComponent;
