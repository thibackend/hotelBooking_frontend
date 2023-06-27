import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Img, Grid, GridItem } from '@chakra-ui/react';
import '../../style/detail_room.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { isMotionComponent } from 'framer-motion';
import { RoomDetail } from './roomDetai';
export default  HotelDetail;
function HotelDetail() {
    const { id } = useParams();
    let idHotel = id;
    const [hotelData, setHotelData] = useState([]);
    const [dataRun, setDataRun] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [status, setStatus] = useState(true);
    const fetchData = async () => {
        try {
            let res = await axios.get(`http://127.0.0.1:8000/api/hotel_and_images/${id}`);
            if (res.data) {
                setHotelData(res.data);
                if (hotelData) {
                    setStatus(false);
                }
            }
        } catch (error) {
        }
    }
    useEffect(
        () => {
            if (status) {
                fetchData();
            }
            if (hotelData) {
                const data = hotelData[0];
                if (data && data.image) {
                    setImgs(data.image);
                    setDataRun(data);
                }
            }
        }, [hotelData]);
    return (
        <Box p="100px">
            {hotelData && imgs && dataRun ? (
                <>
                    <Heading>{dataRun.name} phòng {dataRun.star} sao</Heading>
                    <SimpleGrid columns={2} spacing={3}>
                        <Box>
                            <Img src={imgs[0]} alt="" w='100%' h='299px' borderTopLeftRadius="10px" borderBottomLeftRadius="10px" />
                        </Box>
                        <Box>
                            <SimpleGrid columns={2} spacing={3}>
                                {imgs.slice(1, 5).map((image, index) => (
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
                    <Text>Địa chỉ: {dataRun.address}</Text>
                    <Text>{dataRun.desc}</Text>
                    <Text>Liên hệ chủ nhà {dataRun.contact}</Text>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <RoomDetail idHotel={id} />
        </Box>
    );
}
