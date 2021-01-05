import React from 'react';
import { Box } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface Props {
    toggle: () => void;
    isOpen: boolean;
}

const MenuIcon = () => (
    <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle: React.FC<Props> = ({ toggle, isOpen, ...props }) => {
    return (
        <Box display={{ base: 'block', md: 'none' }} color="primary" onClick={toggle} {...props}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

export default MenuToggle;
