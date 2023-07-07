import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import FormBooking from "./FormBooking";

export default function CheckoutForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} colorScheme='blue'>Checkout</Button>

            <Modal isOpen={isOpen} onClose={onClose}  size={"2xl"}>
                <ModalOverlay  size={"2xl"}>
                    <ModalContent  size={"2xl"}>
                        <ModalHeader>CHECK OUT</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody size={"2xl"}>
                            <FormBooking />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="ghost">Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}