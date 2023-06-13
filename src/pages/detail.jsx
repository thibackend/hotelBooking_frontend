import React from 'react'
import { Container, Heading, Text, Box, SimpleGrid, Img, Center, Grid, GridItem } from '@chakra-ui/react'

export default function DetailRoom() {
  return (
    <Container p={100} bg="blue.500">
        <Heading>Biệt thự trên đồi núi</Heading>
        <SimpleGrid columns={2} spacing={8} >
        <Box>
            <Img src="https://a0.muscache.com/im/pictures/a71562ca-bb0e-425d-b33f-e397617159e8.jpg?im_w=960" alt="" w='100%' h='299px' borderTopLeftRadius="10px" borderBottomLeftRadius="10px"/>
        </Box>
        <Box>
            <SimpleGrid columns={2} spacing={5}>
            <Box>
                <Img src="https://a0.muscache.com/im/pictures/7c706ab5-bd25-4b46-8eab-c8458cd63326.jpg?im_w=720" alt="" w='100%' h='145px' />
            </Box>
            <Box>
                <Img src="https://a0.muscache.com/im/pictures/5f372b7d-3aeb-46ef-9cee-5651915e532e.jpg?im_w=720" alt="" w='100%' h='145px' borderTopRightRadius="10px"/>
            </Box>
            <Box>
                <Img src="https://a0.muscache.com/im/pictures/41904a38-14b7-4aa7-a3a4-dc575dab442f.jpg?im_w=720" alt="" w='100%' h='145px' />
            </Box>
            <Box>
                <Img src="https://a0.muscache.com/im/pictures/0cad80b2-4734-41ff-bc11-b9b6af0c3c53.jpg?im_w=720" alt="" w='100%' h='145px' borderBottomRightRadius="10px"/>
            </Box>
            </SimpleGrid>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)">
            <GridItem as="content" colSpan="2" minHeight="100hv"></GridItem>
            <GridItem as="check-booking" colSpan="4" ></GridItem>
        </Grid>
        </SimpleGrid>
        <Text>Toàn bộ biệt thự. Chủ nhà Pongkuna (Praow)</Text>
        <Text>12 khách3 phòng ngủ 9 giường4 phòng tắm đầy đủ và 1 phòng vệ sinh cơ bản</Text>
        <Box>
            <Text as="b">Không gian riêng để làm việc</Text>
            <Text>Một căn phòng có Wi-fi, rất phù hợp để làm việc.</Text>
            <Text as="b">Tự nhận phòng</Text>
            <Text>Bạn có thể gặp nhân viên trực cửa để nhận phòng.</Text>
            <Text as="b">Pongkuna (Praow) là Chủ nhà siêu cấp</Text>
            <Text>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</Text>
        </Box>
        <Heading as="h3">Nơi bạn sẽ ngủ nghỉ</Heading>
        <SimpleGrid columns={3} marginLeft="10px">
            <Box border="solid 1px gray" w="50%" p="10px" textAlign="center" borderRadius="20px">
                <Text as="b">Phòng ngủ 1</Text>
                <Text>1 giường queen</Text>
            </Box>
            <Box border="solid 1px gray" w="50%" p="10px" textAlign="center" borderRadius="20px">
                <Text as="b">Phòng ngủ 2</Text>
                <Text>1 giường đôi</Text>
            </Box>
            <Box border="solid 1px gray" w="50%" p="10px" textAlign="center" borderRadius="20px">
                <Text as="b">Phòng ngủ 3</Text>
                <Text>1 giường queen, 6 giường đơn</Text>
            </Box>
        </SimpleGrid>
        <Heading as="h3">Nơi này có những gì cho bạn</Heading>
        <SimpleGrid columns={2}>
            <Box>
                <Text>Hướng nhìn ra núi</Text>
                <Text>Wi-fi</Text>
                <Text>Chỗ đỗ xe miễn phí tại nơi ở</Text>
                <Text>Bồn tắm nước nóng</Text>
                <Text>Máy phát hiện khí CO</Text>
            </Box>
            <Box>
                <Text>Bếp</Text>
                <Text>Không gian riêng để làm việc</Text>
                <Text>Hồ bơi Riêng</Text>
                <Text>Camera an ninh trong nhà</Text>
                <Text>Máy báo khói</Text>
            </Box>
        </SimpleGrid>
    </Container>
  )
}