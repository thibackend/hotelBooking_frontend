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
                width="380px"
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
                  <i className="fa-sharp fa-regular fa-star"></i>
                  <Text fontSize="sm">25 Likes</Text>
                </Flex>

                <Text className="infor">
                  Được thiết kế bởi: Nguyễn Hữu Thắng <br />
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
        {/* <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-558301697240493277/original/b129a99e-9813-4371-83e8-a877028b50ff.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              height="350px"
              cursor= "pointer"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
              <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$31 / Đêm</b>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/b555929b-b686-44f0-8b54-4777bec0fc7c.jpg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
              <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$75 / Đêm</b>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/4780de8f-624b-41a5-80c9-063fda3d0972.jpg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              height="350px"
              cursor= "pointer"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
              <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$82 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>
      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/784e8976-a97d-4a80-a161-2a0f3434ae98.jpg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
              <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$60 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>
      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-764792211968108791/original/a126f0f2-e720-4d80-9b7d-084d3dcedaba.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
               <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$55 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-735186767197742896/original/2ec2a787-77e3-4511-81d3-53f0397b257b.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              height="350px"
              cursor= "pointer"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
          <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$90 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/2cbf2b15-6c60-443d-8876-6e38365cbbbf.jpg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
          <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$52 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-736027734885544316/original/00b8ceae-9ad4-480f-a29b-eca6b0fbfcef.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              height="350px"
              cursor= "pointer"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
               <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$40 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-862243725462007339/original/6cbb821e-5a9b-4f76-8323-2cfce314c9b2.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
             <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$84 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-739283895746609789/original/ca6f934f-eb70-4780-8e57-164e7e4e4aaa.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
             <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$96 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>

      <Box alignSelf="flex-start">
        <Card maxW="sm" p="4" mt="4">
          <CardBody>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-737364285871658488/original/b1b01add-8903-442e-8acd-ba99bc6b99d6.jpeg?im_w=720"
              alt="Green double couch with wooden legs"
              borderRadius="20px"
              width="380px"
              cursor= "pointer"
              height="350px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="0">
            <Heading size='md'>koh Samui ThaiLan</Heading> 
              <Flex alignItems="center">
                <a href="" size="md" className="title" ml="auto">
                  <b>Koh Samui ThaiLan</b>
                </a>
                <Icon
                  as={FaStar}
                  color="yellow.500"
                  boxSize={18}
                  mr={1}
                  className="star-icon"
                />
                <Text fontSize="sm">25 Likes</Text>
              </Flex>
              <Text className="infor">
                Được thiết kế bởi: Nguyễn Hữu Thắng <br />
                Ngày hoạt động : 11-10-2003
              </Text>
              <b>$122 / Đêm</b>
            </Stack>
          </CardBody>

          <Divider />
        </Card>
      </Box>
       */}
      </>
    </Grid>
  );
};

export default MyComponent;
