import React from 'react';
import { Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, Box } from '@chakra-ui/react';
import Logo from '../Logo';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const DrawerMenu: React.FC<Props> = ({ isOpen, onClose, children }) => {
    const btnRef = React.useRef(null);

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <Box paddingY="3rem">
                        <Logo color="primary" w="100%" textAlign="center" />
                        {children}
                    </Box>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};

export default DrawerMenu;
