import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

interface Props {
    toggle: () => void;
    isOpen: boolean;
}

const MenuToggle: React.FC<Props> = ({ toggle, isOpen, ...props }) => {
    return (
        <Box display={{ base: 'block', md: 'none' }} color="primary" onClick={toggle} {...props}>
            {/* {isOpen ? <CloseIcon /> : <FaBars />} */}
            <FaBars size="1.4rem" />
        </Box>
    );
};

export default MenuToggle;
