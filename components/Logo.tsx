import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Logo = (props: any) => {
    return (
        <Box {...props}>
            <Text fontSize="1.5rem" fontWeight="bold">
                Logo
            </Text>
        </Box>
    );
};

export default Logo;
