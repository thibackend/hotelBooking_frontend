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
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} colorScheme="blue">Checkout</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl" className="bootstrap-modal">
                <ModalOverlay />
                <ModalContent borderWidth="2px" borderColor="gray.400">
                    <ModalHeader className="modal-header">CHECK OUT</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className="modal-body">
                        <FormBooking />
                    </ModalBody>
                    <ModalFooter className="modal-footer">
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
