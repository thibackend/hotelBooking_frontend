import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Img, Grid, GridItem } from '@chakra-ui/react';
import '../style/detail_room.css';

export default function DetailRoom() {
    const [hotelData, setHotelData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hotels/{id}')
            .then((response) => response.json())
            .then((data) => {
                setHotelData(data);
            });
    }, []);

    return (
        <Box p="100px">
            {hotelData ? (
                <div>
                    <Heading>{hotelData.name} phòng {hotelData.star} sao</Heading>
                    <SimpleGrid columns={2} spacing={3}>
                        <Box>
                            <Img src={hotelData.images[0]} alt="" w='100%' h='299px' borderTopLeftRadius="10px" borderBottomLeftRadius="10px" />
                        </Box>
                        <Box>
                            <SimpleGrid columns={2} spacing={3}>
                                {hotelData.images.slice(1, 5).map((image, index) => (
                                    <Box key={index} className={index === 0 ? 'image-top' : 'image-bottom'}>
                                        <Img src={image} alt="" w='100%' h='143.5px' />
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </Box>
                        <Grid templateColumns="repeat(6, 1fr)">
                            <GridItem as="div" colSpan={2} minHeight="100hv"></GridItem>
                            <GridItem as="div" colSpan={4}></GridItem>
                        </Grid>
                    </SimpleGrid>
                    <Text>Địa chỉ: {hotelData.address}</Text>
                    <Text>{hotelData.desc}</Text>
                    <Text>Liên hệ chủ nhà {hotelData.contact}</Text>
                    <Text>12 khách 3 phòng ngủ 9 giường4 phòng tắm đầy đủ và 1 phòng vệ sinh cơ bản</Text>
                    <Box>
                        <Text as="b">Không gian riêng để làm việc</Text>
                        <Text>Một căn phòng có Wi-fi, rất phù hợp để làm việc.</Text>
                        <Text as="b">Tự nhận phòng</Text>
                        <Text>Bạn có thể gặp nhân viên trực cửa để nhận phòng.</Text>
                        <Text as="b">Pongkuna (Praow) là Chủ nhà siêu cấp</Text>
                        <Text>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</Text>
                    </Box>
                    <Heading as="h5">Nơi bạn sẽ ngủ nghỉ</Heading>
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
                    <Heading as="h5">Nơi này có những gì cho bạn</Heading>
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
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
}
